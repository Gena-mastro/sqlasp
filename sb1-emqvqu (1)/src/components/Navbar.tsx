import React, { useState } from 'react';
import { Menu, X, Building2 } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Building2 size={32} className="text-blue-600" />
            <span className="text-2xl font-bold">Nexus</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#features">Características</NavLink>
            <NavLink href="#solutions">Soluciones</NavLink>
            <NavLink href="#pricing">Precios</NavLink>
            <NavLink href="#resources">Recursos</NavLink>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="px-4 py-2 text-slate-600 hover:text-slate-900">
              Iniciar Sesión
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Prueba Gratuita
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <MobileNavLink href="#features">Características</MobileNavLink>
            <MobileNavLink href="#solutions">Soluciones</MobileNavLink>
            <MobileNavLink href="#pricing">Precios</MobileNavLink>
            <MobileNavLink href="#resources">Recursos</MobileNavLink>
            <div className="pt-4 space-y-4">
              <button className="w-full px-4 py-2 text-slate-600 hover:text-slate-900">
                Iniciar Sesión
              </button>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Prueba Gratuita
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children }) {
  return (
    <a 
      href={href}
      className="text-slate-600 hover:text-slate-900 transition"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, children }) {
  return (
    <a 
      href={href}
      className="block py-2 text-slate-600 hover:text-slate-900 transition"
    >
      {children}
    </a>
  );
}

export default Navbar;