"use client";

import "../globals.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Bounds } from "@react-three/drei";
import SanFransicso from "./Experiment";

export default function Page() {
  return (
    <div className="w-screen h-screen bg-white">
      <Canvas
        orthographic
        dpr={[1, 2]}
        camera={{ position: [0, 0, 10], zoom: 200 }}
      >
        <group rotation={[Math.PI / 5, -Math.PI / 5, Math.PI / 2]}>
          <Bounds clip observe>
            <SanFransicso />
          </Bounds>
        </group>
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}
