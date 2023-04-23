"use client";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useLoader } from "@react-three/fiber";
import {
  blueDark,
  blueDarkA,
  indigoDark,
  mauve,
  mauveDark,
} from "@radix-ui/colors";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import Chair from "./Elements/Chair";
import Foundation from "./Foundation";

export default function AnotherOne() {
  return (
    <div
      className="w-screen h-screen"
      style={{
        backgroundColor: mauveDark.mauve1,
      }}
    >
      <Canvas
        gl={{
          outputEncoding: THREE.sRGBEncoding,
          toneMapping: THREE.ACESFilmicToneMapping,
          shadowMapType: THREE.PCFSoftShadowMap,
        }}
        camera={{
          fov: 75,
          near: 0.1,
          far: 1000,
          position: [0, 0, 15],
        }}
        shadows={true}
        raycaster={{}}
        frameloop="always"
        resize={{
          scroll: true,
          debounce: {
            scroll: 50,
            resize: 0,
          },
        }}
        dpr={[1, 2]}
        legacy={false}
        linear={false}
        eventPrefix="offset"
        flat={false}
      >
        <Foundation />
        <OrbitControls maxZoom={1000} />
      </Canvas>
    </div>
  );
}
