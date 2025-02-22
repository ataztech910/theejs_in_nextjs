
import React, { useState, useContext } from 'react';
import { MeshStandardMaterial } from "three";
import { useGLTF } from '@react-three/drei';
import { AppDataContext } from '../app/boxes/data-provider';

export function Smile(props) {
  const { nodes, materials } = useGLTF('/smile.glb');
  const [isGreen, setIsGreen] = useState(false);
  const { state } = useContext(AppDataContext);

  const smileClicked = () => {
    setIsGreen(!isGreen);
  }

  return (
    <group dispose={null} onClick={smileClicked}>
      <mesh geometry={nodes.Untitled.geometry} 
            material={!isGreen ? materials.palette : new MeshStandardMaterial({ color: 0x0ff000 })} 
            position={props.position}
            rotation={props.rotation}
            scale={state.appData.smileScale}  
            />
    </group>
  )
}

useGLTF.preload('/smile.glb');
