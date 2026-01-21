'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface HeaderProps {
  currentPage?: 'home' | 'apartments' | 'amenities' | 'features' | 'gallery' | 'blog';
  onBookShowing?: () => void;
}

export default function Header({ currentPage = 'home', onBookShowing }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: '/floorplans', label: 'Apartments', key: 'apartments' },
    { href: '/amenities', label: 'Amenities', key: 'amenities' },
    { href: '/features', label: 'Features', key: 'features' },
    { href: '/gallery', label: 'Gallery', key: 'gallery' },
    { href: '/blog', label: 'Bonita Springs', key: 'blog' },
  ];

  return (
    <>
      <header className="bg-white border-slate-200 border-b relative z-50">
        <div className="sm:px-6 lg:px-8 max-w-6xl mx-auto py-[22px] px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <img
                  src="/images/bella-logo-final.png"
                  alt="Bella Apartments logo"
                  className="w-auto h-[78px]"
                />
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className={`text-[13px] font-normal tracking-[0.18em] uppercase transition-colors ${
                    currentPage === link.key
                      ? 'text-[#5b7a99] hover:text-[#4a6580]'
                      : 'text-slate-500 hover:text-[#5b7a99]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={onBookShowing}
                className="text-[13px] font-medium tracking-[0.2em] uppercase px-4 py-2 rounded-full bg-[#5b7a99] text-white hover:bg-[#4a6580] transition-colors"
              >
                Book a Showing
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden inline-flex items-center justify-center rounded-full border border-slate-200 p-2.5 text-slate-600 bg-white hover:bg-slate-50 transition-colors"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
              >
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-500 ease-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity duration-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute inset-0 bg-white flex flex-col transition-all duration-500 ease-out ${
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
          }`}
        >
          {/* Header with logo and close */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-slate-100">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <img
                src="/images/bella-logo-final.png"
                alt="Bella Apartments logo"
                className="w-auto h-16"
              />
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2.5 text-slate-600 bg-white hover:bg-slate-50 transition-colors"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
              >
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            </button>
          </div>

          {/* Centered Navigation */}
          <nav className="flex-1 flex flex-col items-center justify-center gap-2 px-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`group relative py-4 transition-all duration-300 ${
                  isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${150 + index * 75}ms` : '0ms',
                }}
              >
                <span
                  className={`text-2xl font-light tracking-[0.12em] uppercase font-playfair transition-colors ${
                    currentPage === link.key
                      ? 'text-[#5b7a99]'
                      : 'text-slate-800 group-hover:text-[#5b7a99]'
                  }`}
                >
                  {link.label}
                </span>
                {currentPage === link.key && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[#5b7a99] rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div
            className={`px-6 py-8 border-t border-slate-100 transition-all duration-500 ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{
              transitionDelay: isMenuOpen ? '500ms' : '0ms',
            }}
          >
            <button
              onClick={() => { setIsMenuOpen(false); onBookShowing?.(); }}
              className="w-full text-[12px] font-medium tracking-[0.2em] uppercase px-6 py-4 rounded-full bg-[#5b7a99] text-white hover:bg-[#4a6580] transition-colors shadow-lg shadow-[#5b7a99]/20"
            >
              Book a Showing
            </button>
            <div className="mt-6 flex items-center justify-center gap-6 text-[11px] text-slate-500 tracking-[0.1em]">
              <a href="tel:+13125041835" className="hover:text-[#5b7a99] transition-colors">
                (312) 504-1835
              </a>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <a href="mailto:bellabonitasprings@gmail.com" className="hover:text-[#5b7a99] transition-colors">
                bellabonitasprings@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
