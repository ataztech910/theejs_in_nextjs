'use client';
import CanvasLayout from "@/components/CanvasLayout";
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

import './globals.scss';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <CanvasLayout>
          {children}
        </CanvasLayout>
      </body>
    </html>
  )
}
