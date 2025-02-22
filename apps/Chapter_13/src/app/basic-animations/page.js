'use client';
import { useState, useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { useSpring, animated, config } from "@react-spring/three";

function RotatingBox() {
    const mesh = useRef();
    const [active, setActive] = useState(false);
    const [y, setY] = useState(0);
  
    const { scale } = useSpring({
      scale: active ? 1.5 : 1,
      config: config.wobbly,
    });
  
    // useFrame(({ clock }) => {
    //   const a = clock.getElapsedTime();
    //   mesh.current.rotation.x = a;
    // });

    setInterval(() => {
        setY(Date.now()/1000);
    }, 1);
  
    return (
      <animated.mesh
        scale={scale}
        onClick={() => { setActive(!active); console.log(active)}}
        ref={mesh}
        rotation={[1, y, 4]}
      >
        <boxGeometry args={[2, 2, 2]} />
        <meshPhongMaterial color="orange" />
      </animated.mesh>
    );
  }

export default function BasicAnimations() {
  return (
    <main className="max-w-[1000px] m-auto">
     <div className="App">
      <Canvas>
        <RotatingBox />
        <ambientLight intensity={0.1} />
        <directionalLight />
      </Canvas>
    </div>
    </main>
  )
}
