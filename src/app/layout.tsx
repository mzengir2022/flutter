import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeModeProvider } from '../context/ThemeModeContext';
import CssBaseline from '@mui/material/CssBaseline';
import { ExpenseProvider } from '../context/ExpenseContext';
import Layout from '../components/Layout';
import "./globals.css";

export const metadata: Metadata = {
  title: "Expense Manager",
  description: "A personal expense manager PWA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeModeProvider>
            <ExpenseProvider>
              <CssBaseline />
              <Layout>{children}</Layout>
            </ExpenseProvider>
          </ThemeModeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
