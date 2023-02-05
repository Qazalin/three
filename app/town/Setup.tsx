import * as React from "react";
import { Vector3 } from "three";
import { Canvas, Props as CanvasProps } from "@react-three/fiber";
import { Bounds } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

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
    <group rotation={[Math.PI / 5, -Math.PI / 5, Math.PI / 2]}>
      <Bounds fit clip observe margin={1.25}>
        {children}
        {lights && (
          <>
            <ambientLight intensity={0.8} />
            <pointLight intensity={1} position={[0, 6, 0]} />
          </>
        )}
      </Bounds>
    </group>
    {controls && <OrbitControls />}
  </Canvas>
);
