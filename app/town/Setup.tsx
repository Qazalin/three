import * as React from "react";
import { Vector3 } from "three";
import { Canvas, Props as CanvasProps } from "@react-three/fiber";
import { Bounds } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import SanFrancisco from "./Building";

type Props = React.PropsWithChildren<
  CanvasProps & {
    cameraFov?: number;
    cameraPosition?: Vector3;
    controls?: boolean;
    lights?: boolean;
  }
>;

export const Setup = ({
  children,
  cameraFov = 55,
  cameraPosition = new Vector3(-5, 4, 4),
  controls = true,
  lights = true,
  ...restProps
}: Props) => (
  <Canvas
    shadows
    orthographic
    dpr={[1, 2]}
    camera={{ position: [0, 0, 10], zoom: 200 }}
    {...restProps}
  >
    <gridHelper />
    {lights && (
      <>
        <ambientLight intensity={0.8} />
        <pointLight intensity={1} position={[0, 6, 0]} />
      </>
    )}
    <axesHelper scale={[5, 5, 5]} />
    <group rotation={[10 * (Math.PI / 180), -30 * (Math.PI / 180), 0]}>
      {children}
    </group>
    <OrbitControls
      maxZoom={1000}
      minPolarAngle={Math.PI / 2}
      maxPolarAngle={Math.PI / 2}
    />
  </Canvas>
);
