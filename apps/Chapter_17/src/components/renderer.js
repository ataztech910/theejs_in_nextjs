'use client';

import { Canvas } from "@react-three/offscreen";
import React, { lazy, Suspense } from "react";

const Scene = lazy(() => import("./scene"));

const worker = new Worker(new URL("./worker.js", import.meta.url), {
    type: "module",
});
export default function Renderer() {
    return (
        <Suspense
            fallback={
                <div className="w-full flex items-center justify-center h-[calc(100vh-300px)] font-bold text-[30px] font-mono text-white">
                    loading...
                </div>
            }
        >
            <Canvas
                worker={worker}
                fallback={<Scene />}
            >
            </Canvas>
        </Suspense>
    );
}