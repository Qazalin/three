import { Geometry, Base, Subtraction, Addition } from "@react-three/csg";
import { MeshProps } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

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

const box = new THREE.BoxGeometry();
const cyl = new THREE.CylinderGeometry(1, 1, 2, 20);
const tri = new THREE.CylinderGeometry(1, 1, 2, 3);

function getArgs(dims: Dimension): [number, number, number] {
  return [dims.depth, dims.width, dims.height];
}

type CustomMesh = React.FC<MeshProps>;
export default function SanFrancisco() {
  return (
    <>
      <House position={[1.05, FLOOR_DIMENSIONS.width / 4 - FLOOR_PADDING, 0]} />
      <Tree
        position={[
          0.15,
          FLOOR_DIMENSIONS.width / 2 - FLOOR_PADDING,
          HOUSE_DIMENSIONS.depth - FLOOR_PADDING,
        ]}
      />
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
  const csg = useRef(null);

  return (
    <mesh receiveShadow castShadow {...props}>
      <Geometry ref={csg} computeVertexNormals>
        <Base
          name="base"
          geometry={
            new THREE.BoxGeometry(
              HOUSE_DIMENSIONS.depth,
              HOUSE_DIMENSIONS.width,
              HOUSE_DIMENSIONS.height
            )
          }
          scale={[3, 3, 3]}
        />
        <meshBasicMaterial color="#9A9B9F" />
      </Geometry>
    </mesh>
  );
};

const Tree: CustomMesh = (props) => {
  return (
    <mesh {...props}>
      <mesh position={[0.32, 0, 0]}>
        <boxGeometry args={[0.4, 0.3, 0.3]} />
        <meshBasicMaterial color="#5C7C41" />
      </mesh>
      <mesh>
        <boxGeometry args={[0.2, 0.1, 0.1]} />
        <meshBasicMaterial color="#987E5C" />
      </mesh>
    </mesh>
  );
};
