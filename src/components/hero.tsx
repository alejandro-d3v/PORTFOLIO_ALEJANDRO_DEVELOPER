"use client";

import Link from "next/link";
import Image from "next/image";

import IconApp from '@/components/icon-app';

export default function Hero() {
  return (
    <div className="lg:flex justify-between items-center h-screen bg-secondary-500 px-6 md:px-32 lg:px-60 gap-[3.75rem]">
      <div className="flex lg:hidden items-center justify-center py-6">
        <Image src="/assets/imgs/profile.png" alt="Hero" width={100} height={100} className="md:w-40" />
      </div>

      <div className="flex flex-col justify-center text-center lg:text-left">
        <h3 className="text-4xl md:text-5xl text-white">Hola, soy</h3>
        <h1 className="text-5xl md:text-7xl font-bold text-primary-500">Alejandro Carvajal</h1>
        <h3 className="text-3xl md:text-5xl text-white">Desarrollador Front-End</h3>

        <p className="text-center lg:text-left text-xl text-white my-10">
          Tengo 3 años de experiencia en el desarrollo de aplicaciones web interactivas y optimizadas, trabajando con tecnologías modernas.
        </p>

        <div className="flex flex-row gap-4 justify-center lg:justify-start">
          <Link href="https://github.com/alejandro-d3v" target="_blank">
            <IconApp name="github" className="scale-[1.5]" size="w-8 text-white hover:text-primary-500 transition-colors" />
          </Link>

          <Link href="https://www.linkedin.com/in/alejandro-carvajal-538598332" target="_blank">
            <IconApp name="linkedin" className="scale-[1.5]" size="w-8 text-white hover:text-primary-500 transition-colors" />
          </Link>

          <Link href="mailto:alejandro.develop3r@gmail.com?subject=Consulta&body=Hola,%20me%20interesaría%20saber%20más%20sobre%20tus%20servicios." target="_blank">
            <IconApp name="email" className="scale-[1.5]" size="w-8 text-white hover:text-primary-500 transition-colors" />
          </Link>

          <Link href="https://www.instagram.com/alejandrocarvajal.dev" target="_blank">
            <IconApp name="instagram" className="scale-[1.5]" size="w-8 text-white hover:text-primary-500 transition-colors" />
          </Link>
        </div>
      </div>

      <div className="hidden lg:flex flex-col items-center justify-center">
        <Image src="/assets/imgs/profile.png" alt="Hero" width={600} height={600} />
      </div>
    </div>
  );
}
