import React from 'react';
import { Building2, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Building2 size={32} className="text-blue-500" />
              <span className="text-2xl font-bold text-white">Nexus</span>
            </div>
            <p className="mb-6">
              Potenciando empresas con soluciones inteligentes para contabilidad, nóminas y gestión.
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" icon={<Facebook size={20} />} />
              <SocialLink href="#" icon={<Twitter size={20} />} />
              <SocialLink href="#" icon={<Linkedin size={20} />} />
              <SocialLink href="#" icon={<Instagram size={20} />} />
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Producto</h3>
            <FooterLinks
              links={[
                'Características',
                'Integraciones',
                'Precios',
                'Actualizaciones',
                'Programa Beta'
              ]}
            />
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <FooterLinks
              links={[
                'Sobre Nosotros',
                'Carreras',
                'Prensa',
                'Contacto',
                'Blog'
              ]}
            />
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Recursos</h3>
            <FooterLinks
              links={[
                'Documentación',
                'Seguridad',
                'Política de Privacidad',
                'Términos de Servicio',
                'Estado del Sistema'
              ]}
            />
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Nexus Business Suite. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a 
      href={href}
      className="p-2 rounded-full hover:bg-slate-800 transition"
    >
      {icon}
    </a>
  );
}

function FooterLinks({ links }) {
  return (
    <ul className="space-y-3">
      {links.map((link, index) => (
        <li key={index}>
          <a 
            href="#"
            className="hover:text-white transition"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Footer;