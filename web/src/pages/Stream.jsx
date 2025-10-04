import React from "react";
const hero = {
  title: "Vibrium Picks",
  tag: "Curated | Action • Adventure",
  image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1400&auto=format&fit=crop",
  poster: "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=900&auto=format&fit=crop"
};
const rows = [
  { title: "Trending Now", items: new Array(12).fill(0).map((_,i)=>({ id:"t"+i, img:`https://picsum.photos/seed/t${i}/400/600` , title:`Title ${i+1}`})) },
  { title: "Action Hits", items: new Array(12).fill(0).map((_,i)=>({ id:"a"+i, img:`https://picsum.photos/seed/a${i}/400/600` , title:`Action ${i+1}`})) }
];
export default function Stream(){
  return (
    <div className="page" style={{ padding: 0 }}>
      <div className="hero">
        <div className="hero-inner" style={{ backgroundImage: `url(${hero.image})` }}>
          <div className="hero-shade"/>
          <div className="hero-content">
            <div className="hero-title">{hero.title}</div>
            <div className="hero-tag">{hero.tag}</div>
            <button className="hero-cta">Explore</button>
          </div>
          <div style={{ display: "grid", placeItems: "center", padding: 10 }}>
            <img src={hero.poster} alt="" style={{ width: 200, borderRadius: 12, border: "1px solid var(--border)" }}/>
          </div>
        </div>
      </div>
      {rows.map(r=>(
        <div key={r.title} className="row-section">
          <div className="row-title">{r.title}</div>
          <div className="hscroll">
            {r.items.map(item=>(
              <div key={item.id} className="card">
                <img src={item.img} alt=""/>
                <div className="card-overlay"><div className="card-title">{item.title}</div></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
