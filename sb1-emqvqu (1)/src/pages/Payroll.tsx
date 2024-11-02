import React from 'react';
import { Plus, Download } from 'lucide-react';
import DataTable from '../components/dashboard/DataTable';
import { useAppStore } from '../store';
import { Employee } from '../types';

const columns = [
  { key: 'name', title: 'Nombre' },
  { key: 'position', title: 'Cargo' },
  { key: 'department', title: 'Departamento' },
  {
    key: 'salary',
    title: 'Salario',
    render: (value: number) => `$${value.toLocaleString()}`,
  },
  {
    key: 'status',
    title: 'Estado',
    render: (value: string) => (
      <span
        className={`px-3 py-1 rounded-full text-xs font-medium ${
          value === 'active'
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
        }`}
      >
        {value === 'active' ? 'Activo' : 'Inactivo'}
      </span>
    ),
  },
];

export default function Payroll() {
  const { employees } = useAppStore();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Nóminas</h1>
          <p className="mt-2 text-gray-600">
            Gestión de empleados y procesamiento de nóminas
          </p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
            <Download size={20} />
            Exportar
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            <Plus size={20} />
            Nuevo Empleado
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6">
        <DataTable
          columns={columns}
          data={employees}
          onRowClick={(employee: Employee) => {
            console.log('Selected employee:', employee);
          }}
        />
      </div>
    </div>
  );
}