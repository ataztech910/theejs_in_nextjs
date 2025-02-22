'use client';

import { AppDataProvider } from './data-provider';

export default function BoxesLayout({ children }) {

    return (
        <AppDataProvider>
            {children}
        </AppDataProvider>
  )
};


