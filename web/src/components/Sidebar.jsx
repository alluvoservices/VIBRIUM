import React from "react";
import { NavLink } from "react-router-dom";
import { User, Search, Clapperboard, UtensilsCrossed, MessageCircle, Ticket, Gamepad2, Bell, Settings } from "lucide-react";

const S = ({ to, icon: Icon, label }) => (
  <NavLink to={to} className={({isActive}) => "sb-item" + (isActive ? " active" : "")} title={label}>
    <Icon size={20}/>
  </NavLink>
);

export default function Sidebar() {
  const base = import.meta.env.BASE_URL || "/";
  return (
    <aside className="sidebar">
      <div className="sb-brand">
        <img src={`${base}logo.svg`} width="22" height="22" alt="VIBRIUM"
             onError={(e)=>{e.currentTarget.onerror=null; e.currentTarget.src=`${base}logo.svg`;}} />
      </div>
      <S to="/profiles" icon={User} label="Profile"/>
      <S to="/search" icon={Search} label="Search"/>
      <S to="/stream" icon={Clapperboard} label="Stream"/>
      <S to="/order" icon={UtensilsCrossed} label="Order"/>
      <S to="/chat" icon={MessageCircle} label="Chat"/>
      <S to="/tickets" icon={Ticket} label="Tickets"/>
      <S to="/playzone" icon={Gamepad2} label="Play"/>
      <div style={{ marginTop: "auto", width: "100%" }}>
        <S to="/notifications" icon={Bell} label="Notifications"/>
        <S to="/settings" icon={Settings} label="Settings"/>
      </div>
    </aside>
  );
}
