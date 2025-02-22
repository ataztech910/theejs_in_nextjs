'use client';
import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei';
import tunnel from 'tunnel-rat';
import { useRef } from 'react'

export const Tunnel = tunnel();
const TunnelWrapper = ({ children }) => {
    return <Tunnel.In>{children}</Tunnel.In>
  }

export function General () {
    return (
      <>
        <ambientLight />
        <pointLight position={[20, 30, 10]} intensity={3} decay={0.2} />
        <pointLight position={[-10, -10, -10]} color='blue' decay={0.2} />
        <PerspectiveCamera makeDefault  position={[12.5, 5, 5]} fov={35} />
      </>
    );
}

export function Model ({ children, orbit, ...props }) {
    const localRef = useRef();

    return (
      <>
        <div ref={localRef} {...props} />
        <TunnelWrapper>
            <View track={localRef} >
                {orbit && <OrbitControls makeDefault />}
                { children }
            </View>
        </TunnelWrapper>
      </>
    )
};
