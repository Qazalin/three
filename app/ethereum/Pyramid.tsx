import { MeshProps, useFrame } from "@react-three/fiber";
import { Fresnel, Depth, LayerMaterial, Noise } from "lamina";
import { useRef } from "react";
import { indigo } from "tailwindcss/colors";
import { Mesh } from "three";
import { IceLayer } from "./Layers/Ice";

interface PyramidProps extends MeshProps {
  height: number;
}

export function Pyramid({ height, ...meshProps }: PyramidProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }

    const position = meshProps.position as [number, number, number];

    if (position[1] > 0) {
      meshRef.current.rotation.y += 0.01;
    } else {
      meshRef.current.rotation.y -= 0.01;
    }
  });

  return (
    <mesh {...meshProps} ref={meshRef}>
      <coneGeometry args={[1, height, 4]} />
      <meshBasicMaterial color={indigo["400"]} />
      <IceLayer />
    </mesh>
  );
}

function Layer() {
  return (
    <LayerMaterial
      color={"#718EFF"}
      lighting={"physical"}
      envMapIntensity={0.3}
    >
      <Depth
        near={1.14}
        far={0.5}
        origin={[0, -0.43700000000000017, 0]}
        colorA={"#7d97fe"}
        colorB={"#ebebeb"}
      />
      <Depth
        far={1.7}
        origin={[0, 1, 0]}
        colorA={"#5688ee"}
        colorB={"#fefefe"}
        alpha={0.7}
        mode={"multiply"}
      />
      <Depth
        near={1.14}
        far={0.9449999999999992}
        origin={[0.5200000000000002, -0.2900000000000002, -0.18999999999999995]}
        colorA={"#f1f1f1"}
        colorB={"#fe7ef5"}
        alpha={0.7}
        mode={"multiply"}
      />
      <Fresnel color={"#f77f7f"} mode={"screen"} />
      <Noise
        colorA={"#fefefe"}
        colorB={"#a8a8a8"}
        colorC={"#fefefe"}
        colorD={"#fefefe"}
        alpha={0.59}
        scale={0.016999999999999977}
        offset={[0, 0, 0]}
        name={"noise"}
        mode={"subtract"}
      />
    </LayerMaterial>
  );
}
