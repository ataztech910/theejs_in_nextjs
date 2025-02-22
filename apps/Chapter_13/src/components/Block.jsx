'use client';
import { Model, General } from "@/components/Model";
import { useState, useRef } from 'react';
import { useSpring, animated, config } from "@react-spring/three";

export default function Block({ reverse }) {
  const ref = useRef();
  const [hover, setHover] = useState(false);
  const [clicked, click] = useState(false);
  const { scale } = useSpring({
    scale: clicked ? 1.5 : 1,
    config: config.wobbly
  });

  const pointerAction = (e, state) => {
    e.stopPropagation(); 
    setHover(state);
  }

  return (
    <div className={`my-6 flex items-center ${reverse ? 'flex-row-reverse' : ''}`}>
        <div>
            <h1>Lorem ipsum Header</h1>
            <p>
                Lorem ipsum text Lorem ipsum text
                Lorem ipsum text Lorem ipsum text
                Lorem ipsum text Lorem ipsum text
            </p>
        </div>
        <div className='w-full text-center md:w-3/5'>
            scale: {clicked ? 1 : 0}
            <Model orbit className='flex h-96 w-full flex-col items-center justify-center'>
                <General />
                <animated.mesh
                    scale={scale}
                    position={[-1.2, 0, 0]}
                    rotation={[Math.PI / 2, 0, 0]}
                    onClick={() => click(!clicked)}
                    ref={ref}
                    onPointerOver={(e) => pointerAction(e, true)}
                    onPointerOut={(e) =>  pointerAction(e, false)}
                >
                    <boxGeometry args={[4, 4, 4]} />
                    <meshStandardMaterial color={hover ? 'blue' : 'orange'} />
                </animated.mesh>
            </Model>
        </div>
    </div>
  )
};


