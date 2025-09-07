// src/app/manifest.ts
import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Expense Manager PWA',
    short_name: 'ExpenseManager',
    description: 'A personal expense manager PWA built with Next.js and Material-UI.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#556cd6', // This should match the primary color in the theme
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
