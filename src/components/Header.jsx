import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Network, Check, Home, UserRound, Target, Compass } from 'lucide-react';

const links = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/about', label: 'About Silas', icon: UserRound },
  { to: '/vision', label: 'Vision & Mission', icon: Target },
  { to: '/techverse', label: 'Techverse', icon: Network },
  { to: '/why-silas', label: 'Why Silas?', icon: Compass },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <Link className="brand" to="/" aria-label="Silas campaign home">
          <span className="brand-mark"><Network size={21} /></span>
          <span><strong>SILAS ’26</strong><small>Edo State University</small></span>
        </Link>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
        <div className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} end={to === '/'}>
              <Icon className="mobile-nav-icon" size={16} />
              {label}
            </NavLink>
          ))}
          <Link className="nav-cta" to="/vote"><Check size={16} /> Vote Silas</Link>
        </div>
      </nav>
    </header>
  );
}
