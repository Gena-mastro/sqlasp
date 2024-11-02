import React from 'react';
import { Plus, Filter } from 'lucide-react';
import DataTable from '../components/dashboard/DataTable';
import { useAppStore } from '../store';
import { Invoice } from '../types';

const columns = [
  { key: 'number', title: 'Número' },
  { key: 'clientName', title: 'Cliente' },
  { key: 'date', title: 'Fecha' },
  {
    key: 'total',
    title: 'Total',
    render: (value: number) => `$${value.toLocaleString()}`,
  },
  {
    key: 'status',
    title: 'Estado',
    render: (value: string) => (
      <span
        className={`px-3 py-1 rounded-full text-xs font-medium ${
          value === 'paid'
            ? 'bg-green-100 text-green-800'
            : value === 'pending'
            ? 'bg-yellow-100 text-yellow-800'
            : 'bg-red-100 text-red-800'
        }`}
      >
        {
          {
            paid: 'Pagada',
            pending: 'Pendiente',
            overdue: 'Vencida',
          }[value]
        }
      </span>
    ),
  },
];

export default function Invoices() {
  const { invoices } = useAppStore();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Facturas</h1>
          <p className="mt-2 text-gray-600">
            Gestiona tus facturas y seguimiento de pagos
          </p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
            <Filter size={20} />
            Filtrar
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            <Plus size={20} />
            Nueva Factura
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6">
        <DataTable
          columns={columns}
          data={invoices}
          onRowClick={(invoice: Invoice) => {
            console.log('Selected invoice:', invoice);
          }}
        />
      </div>
    </div>
  );
}