import React, { useState, useEffect, useRef } from 'react';
import logo from "../assets/logo/logo.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { RiMenu2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

gsap.registerPlugin(useGSAP);

const Nav = () => {
  const container = useRef();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
    setIsOpen(!isOpen);
  };

  useGSAP(() => {
    gsap.to(".box", {
      y: 100,
      stagger: 0.1,
      duration: 1,
      ease: "bounce.out",
      repeatDelay: 2,
    });
  }, { scope: container });

  return (
    <div ref={container} className="sticky navbar inset-0 bg-black bg-opacity-50 backdrop-blur-md text-white top-0 z-[99999]">
      <div className="navbar flex items-center justify-between px-6 py-4 lg:px-20 lg:py-6 lg:max-w-[1800px] w-full mx-auto bg-transparent">
        {/* Logo Section */}
        <div className="flex-1">
          <a href="#home" className="font-bold text-2xl text-[#3b45d2]">Bardaval Govind</a>
        </div>

        {/* Desktop Navbar Links */}
        <div className="flex-none hidden lg:flex">
          <ul className="menu menu-horizontal flex space-x-8 text-[#61CE70]">
            {["About", "Skills", "Projects", "Certificates", "Experience", "Education", "Contact"].map((item, idx) => (
              <li key={idx}>
                <a
                  className="relative transition-all duration-300 box hover:text-green-400"
                  href={`#${item}`}
                >
                  <span className="hover-underline">{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navbar Icon */}
        <div className="flex lg:hidden items-center">
          <div className="relative">
            <button
              tabIndex={0}
              role="button"
              className="btn text-2xl btn-ghost"
              onClick={toggleDropdown}
            >
              {isOpen ? <RxCross2 /> : <RiMenu2Line />}
            </button>

            {/* Mobile Dropdown Menu */}
            {isDropdownOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm space-y-10 absolute -ml-2 duration-125 z-[1] p-2 shadow bg-base-100 rounded-box py-4 h-screen w-screen text-center items-center pt-10 text-black"
                onClick={closeDropdown}
              >
                {["About", "Skills", "Projects", "Education", "Contact"].map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={`#${item}`}
                      className="hover:text-green-500 transition duration-300 relative"
                    >
                      <span className="hover-underline">{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <a href="#home">
            <img className="h-12 w-40" src={logo} alt="Logo" />
          </a>
        </div>
      </div>

      {/* Hover underline styles */}
      <style>{`
  .hover-underline::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -2px;
    transform: translateX(-50%) scaleX(0);
    transform-origin: center;
    width: 100%;
    height: 2px;
    background-color: #61CE70;
    transition: transform 0.3s ease-in-out;
  }

  .hover-underline:hover::after {
    transform: translateX(-50%) scaleX(1);
  }
`}</style>

    </div>
  );
};

export default Nav;
