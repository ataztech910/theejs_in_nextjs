"use client";

import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
// import { Perf } from "r3f-perf";
import { memo, useCallback, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const Box = memo(({ position }) => {
  const ref = useRef();
  const [currentGeometry, setCurrentGeometry] = useState(0);
  const geometry = useMemo(
    () => [new THREE.BoxGeometry(), new THREE.TorusGeometry(1)],
    []
  );

  const updateRotation = useCallback((delta) => {
    ref.current.rotation.x += 1 * delta;
    ref.current.rotation.y += 0.5 * delta;
  }, []);

  useFrame((_, delta) => {
    updateRotation(delta);
  });

  return (
    <mesh
      ref={ref}
      position={position}
      geometry={geometry[currentGeometry]}
      onClick={() =>
        currentGeometry === 0 ? setCurrentGeometry(1) : setCurrentGeometry(0)
      }
    >
      <meshStandardMaterial />
    </mesh>
  );
});
Box.displayName = "Box";

export default function Scene() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <Box position={[1, 2, 3]} />
      <Box position={[4, 5, 6]} />
      <Box position={[7, 8, 9]} />
      <OrbitControls />
      {/*<Perf position="top-right"/>*/}
    </>
  );
}
