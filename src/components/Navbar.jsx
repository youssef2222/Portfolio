
import { Menu, X ,Sun, Moon } from "lucide-react";
import { useState } from "react";


export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="nav">
      <div className="nav__inner">
        <a href="#home" className="nav__logo">
          YOUSSEF
        </a>

        <button
          className="nav__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

       

        <div className={`nav__links ${menuOpen ? "active" : ""}`}>
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label="Toggle dark and light mode"
        title="Toggle theme"
        >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>

      </div>
    </nav>
  );
}
