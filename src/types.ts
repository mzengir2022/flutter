// src/types.ts

export type Category = 'Food' | 'Transport' | 'Utilities' | 'Entertainment' | 'Other';

export interface Expense {
  id: string;
  amount: number;
  category: Category;
  date: string; // ISO date string
  description: string;
}
