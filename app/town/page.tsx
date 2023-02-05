"use client";

import "../globals.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SanFransicso from "./Building";
import { Vector3 } from "three";

export default function Page() {
  return (
    <div className="w-screen h-screen bg-white">
      <SanFransicso />
    </div>
  );
}
