"use client";

import "../globals.css";
import { Canvas } from "@react-three/fiber";
import { Pyramid } from "./Pyramid";
import { OrbitControls } from "@react-three/drei";

export default function Ethereum() {
  return (
    <div className="w-screen h-screen bg-slate-900">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Pyramids />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

function Pyramids() {
  return (
    <>
      <Pyramid position={[0, 1, 0]} height={2} />
      <Pyramid
        position={[0, -1.1, 0]}
        rotation={[Math.PI, 0, 0]}
        height={1.5}
      />
    </>
  );
}
