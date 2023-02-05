"use client";

import "../globals.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import House from "./House";
import { Environment } from "./Environment";

export default function Page() {
  return (
    <div className="w-screen h-screen bg-white">
      <Canvas>
        <House />
        <Environment />
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}
