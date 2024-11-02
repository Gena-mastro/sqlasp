import React from 'react';
import { LayoutDashboard, FileText, Users, Receipt, PieChart, DollarSign } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const navItems = [
  { icon: LayoutDashboard, label: 'Panel', path: '/dashboard' },
  { icon: FileText, label: 'Contabilidad', path: '/dashboard/accounting' },
  { icon: Users, label: 'Nóminas', path: '/dashboard/payroll' },
  { icon: Receipt, label: 'Facturas', path: '/dashboard/invoices' },
  { icon: DollarSign, label: 'Gastos', path: '/dashboard/expenses' },
  { icon: PieChart, label: 'Informes', path: '/dashboard/reports' },
];

export default function DashboardLayout() {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">Nexus Suite</h2>
        </div>
        <nav className="p-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}