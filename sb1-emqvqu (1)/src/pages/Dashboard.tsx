import React from 'react';
import { DollarSign, Users, FileText, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import MetricCard from '../components/dashboard/MetricCard';
import DataTable from '../components/dashboard/DataTable';
import { useAppStore } from '../store';

const recentTransactions = [
  {
    id: '1',
    date: '2024-03-10',
    description: 'Pago de factura #1234',
    amount: 1500,
    type: 'income',
  },
  {
    id: '2',
    date: '2024-03-09',
    description: 'Nómina mensual',
    amount: -8500,
    type: 'expense',
  },
  // Más transacciones...
];

const columns = [
  { key: 'date', title: 'Fecha' },
  { key: 'description', title: 'Descripción' },
  {
    key: 'amount',
    title: 'Monto',
    render: (value: number) => (
      <span className={value >= 0 ? 'text-green-600' : 'text-red-600'}>
        ${Math.abs(value).toLocaleString()}
      </span>
    ),
  },
];

export default function Dashboard() {
  const { dashboardMetrics } = useAppStore();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Panel de Control</h1>
        <p className="mt-2 text-gray-600">
          Resumen general del rendimiento de tu negocio
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Ingresos Totales"
          value={`$${dashboardMetrics.totalRevenue.toLocaleString()}`}
          icon={DollarSign}
          trend={{ value: 12.5, isPositive: true }}
        />
        <MetricCard
          title="Empleados Activos"
          value={dashboardMetrics.activeEmployees}
          icon={Users}
          trend={{ value: 4.2, isPositive: true }}
        />
        <MetricCard
          title="Facturas Pendientes"
          value={dashboardMetrics.pendingInvoices}
          icon={FileText}
          trend={{ value: 2.1, isPositive: false }}
        />
        <MetricCard
          title="Crecimiento Anual"
          value={`${dashboardMetrics.yearlyGrowth}%`}
          icon={TrendingUp}
          trend={{ value: 8.3, isPositive: true }}
        />
      </div>

      <div className="bg-white rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Transacciones Recientes
        </h2>
        <DataTable
          columns={columns}
          data={recentTransactions}
          onRowClick={(row) => console.log('Clicked row:', row)}
        />
      </div>
    </div>
  );
}