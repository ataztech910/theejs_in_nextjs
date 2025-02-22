"use client";
import InternalBox from "./components/InternalBox";
import InternalScene from "./components/InternalScene"; 
import InternalSphere from "./components/InternalSphere";

export default function StoryBookExample() {
    return (
        <div className="h-[100vh]">
            <InternalScene>
                <InternalBox position={[0, 1, 0]} color="green" size={[1, 1, 1]}  />
                <InternalSphere position={[2, 2, 0]} color="red" radius={1} segments={{ x: 10, y: 10 }} />
            </InternalScene>
        </div>
    );
}