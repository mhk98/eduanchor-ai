"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/lib/site-data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          <img className="brand-logo" src="/images/logo.png" alt="EduAnchor" />
          <span>
            <strong>EduAnchor</strong>
            <small>Study Abroad Consultant CRM</small>
          </span>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
        </button>

        <nav className={`nav ${open ? "nav-open" : ""}`}>
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link className="button button-small" href="/contact" onClick={() => setOpen(false)}>
            Request Demo
          </Link>
        </nav>
      </div>
    </header>
  );
}
