'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav
      className={`navbar navbar-default navbar-trans navbar-expand-lg fixed-top ${
        pathname === '/About' ? 'bg-transparent' : 'bg-black text-white'
      }`}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-end">
          {/* Desktop Menu */}
          <div className="hidden sm:flex">
            <div className="flex space-x-4">
              {[
                { href: '/About', label: 'About' },
                
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    pathname === link.href
                      ? 'bg-blue-400 text-white'
                      : 'text-white hover:bg-pink-900 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {[
            { href: '/about', label: 'About' },
            
            { href: '/contact', label: 'Contact' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                pathname === link.href
                  ? 'bg-gray-900 text-white'
                  : 'text-white hover:bg-gray-700 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
