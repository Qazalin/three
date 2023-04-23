import { indigoDark } from "@radix-ui/colors";

import "../globals.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import AnotherOne from "./AnotherOne";

export default function Page() {
  return (
    <div className="w-screen h-screen bg-zinc-900">
      <AnotherOne />
    </div>
  );
}
