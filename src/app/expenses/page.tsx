// src/app/expenses/page.tsx
'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useExpenses } from '../../context/ExpenseContext';
import AddEditExpenseModal from '../../components/AddEditExpenseModal';
import { Expense } from '../../types';

export default function ExpensesPage() {
  const { expenses, deleteExpense } = useExpenses();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [expenseToEdit, setExpenseToEdit] = React.useState<Expense | null>(null);

  const handleOpenModal = (expense?: Expense) => {
    setExpenseToEdit(expense || null);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setExpenseToEdit(null);
    setModalOpen(false);
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h5" component="h1">
          Expenses
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={() => handleOpenModal()}>
          Add Expense
        </Button>
      </Box>

      {expenses.length === 0 ? (
        <Typography>No expenses yet. Add one to get started!</Typography>
      ) : (
        <List>
          {expenses.map((expense) => (
            <ListItem
              key={expense.id}
              secondaryAction={
                <>
                  <IconButton edge="end" aria-label="edit" onClick={() => handleOpenModal(expense)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete" onClick={() => deleteExpense(expense.id)}>
                    <DeleteIcon />
                  </IconButton>
                </>
              }
            >
              <ListItemText
                primary={expense.description}
                secondary={`${expense.category} - ${new Date(expense.date).toLocaleDateString()}`}
              />
              <Typography variant="body1">${expense.amount.toFixed(2)}</Typography>
            </ListItem>
          ))}
        </List>
      )}

      <AddEditExpenseModal
        open={modalOpen}
        onClose={handleCloseModal}
        expenseToEdit={expenseToEdit}
      />
    </Box>
  );
}
