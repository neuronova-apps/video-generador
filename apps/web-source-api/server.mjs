import http from 'node:http';
import {captureWithPlaywright} from './capture.mjs';
import {analyzeGitHubRepo} from './github.mjs';
import {lookup} from 'node:dns/promises';
import {isIP} from 'node:net';
import {analyzePublicPage,validatePublicUrl,isPublicAddress} from './source.mjs';
const port=Number(process.env.WEB_SOURCE_PORT||8788);
const origin=process.env.EDITOR_ORIGIN||'http://localhost:8000';
if(!/^http:\/\/(localhost|127\.0\.0\.1):\d{2,5}$/.test(origin))throw Error('EDITOR_ORIGIN debe ser localhost');
if(!Number.isInteger(port)||port<1||port>65535)throw Error('Puerto no válido');
const limit=4096;let processing=false;
function respond(res,status,data,requestOrigin){res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff',...(requestOrigin===origin?{'Access-Control-Allow-Origin':origin,'Vary':'Origin'}:{})});res.end(JSON.stringify(data));}
const server=http.createServer(async(req,res)=>{const supplied=req.headers.origin;if(supplied&&supplied!==origin){respond(res,403,{error:'Origen denegado'},supplied);return;}
if(req.method==='OPTIONS'&&(req.url==='/api/web/analyze'||req.url==='/api/github/analyze'||req.url==='/api/web/capture')){res.writeHead(204,{'Access-Control-Allow-Origin':origin,'Access-Control-Allow-Methods':'POST, OPTIONS','Access-Control-Allow-Headers':'Content-Type','Access-Control-Max-Age':'300'});res.end();return;}
if(req.method!=='POST'||!['/api/web/analyze','/api/github/analyze','/api/web/capture'].includes(req.url)){respond(res,404,{error:'Ruta desconocida'},supplied);return;}
if(processing){respond(res,429,{error:'Analizador ocupado'},supplied);return;}
processing=true;
try{let raw='';for await(const chunk of req){raw+=chunk.toString();if(raw.length>limit)throw Error('Solicitud demasiado grande');}
const input=JSON.parse(raw);if(typeof input.url!=='string')throw Error('URL requerida');
const result=req.url==='/api/web/capture'?await captureWithPlaywright(input.url,input.sceneIndex??0):req.url==='/api/github/analyze'?await analyzeGitHubRepo(input.url):await analyzePublicPage(input.url,{lookup,fetchImpl:fetch});respond(res,200,result,supplied);
}catch(err){respond(res,422,{error:err.message},supplied);}finally{processing=false;}
});
server.requestTimeout=8000;server.listen(port,'127.0.0.1',()=>console.log('Web source API local: '+port));
