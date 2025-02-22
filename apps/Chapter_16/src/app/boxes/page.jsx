'use client';
import React, { useContext, useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { BoxModel } from '@/components/BoxModel';
import { PresentationControls, PerspectiveCamera } from '@react-three/drei';
import { AppDataContext } from './data-provider';
import Controls from '@/components/Controls';
import { Smile } from '@/components/Smile';
import { Arrow } from '@/components/Arrow';
import { A11yAnnouncer, A11y } from '@react-three/a11y';
import {arrowProps, smileProps, cameraPositions, cameraAngles} from "./defaults";

export default function Boxes() {
    const { state, actions } = useContext(AppDataContext);

    const [cameraAngle, setCameraAngle] = useState(cameraAngles[0]);
    const [cameraPosition, setCameraPosition] = useState(cameraPositions[0]);
    const [smileProperties, setSmileProperties] = useState(smileProps[0]);
    const [leftArrowProperties, setLeftArrowProperties] = useState(arrowProps.left[0]);
    const [rightArrowProperties, setRightArrowProperties] = useState(arrowProps.right[0]);


    const setFloor = (toRight) => {
      let floor = state.appData.floor;
      if(toRight && floor < 3) {
        floor +=1;
      }
      else if(toRight && floor === 3) {
        floor = 1;
      }
      else if(!toRight && floor >= 2) {
        floor -=1;
      }
      else if(!toRight && floor === 1) {
        floor = 3;
      }
      actions.setAppData({...state.appData, ...{floor}});
    }

    useEffect(() => {
      setCameraAngle(cameraAngles[state.appData.floor - 1]);
      setCameraPosition(cameraPositions[state.appData.floor - 1]);
      setSmileProperties(smileProps[state.appData.floor - 1]);
      setLeftArrowProperties(arrowProps.left[state.appData.floor - 1]);
      setRightArrowProperties(arrowProps.right[state.appData.floor - 1]);
    }, [state.appData.floor]);

    return (
      <main className="h-screen">
          <div className="flex h-screen w-full gap-2 ">
            <div className="w-[50%]">
              <Canvas shadows  flat dpr={[2, 2]} camera={{ fov: 25, position: [20, 20, 20] }}>
                <Suspense fallback={null}>
                  <PresentationControls snap global rotation={cameraAngle} >
                  <PerspectiveCamera position={cameraPosition}>
                    <BoxModel />
                    <Smile {...smileProperties} />
                      <A11y role="button" tabIndex={0} actionCall={() => {setFloor(true)}}>
                      <Arrow position={leftArrowProperties?.position} rotation={leftArrowProperties?.rotation}/>
                    </A11y>
                    <A11y role="button" tabIndex={1} actionCall={() => {setFloor(false)}}>
                      <Arrow position={rightArrowProperties?.position} rotation={rightArrowProperties?.rotation} />
                    </A11y>
                    <Environment preset="dawn" background />
                  </PerspectiveCamera>
                  </PresentationControls>  
                </Suspense>
              </Canvas>
              <A11yAnnouncer />
            </div>
            <div>
              <h1>Controls</h1>
              <Controls />
            </div>
          </div>
      </main>
    )
}
