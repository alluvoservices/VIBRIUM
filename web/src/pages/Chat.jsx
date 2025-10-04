import React, { useState, useRef, useEffect } from "react";
export default function Chat(){
  const [m,setM]=useState([{id:1,who:"them",text:"Welcome to Vibrium Chat!"},{id:2,who:"them",text:"Mention a movie like @Interstellar"}]);
  const [t,setT]=useState(""); const end=useRef(null); useEffect(()=>{end.current?.scrollIntoView({behavior:"smooth"})},[m]);
  function send(){const x=t.trim(); if(!x) return; setM(v=>[...v,{id:Date.now(),who:"me",text:x}]); setT("");}
  const linkify=s=>s.split(/(@[^@]+)/g).map((p,i)=>p.startsWith("@")?<a key={i} href={`/stream?q=${encodeURIComponent(p.slice(1))}`} style={{color:"#7ad7ff",textDecoration:"none"}}>{p}</a>:<span key={i}>{p}</span>);
  return (<div className="page"><h2 style={{marginTop:0}}>Chat</h2><div className="chat-wrap"><div className="msgs">{m.map(x=><div key={x.id} className={"msg "+(x.who==="me"?"me":"them")}>{linkify(x.text)}</div>)}<div ref={end}/></div><div className="composer"><input className="input" placeholder="Type… (@Movie links)" value={t} onChange={e=>setT(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()}/><button className="btn" onClick={send}>Send</button></div></div></div>);
}
