'use client';

import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { Tunnel } from "@/components/Model";
import { useRef } from 'react';

export default function CanvasLayout({ children }) {
  const ref = useRef();

  return (
    <div
        ref={ref}
    >
        { children }    
        <Canvas
         style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
          }}
        eventSource={ref}>
            <Tunnel.Out />
            <Preload all />
        </Canvas>
    </div>
  )
}