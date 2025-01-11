"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import MobileMenu from "./mobile-menu";
import IconApp from "./icon-app";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex justify-between items-center py-4 px-4 md:px-16 bg-secondary-300 text-white">
      <Image
        src="/assets/logo-150x50.svg"
        alt="Logo"
        width={150}
        height={100}
        className="w-24 md:w-36 lg:w-40"
      />

      <div className="flex items-center gap-4">
        {/* CV mobile */}
        <Link 
          href="https://bucket-alejandro-dev.s3.us-east-1.amazonaws.com/static/cv_alejandro_carvajal.docx.pdf"
          target="_blank"
          className="md:hidden"
        >
          <button className="bg-primary-500 text-white px-3 py-1 rounded-md">
            CV
          </button>
        </Link>

        <button 
          onClick={toggleMenu}
          className="md:hidden flex items-center space-x-2"
          aria-label="Toggle menu"
        >
          <IconApp name="menu-fold-left" className="scale-[1.5]" size="w-8 text-white hover:text-primary-500 transition-colors" />
        </button>
      </div>

      {/* Menú desplegable */}
      <MobileMenu isOpen={ isOpen } toggleMenu={ toggleMenu } />

      <div className="hidden md:inline">
        <div className="flex space-x-4 items-center">
          <Link href="/">Inicio</Link>
          <Link href="/">Sobre mí</Link>
          <Link href="/">Proyectos</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Contacto</Link>

          <Link 
            href="https://bucket-alejandro-dev.s3.us-east-1.amazonaws.com/static/cv_alejandro_carvajal.docx.pdf"
            target="_blank"
          >
            <button className="bg-primary-500 text-white px-4 py-2 rounded-md">
              CV
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;