import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const InternalSphere = ({ position, color, radius, rotationSpeed, segments }) => {
    const ref = useRef();

    useFrame(() => {
        if (ref.current && rotationSpeed) {
            ref.current.rotation.x += rotationSpeed?.x;
            ref.current.rotation.y += rotationSpeed?.y;
        }
    });

    return (
        <mesh ref={ref} position={position} castShadow>
            <sphereGeometry args={[radius, segments?.x || 32, segments?.y || 32]} />
            <meshStandardMaterial color={color} />
        </mesh>
    );
};

export default InternalSphere;