"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-16 bg-secondary-300 text-white">
      <Image
        src="/assets/logo-150x50.svg"
        alt="Logo"
        width={150}
        height={100}
      />

      <div className="flex space-x-4 items-center">
        <Link href="/">Inicio</Link>
        <Link href="/">Sobre mí</Link>
        <Link href="/">Proyectos</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Contacto</Link>

        <button className="bg-primary-500 text-white px-4 py-2 rounded-md">
          CV
        </button>
      </div>
    </nav>
  );
}
