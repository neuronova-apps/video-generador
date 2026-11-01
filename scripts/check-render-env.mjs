import { spawnSync } from 'node:child_process';
for(const command of ['ffmpeg','ffprobe']){
 const r=spawnSync(command,['-version'],{encoding:'utf8'});
 if(r.error||r.status!==0){console.error('Requisito ausente:',command);process.exitCode=1;}
 else console.log(command, r.stdout.split('\n')[0]);
}
if(Number(process.versions.node.split('.')[0])<22){console.error('Node.js 22+ requerido');process.exitCode=1;}
