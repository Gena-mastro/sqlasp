export interface Invoice {
  id: string;
  number: string;
  clientName: string;
  date: string;
  dueDate: string;
  items: InvoiceItem[];
  total: number;
  status: 'pending' | 'paid' | 'overdue';
}

export interface InvoiceItem {
  description: string;
  quantity: number;
  price: number;
  total: number;
}

export interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  salary: number;
  startDate: string;
  status: 'active' | 'inactive';
}

export interface Expense {
  id: string;
  date: string;
  category: string;
  description: string;
  amount: number;
  status: 'pending' | 'approved' | 'rejected';
}

export interface AccountingEntry {
  id: string;
  date: string;
  description: string;
  debit: number;
  credit: number;
  account: string;
  type: 'asset' | 'liability' | 'equity' | 'revenue' | 'expense';
}

export interface DashboardMetrics {
  totalRevenue: number;
  totalExpenses: number;
  pendingInvoices: number;
  activeEmployees: number;
  monthlyProfit: number;
  yearlyGrowth: number;
}