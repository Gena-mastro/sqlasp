import React from 'react';
import { Plus } from 'lucide-react';
import DataTable from '../components/dashboard/DataTable';
import { useAppStore } from '../store';
import { AccountingEntry } from '../types';

const columns = [
  { key: 'date', title: 'Fecha' },
  { key: 'description', title: 'Descripción' },
  { key: 'account', title: 'Cuenta' },
  {
    key: 'debit',
    title: 'Debe',
    render: (value: number) => `$${value.toLocaleString()}`,
  },
  {
    key: 'credit',
    title: 'Haber',
    render: (value: number) => `$${value.toLocaleString()}`,
  },
];

export default function Accounting() {
  const { accountingEntries } = useAppStore();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Contabilidad</h1>
          <p className="mt-2 text-gray-600">
            Gestiona tus registros contables y transacciones
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          <Plus size={20} />
          Nuevo Asiento
        </button>
      </div>

      <div className="bg-white rounded-lg p-6">
        <DataTable
          columns={columns}
          data={accountingEntries}
          onRowClick={(entry: AccountingEntry) => {
            console.log('Selected entry:', entry);
          }}
        />
      </div>
    </div>
  );
}