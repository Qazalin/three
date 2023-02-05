import { Geometry, Base, Subtraction, Addition } from "@react-three/csg";
import { MeshProps } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";
import { Setup } from "./Setup";

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
  width: 1.5,
  height: 2,
};

function getArgs(dims: Dimension): [number, number, number] {
  return [dims.depth, dims.width, dims.height];
}

type CustomMesh = React.FC<MeshProps>;
export default function SanFrancisco() {
  return (
    <Setup>
      <House />
    </Setup>
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
      <Geometry ref={csg} computeVertexNormals useGroups>
        <BaseArea />
        <BalconyArea />
        <RooftopArea />
        <Window position={[0.8, -1, -0.4]} />
        <Window position={[0.8, -1, 0.1]} />
        <Subtraction name="door" position={[0, 0, 0.5]}>
          <boxGeometry args={[1.6, 1, 1]} />
          <meshStandardMaterial color="#6A6B6E" />
        </Subtraction>
        <EntranceDoor />
      </Geometry>
    </mesh>
  );
};

function BaseArea() {
  return (
    <>
      <Base name="base">
        <boxGeometry args={getArgs(HOUSE_DIMENSIONS)} />
        <meshStandardMaterial color="#949599" />
      </Base>
      <Subtraction name="cavity">
        <boxGeometry
          args={[
            HOUSE_DIMENSIONS.depth / 2,
            HOUSE_DIMENSIONS.width / 2,
            HOUSE_DIMENSIONS.height / 2,
          ]}
        />
        <meshStandardMaterial color="#35363A" />
      </Subtraction>
    </>
  );
}

function EntranceDoor() {
  return (
    <Subtraction name="door" position={[-0.699, -0.5, 0.5]}>
      <boxGeometry args={[0.6, 1, 0.4]} />
      <meshStandardMaterial color="#6A6B6E" />
    </Subtraction>
  );
}

function BalconyArea() {
  return (
    <>
      <Addition name="balcony" position={[0.3, 0, -1]}>
        <boxGeometry args={[0.2, 1.8, 1]} />
        <meshStandardMaterial color="#9F8460" />
      </Addition>
      <Subtraction name="door" position={[0, 0, -0.7]}>
        <boxGeometry args={[0.6, 1, 0.4]} />
        <meshStandardMaterial color="#6A6B6E" />
      </Subtraction>
      <Addition name="balcony" position={[-0.3, 0, -1]}>
        <boxGeometry args={[0.2, 2.3, 1.5]} />
        <meshStandardMaterial color="#625A50" />
      </Addition>
    </>
  );
}

function RooftopArea() {
  return (
    <>
      <Subtraction name="roof" position={[1, 0, -0.1]}>
        <boxGeometry args={[0.8, 0.6, 1.4]} />
        <meshStandardMaterial color="#6A6B6E" />
      </Subtraction>
    </>
  );
}

const Window = (props) => (
  <Subtraction name="window" {...props}>
    <boxGeometry args={[0.2, 2, 0.4]} />
    <meshStandardMaterial color="#6A6B6E" />
  </Subtraction>
);

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
