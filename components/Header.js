"use client";
import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useSearch } from "@/context/SearchContext";

export default function Header() {
  const pathname = usePathname();
  const { searchQuery, setSearchQuery } = useSearch();

  return (
    <header>
      <div className="container header-inner">
        <Link className="logo" href="/">
          <div className="logo-box">S</div>
          <div className="logo-name">
            <strong>SS Bio Solutions</strong>
            <span>Commercial Kitchen Equipment</span>
          </div>
        </Link>
        
        <nav className="nav-menu">
          <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link href="/products" className={`nav-link ${pathname === '/products' ? 'active' : ''}`}>Catalogue</Link>
          <Link href="/brands" className={`nav-link ${pathname === '/brands' ? 'active' : ''}`}>Brands</Link>
          <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>About</Link>
          <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
        </nav>

        <div className="header-right">
          <div className="contact-info">
             Call for Enquiry
             <strong>+91 98494 61986</strong>
          </div>
          <Link href="/products" className="btn-gold">Request Quote</Link>
        </div>
      </div>
    </header>
  );
}
