import React from 'react';
import { BarChart, LineChart, PieChart } from 'lucide-react';
import { useAppStore } from '../store';

export default function Reports() {
  const { dashboardMetrics } = useAppStore();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Informes y Análisis</h1>
        <p className="mt-2 text-gray-600">
          Visualiza el rendimiento de tu negocio con informes detallados
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Ingresos vs Gastos</h3>
            <BarChart className="text-blue-600" />
          </div>
          <div className="h-64 flex items-center justify-center border border-dashed border-gray-300 rounded-lg">
            <span className="text-gray-500">Gráfico de Barras</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Tendencia de Ventas</h3>
            <LineChart className="text-blue-600" />
          </div>
          <div className="h-64 flex items-center justify-center border border-dashed border-gray-300 rounded-lg">
            <span className="text-gray-500">Gráfico de Líneas</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Distribución de Gastos</h3>
            <PieChart className="text-blue-600" />
          </div>
          <div className="h-64 flex items-center justify-center border border-dashed border-gray-300 rounded-lg">
            <span className="text-gray-500">Gráfico Circular</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-6">Métricas Clave</h3>
          <div className="space-y-4">
            <MetricRow
              label="Margen de Beneficio"
              value={`${((dashboardMetrics.monthlyProfit / dashboardMetrics.totalRevenue) * 100).toFixed(1)}%`}
            />
            <MetricRow
              label="Tasa de Conversión"
              value="24.8%"
            />
            <MetricRow
              label="Promedio de Venta"
              value={`$${(dashboardMetrics.totalRevenue / dashboardMetrics.pendingInvoices).toFixed(2)}`}
            />
            <MetricRow
              label="Retención de Clientes"
              value="92%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center py-2">
      <span className="text-gray-600">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}