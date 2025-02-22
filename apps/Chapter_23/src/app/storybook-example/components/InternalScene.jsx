"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';

export default function InternalScene({ children }) {
    return (
        <>
        <h1>Example scene</h1>
        <Canvas >
                <ambientLight intensity={0.5} />
                <directionalLight 
                    position={[5, 10, 7.5]} 
                    intensity={1} 
                    castShadow 
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-far={50}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                />
                {children}
            <OrbitControls makeDefault />
        </Canvas>
        </>
    );
}