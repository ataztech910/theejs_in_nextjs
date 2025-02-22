'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { AppDataContext } from '@/app/data-share/data–context';
import { useContext } from 'react';

export default function BoxModel() {
    const { state } = useContext(AppDataContext);
    console.log(state);
    
    return (
        <section>
            <Canvas>
                <ambientLight intensity={0.1} />
                <directionalLight position={[0, 0, 5]} />
                <mesh>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial color={state.appData.color}/>
                </mesh>
                <OrbitControls />
                </Canvas>
        </section>
    )
}
