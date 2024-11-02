import { create } from 'zustand';
import { DashboardMetrics, Invoice, Employee, Expense, AccountingEntry } from '../types';

interface AppState {
  invoices: Invoice[];
  employees: Employee[];
  expenses: Expense[];
  accountingEntries: AccountingEntry[];
  dashboardMetrics: DashboardMetrics;
  setInvoices: (invoices: Invoice[]) => void;
  setEmployees: (employees: Employee[]) => void;
  setExpenses: (expenses: Expense[]) => void;
  setAccountingEntries: (entries: AccountingEntry[]) => void;
  setDashboardMetrics: (metrics: DashboardMetrics) => void;
}

export const useAppStore = create<AppState>((set) => ({
  invoices: [],
  employees: [],
  expenses: [],
  accountingEntries: [],
  dashboardMetrics: {
    totalRevenue: 0,
    totalExpenses: 0,
    pendingInvoices: 0,
    activeEmployees: 0,
    monthlyProfit: 0,
    yearlyGrowth: 0,
  },
  setInvoices: (invoices) => set({ invoices }),
  setEmployees: (employees) => set({ employees }),
  setExpenses: (expenses) => set({ expenses }),
  setAccountingEntries: (accountingEntries) => set({ accountingEntries }),
  setDashboardMetrics: (dashboardMetrics) => set({ dashboardMetrics }),
}));