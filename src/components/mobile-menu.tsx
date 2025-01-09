"use client";

import Link from 'next/link';

import IconApp from '@/components/icon-app';

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`
        fixed inset-0 bg-secondary-500 z-50 
        transition-transform transform 
        ${ isOpen ? 'translate-x-0' : 'translate-x-full' }`
      }
    >
      <div className=' w-full h-full p-6 pt-16'>
        {/* Cerrar menú */}
        <button
          onClick={ toggleMenu }
          className="absolute top-4 right-4"
          aria-label="Close menu"
        >
          <IconApp name="menu-fold-right" className="scale-[1.5]" size="w-8 text-white hover:text-primary-500 transition-colors" />
        </button>

        <nav className="flex flex-col gap-2 space-y-4">
          <Link href="/" onClick={toggleMenu} className='text-xl'>
            Inicio
          </Link>
          <Link href="/" onClick={toggleMenu} className='text-xl'>
            Sobre mí
          </Link>
          <Link href="/" onClick={toggleMenu} className='text-xl'>
            Proyectos
          </Link>
          <Link href="/" onClick={toggleMenu} className='text-xl'>
            Blog
          </Link>
          <Link href="/" onClick={toggleMenu} className='text-xl'>
            Contacto
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;