import React, { useRef, useContext, useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

export function BoxModel(props) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF('/box-transformed.glb');
 
  return (
      <group ref={groupRef} {...props}  dispose={null}>
        <mesh receiveShadow  geometry={nodes.Untitled.geometry} material={materials.palette} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
  )
}

useGLTF.preload('/box-transformed.glb');
