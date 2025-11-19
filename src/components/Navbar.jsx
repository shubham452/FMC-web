import React, { useState, useEffect } from 'react';

const logo = '/src/assets/logo.png'; 

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#footer' },
  ];

 
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    if (open) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  
  const scrollToHash = (hash) => {
    if (!hash) return;
    const id = hash.replace(/^#/, '');
    const el = document.getElementById(id);
    const headerOffset = 80; // h-20 = 80px
    if (el) {
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    } else {
      // Fallback for router-based links or other pages
      window.location.hash = hash;
    }
  };

  
  const handleMobileNav = (e, href) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => scrollToHash(href), 50);
  };

 
  const handleDesktopNav = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      scrollToHash(href);
    }
  };

  return (
    <header className="sticky top-0 z-30">
      <nav
        className="w-full h-20 bg-[#023047] shadow-lg"
        aria-label="Main Navigation"
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Fathom Marine Logo" className="h-16 w-auto drop-shadow-md" />
            <div className="hidden sm:block">
              <div className="font-bold text-2xl text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                Fathom Marine Consultants Ltd.
              </div>
              <div className="text-xs text-white/80">Navigating maritime excellence</div>
            </div>
          </div>

      
          <div className="hidden md:flex items-center space-x-6 text-lg">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleDesktopNav(e, link.href)}
                className="font-medium text-white/90 hover:text-[#FFB703] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          
          <div className="flex items-center gap-4">
        
          <a
                href="mailto:contact@fathommarineconsultants.com"
                onClick={() => setOpen(false)} // do not call e.preventDefault()
                className="
                  block text-center px-4 py-3 rounded-lg 
                  bg-[#FFB703] text-[#023047] 
                  font-bold
                  transition-all duration-300 hover:bg-[#FB8500]
                "
              >
                Get in touch
              </a>

            
            <button
              type="button"
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <svg
                className="w-7 h-7 text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {open ? (
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <>
                    <path
                      d="M3 7h18"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 12h18"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 17h18"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      
      <div
        className={`fixed inset-0 z-50 md:hidden pointer-events-none transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0'
        }`}
        aria-hidden={!open}
      >
        
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />

        
        <div
          className={`absolute top-0 right-0 w-full max-w-xs h-full transform transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
      
          <aside
            className="h-full py-8 px-6 bg-[#023047] border-l border-white/20 shadow-2xl flex flex-col gap-6 pointer-events-auto"
            role="menu"
            aria-label="Mobile menu"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Fathom Marine Logo" className="h-12 w-auto" />
                <div className="text-white font-semibold">Fathom Marine</div>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

          
            <nav className="flex-1 flex flex-col gap-4 mt-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleMobileNav(e, link.href)}
                  className="block text-lg font-medium text-white/95 py-2 rounded-md hover:bg-white/5 transition"
                  role="menuitem"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            
            <div className="mt-auto">
            <a
                href="mailto:contact@fathommarineconsultants.com"
                onClick={() => setOpen(false)} // do not call e.preventDefault()
                className="
                  block text-center px-4 py-3 rounded-lg 
                  bg-[#FFB703] text-[#023047] 
                  font-bold
                  transition-all duration-300 hover:bg-[#FB8500]
                "
              >
                Get in touch
              </a>
            </div>
          </aside>
        </div>
      </div>
    </header>
  );
}