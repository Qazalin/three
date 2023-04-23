"use client";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useLoader } from "@react-three/fiber";

export default function Chair() {
  const obj = useLoader(FBXLoader, "/models/chair_f.FBX");

  return (
    <group>
      <primitive object={obj} />
    </group>
  );
}
