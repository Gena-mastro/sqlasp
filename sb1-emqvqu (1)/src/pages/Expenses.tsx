import React from 'react';
import { Plus, Filter } from 'lucide-react';
import DataTable from '../components/dashboard/DataTable';
import { useAppStore } from '../store';
import { Expense } from '../types';

const columns = [
  { key: 'date', title: 'Fecha' },
  { key: 'category', title: 'Categoría' },
  { key: 'description', title: 'Descripción' },
  {
    key: 'amount',
    title: 'Monto',
    render: (value: number) => `$${value.toLocaleString()}`,
  },
  {
    key: 'status',
    title: 'Estado',
    render: (value: string) => (
      <span
        className={`px-3 py-1 rounded-full text-xs font-medium ${
          value === 'approved'
            ? 'bg-green-100 text-green-800'
            : value === 'pending'
            ? 'bg-yellow-100 text-yellow-800'
            : 'bg-red-100 text-red-800'
        }`}
      >
        {
          {
            approved: 'Aprobado',
            pending: 'Pendiente',
            rejected: 'Rechazado',
          }[value]
        }
      </span>
    ),
  },
];

export default function Expenses() {
  const { expenses } = useAppStore();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gastos</h1>
          <p className="mt-2 text-gray-600">
            Control y seguimiento de gastos empresariales
          </p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
            <Filter size={20} />
            Filtrar
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            <Plus size={20} />
            Nuevo Gasto
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6">
        <DataTable
          columns={columns}
          data={expenses}
          onRowClick={(expense: Expense) => {
            console.log('Selected expense:', expense);
          }}
        />
      </div>
    </div>
  );
}