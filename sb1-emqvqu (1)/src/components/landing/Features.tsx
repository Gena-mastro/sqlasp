import React from 'react';
import {
  LayoutDashboard,
  FileText,
  Users,
  Receipt,
  DollarSign,
  PieChart,
} from 'lucide-react';

const features = [
  {
    name: 'Panel de Control',
    description:
      'Visualiza el rendimiento de tu empresa con métricas en tiempo real y gráficos interactivos.',
    icon: LayoutDashboard,
  },
  {
    name: 'Contabilidad',
    description:
      'Gestiona tus finanzas con un sistema contable completo y automatizado.',
    icon: FileText,
  },
  {
    name: 'Nóminas',
    description:
      'Administra empleados, salarios y beneficios de manera eficiente.',
    icon: Users,
  },
  {
    name: 'Facturación',
    description:
      'Crea y gestiona facturas profesionales con seguimiento de pagos.',
    icon: Receipt,
  },
  {
    name: 'Control de Gastos',
    description:
      'Registra y analiza gastos empresariales para optimizar recursos.',
    icon: DollarSign,
  },
  {
    name: 'Informes Avanzados',
    description:
      'Genera reportes detallados para tomar decisiones informadas.',
    icon: PieChart,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Características
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Todo lo que necesitas para tu negocio
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Una suite completa de herramientas diseñadas para hacer crecer tu
            empresa.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}