import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useA11y } from "@react-three/a11y";
import { useSpring, animated } from '@react-spring/three';

export function Arrow(props) {
  const { nodes, materials } = useGLTF('/arrow.glb');
  const a11y = useA11y();
  
  const [springs, api] = useSpring(
    () => ({
      scale: 1,
      config: key => {
        switch (key) {
          case 'scale':
            return {
              mass: 1,
              friction: 3,
            }
          default:
            return {}
        }
      },
    }),
    []
  )

  const handlePointerEnter = () => {
    api.start({
      scale: 1.1,
    })
  }

  const handlePointerLeave = () => {
    api.start({
      scale: 1,
    })
  }
  
  return (
    <group dispose={null}>
      <animated.mesh castShadow geometry={nodes.Untitled.geometry} 
            rotation={props.rotation} 
            position={props.position}
            scale={springs.scale}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
            >
              <meshStandardMaterial
                metalness={1}
                roughness={0.8}
                color={"#0088ee"}
                emissive={a11y.focus ? "#cc4444" : a11y.hover ? "#44bb44" : "#0088ee"}
              />
      </animated.mesh>
    </group>
  )
}

useGLTF.preload('/arrow.glb');
