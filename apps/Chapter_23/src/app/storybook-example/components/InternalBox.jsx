"use client";
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const InternalBox = ({ position, color, size, rotationSpeed }) => {
  const ref = useRef();

  // Rotate the box continuously
  useFrame(() => {
    if (ref.current && rotationSpeed) {
      ref.current.rotation.x += rotationSpeed?.x;
      ref.current.rotation.y += rotationSpeed?.y;
      ref.current.rotation.z += rotationSpeed?.z;
    }
  });

  return (
    <mesh 
      ref={ref} 
      position={position} 
    >
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default InternalBox;
