const decode=s=>String(s).replace(/&nbsp;/gi,' ').replace(/&amp;/gi,'&').replace(/&lt;/gi,'<').replace(/&gt;/gi,'>').replace(/&quot;/gi,'"').replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(Number(n))).replace(/\s+/g,' ').trim();
const strip=s=>decode(String(s).replace(/<[^>]*>/g,' '));
export function structurePage(html,{url,title='',description=''}={}){
 const clean=html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,' ').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi,' ').replace(/<(nav|footer|aside)\b[^>]*>[\s\S]*?<\/\1>/gi,' ').replace(/<!--[^]*?-->/g,' ');
 const headings=[...clean.matchAll(/<h([1-3])\b[^>]*>([\s\S]*?)<\/h\1>/gi)].map(x=>({level:Number(x[1]),text:strip(x[2])})).filter(x=>x.text.length>2).slice(0,35);
 const segments=[...clean.matchAll(/<(p|li)\b[^>]*>([\s\S]*?)<\/\1>/gi)].map(x=>strip(x[2])).filter(x=>x.length>=35&&x.length<=1100);
 const seen=new Set();const paragraphs=segments.filter(x=>{const key=x.toLowerCase().replace(/[^\p{L}\p{N}]+/gu,' ').trim();if(seen.has(key))return false;seen.add(key);return true}).slice(0,24);
 const sections=headings.slice(0,12).map((h,i)=>({heading:h.text,level:h.level,summary:paragraphs[i]||''}));
 const overview=decode(description)||paragraphs[0]||'';
 return {schemaVersion:1,sourceUrl:url,title:decode(title),overview,headings,paragraphs,sections,quality:{headingCount:headings.length,paragraphCount:paragraphs.length,method:'heuristic-html-v1'},warnings:['Extracción heurística: revisar contenido y comprobar afirmaciones con la fuente original','Menús dinámicos o contenido generado por JavaScript pueden omitirse']};
}
