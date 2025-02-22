'use client';
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, useFBX } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import { useSpring, animated, config } from "@react-spring/three";
import { useState, useRef } from 'react';

const Model = () => {
    const ref = useRef();
    const [clicked, click] = useState(false);
    const { scale } = useSpring({
        scale: clicked ? 0.003 : 0.0005,
        config: config.wobbly
    });

    const gltf = useLoader(GLTFLoader, "./scene.gltf");
    return (
      <>
        <animated.mesh 
            scale={scale} 
            onClick={() => click(!clicked)}
            ref={ref}
        >
            <primitive 
                receiveShadow
                castShadow
                object={gltf.scene} 
                />
        </animated.mesh>
      </>
    );
    // const fbx = useFBX('/room.fbx');
    // return <animated.mesh 
    //             onClick={() => click(!clicked)}
    //             ref={ref}
    //             scale={scale}><primitive object={fbx} /></animated.mesh>;
  };

export default function UploadModel() {
  return (
    <main className="w-full h-svh m-auto">
      <Canvas>
        <Suspense fallback={null}>
                <Model />
                <ambientLight intensity={0.1} />
                <directionalLight />
                <OrbitControls />
                <Environment preset="city" background />
        </Suspense>
      </Canvas>
    </main>
  )
}
