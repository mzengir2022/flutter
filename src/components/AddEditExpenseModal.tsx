// src/components/AddEditExpenseModal.tsx
'use client';

import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Expense, Category } from '../types';
import { useExpenses } from '../context/ExpenseContext';

const expenseSchema = z.object({
  description: z.string().min(1, 'Description is required'),
  amount: z.coerce.number().min(0.01, 'Amount must be greater than 0'),
  category: z.enum(['Food', 'Transport', 'Utilities', 'Entertainment', 'Other']),
  date: z.string().min(1, 'Date is required'),
});

type ExpenseFormData = z.infer<typeof expenseSchema>;

interface AddEditExpenseModalProps {
  open: boolean;
  onClose: () => void;
  expenseToEdit?: Expense | null;
}

export default function AddEditExpenseModal({
  open,
  onClose,
  expenseToEdit,
}: AddEditExpenseModalProps) {
  const { addExpense, updateExpense } = useExpenses();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(expenseSchema),
    defaultValues: {
      description: '',
      amount: 0,
      category: 'Other',
      date: new Date().toISOString().split('T')[0],
    },
  });

  React.useEffect(() => {
    if (expenseToEdit) {
      reset(expenseToEdit);
    } else {
      reset({
        description: '',
        amount: 0,
        category: 'Other',
        date: new Date().toISOString().split('T')[0],
      });
    }
  }, [expenseToEdit, reset]);

  const onSubmit = (data: ExpenseFormData) => {
    if (expenseToEdit) {
      updateExpense({ ...data, id: expenseToEdit.id });
    } else {
      addExpense(data);
    }
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{expenseToEdit ? 'Edit Expense' : 'Add Expense'}</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)} id="expense-form">
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                autoFocus
                margin="dense"
                label="Description"
                type="text"
                fullWidth
                variant="standard"
                error={!!errors.description}
                helperText={errors.description?.message}
              />
            )}
          />
          <Controller
            name="amount"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                margin="dense"
                label="Amount"
                type="number"
                fullWidth
                variant="standard"
                error={!!errors.amount}
                helperText={errors.amount?.message}
              />
            )}
          />
          <FormControl fullWidth margin="dense" variant="standard">
            <InputLabel>Category</InputLabel>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Select {...field} label="Category" error={!!errors.category}>
                  {(['Food', 'Transport', 'Utilities', 'Entertainment', 'Other'] as Category[]).map(
                    (cat) => (
                      <MenuItem key={cat} value={cat}>
                        {cat}
                      </MenuItem>
                    )
                  )}
                </Select>
              )}
            />
          </FormControl>
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                margin="dense"
                label="Date"
                type="date"
                fullWidth
                variant="standard"
                InputLabelProps={{
                  shrink: true,
                }}
                error={!!errors.date}
                helperText={errors.date?.message}
              />
            )}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button type="submit" form="expense-form">
          {expenseToEdit ? 'Save' : 'Add'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
