"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { profile } from "@/lib/content";
export function Navigation() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  return (
    <header className="site-header">
      <nav
        className="nav-shell"
        aria-label="Main navigation"
        onKeyDown={(event) => {
          if (event.key === "Escape" && open) {
            setOpen(false);
            menuButton.current?.focus();
          }
        }}
      >
        <a className="brand" href="#home" aria-label="Kritika Srivastava home">
          ks<span>.</span>
        </a>
        <div className="desktop-nav">
          {["Work", "Experience", "About", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <a
            className="icon-link"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={17} />
          </a>
          <a
            className="icon-link"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={17} />
          </a>
          <Link
            className="resume-link"
            href="/resume/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume <ArrowUpRight size={14} />
          </Link>
          <button
            className="menu-toggle"
            ref={menuButton}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls={open ? "mobile-menu" : undefined}
            aria-label={open ? "Close navigation" : "Open navigation"}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="mobile-nav" id="mobile-menu">
            {["Work", "Experience", "About", "Contact"].map((item) => (
              <a
                key={item}
                onClick={() => setOpen(false)}
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
