import React from "react";
import { NavLink } from "react-router-dom";
import { Search, Clapperboard, UtensilsCrossed, Ticket, Gamepad2 } from "lucide-react";

const B = ({ to, icon: Icon, label, extraClass = "" }) => (
  <NavLink
    to={to}
    className={({isActive}) => "bn-item" + (extraClass ? ` ${extraClass}` : "") + (isActive ? " active" : "")}
    aria-label={label}
  >
    <Icon size={20}/>
    <span className="mnav-label">{label}</span>
  </NavLink>
);

export default function BottomNav() {
  return (
    <nav className="bottom-nav mobile-only" role="navigation" aria-label="Bottom">
      {/* Left corner */}
      <B to="/stream"   icon={Clapperboard}   label="Stream" />
      {/* Next */}
      <B to="/tickets"  icon={Ticket}         label="Tickets" />
      {/* Center item */}
      <B to="/search"   icon={Search}         label="Search" extraClass="center" />
      {/* Next */}
      <B to="/order"    icon={UtensilsCrossed} label="Food" />
      {/* Right corner */}
      <B to="/playzone" icon={Gamepad2}       label="Play" />
    </nav>
  );
}
