import React, { useState } from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import DesktopMenu from "./DesktopMenu";
import MobileMenuIcon from "./MobileComponents/MobileMenuIcon";
import MobileMenu from "./MobileComponents/MobileMenu";
import MegaMenu from "./MegaMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="fixed z-50 w-full border-b border-slate-300 bg-white">
        <div className="relative z-50 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative h-14 flex items-center justify-between">
            <Logo />
            <SearchBar />
            <DesktopMenu />
            <MobileMenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>

        {/* Mobile Menu */}
        <div>{isOpen && <MobileMenu />}</div>

        <MegaMenu />
      </header>
    </>
  );
};

export default Header;
