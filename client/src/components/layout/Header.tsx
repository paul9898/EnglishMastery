import { useState } from "react";
import { Link } from "wouter";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white border-b border-neutral-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <div className="flex items-center cursor-pointer">
                  <span className="text-primary font-bold text-xl">ESL</span>
                  <span className="text-accent-1 font-bold text-xl mx-1">Learning</span>
                  <span className="text-[#333] font-bold text-xl">Hub</span>
                  <span className="ml-2 text-neutral-500 font-normal text-sm">- Fluency and IELTS</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-6">
            <a href="#grammar" className="text-[#333] hover:text-primary px-2 py-1 font-medium text-sm relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:opacity-100" aria-current="page">Grammar</a>
            <a href="#pronunciation" className="text-[#333] hover:text-primary px-2 py-1 font-medium text-sm relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:opacity-0 hover:after:opacity-100 after:transition-opacity">Pronunciation</a>
            <a href="#fluency" className="text-[#333] hover:text-primary px-2 py-1 font-medium text-sm relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:opacity-0 hover:after:opacity-100 after:transition-opacity">Fluency</a>
            <a href="#vocabulary" className="text-[#333] hover:text-primary px-2 py-1 font-medium text-sm relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:opacity-0 hover:after:opacity-100 after:transition-opacity">Vocabulary</a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="sm:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-600 hover:text-neutral-800 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <i className="fa-solid fa-bars text-xl"></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`sm:hidden ${isMobileMenuOpen ? '' : 'hidden'}`}>
          <div className="pt-1 pb-2 space-y-1 border-t border-neutral-100">
            <a href="#grammar" className="text-primary font-medium block px-3 py-1.5 text-sm" aria-current="page">Grammar</a>
            <a href="#pronunciation" className="text-neutral-700 hover:text-primary font-medium block px-3 py-1.5 text-sm">Pronunciation</a>
            <a href="#fluency" className="text-neutral-700 hover:text-primary font-medium block px-3 py-1.5 text-sm">Fluency</a>
            <a href="#vocabulary" className="text-neutral-700 hover:text-primary font-medium block px-3 py-1.5 text-sm">Vocabulary</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
