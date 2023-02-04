import { MeshProps } from "@react-three/fiber";
import React from "react";

type Dimension = {
  depth: number;
  width: number;
  height: number;
};
const FLOOR_DIMENSIONS = {
  width: 2,
  height: 4,
  depth: 0.1,
};
const FLOOR_PADDING = 0.2;

const HOUSE_DIMENSIONS = {
  depth: 2,
  width: 1,
  height: 2,
};

function getArgs(dims: Dimension): [number, number, number] {
  return [dims.depth, dims.width, dims.height];
}

type CustomMesh = React.FC<MeshProps>;
export default function SanFrancisco() {
  return (
    <>
      <House position={[1.05, FLOOR_DIMENSIONS.width / 4 - FLOOR_PADDING, 0]} />
      <Floor position={[0, 0, 0]} />
    </>
  );
}

const Floor: CustomMesh = (props) => {
  return (
    <mesh {...props}>
      <boxGeometry args={getArgs(FLOOR_DIMENSIONS)} />
      <meshBasicMaterial color="#6A6A6C" />
    </mesh>
  );
};

const House: CustomMesh = (props) => {
  return (
    <mesh {...props}>
      <boxGeometry args={getArgs(HOUSE_DIMENSIONS)} />
      <meshBasicMaterial color="#9A9B9F" />
    </mesh>
  );
};