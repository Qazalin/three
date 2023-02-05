import { Geometry, Base, Subtraction, Addition } from "@react-three/csg";
import { MeshProps } from "@react-three/fiber";
import React, { useRef } from "react";
import { blue } from "tailwindcss/colors";
import { Setup } from "./Setup";

type Dimension = {
  depth: number;
  width: number;
  height: number;
};
const FLOOR_DIMENSIONS = {
  width: 0.1,
  height: 8,
  depth: 4,
};

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
      <House rotation={[0, 0, Math.PI / 2]} position={[0, 1, 0]} />
      <Floor />
      <Tree position={[-1, 0.1, 3]} rotation={[0, 0, Math.PI / 2]} />
    </Setup>
  );
}

const Floor: CustomMesh = (props) => {
  return (
    <mesh receiveShadow castShadow {...props}>
      <boxGeometry args={getArgs(FLOOR_DIMENSIONS)} />
      <meshLambertMaterial color="#6A6A6C" />
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
        <Window position={[0.8, -1, -0.6]} />
        <Window position={[0.8, -1, -0.1]} />
        <FrontSpace />
        <EntranceDoor />
      </Geometry>
    </mesh>
  );
};

function FrontSpace() {
  return (
    <>
      <Subtraction name="space" position={[0, 0, 0.5]}>
        <boxGeometry args={[1.6, 1, 1]} />
        <meshLambertMaterial color="#6A6B6E" />
      </Subtraction>
      <Addition name="window" position={[0, 0, 0.5]}>
        <boxGeometry args={[1.6, 1, 0.5]} />
        <meshLambertMaterial color={blue[300]} />
      </Addition>
      <Addition name="bounds" position={[0.75, 0, 0.7]}>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshLambertMaterial color="#949599" />
      </Addition>
      <Addition name="bounds" position={[-0.75, 0, 0.7]}>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshLambertMaterial color="#949599" />
      </Addition>
      <Addition name="bounds" position={[0, 0.45, 0.7]}>
        <boxGeometry args={[1.6, 0.1, 0.1]} />
        <meshLambertMaterial color="#949599" />
      </Addition>
      <Addition name="bounds" position={[0, -0.45, 0.7]}>
        <boxGeometry args={[1.6, 0.1, 0.1]} />
        <meshLambertMaterial color="#949599" />
      </Addition>
      <Addition name="bounds" position={[0, 0, 0.7]}>
        <boxGeometry args={[0.2, 1, 0.1]} />
        <meshLambertMaterial color="#949599" />
      </Addition>
    </>
  );
}

function BaseArea() {
  return (
    <>
      <Base name="base">
        <boxGeometry args={getArgs(HOUSE_DIMENSIONS)} />
        <meshLambertMaterial color="#949599" />
      </Base>
      <Subtraction name="cavity">
        <boxGeometry
          args={[
            HOUSE_DIMENSIONS.depth / 2,
            HOUSE_DIMENSIONS.width / 2,
            HOUSE_DIMENSIONS.height / 2,
          ]}
        />
        <meshLambertMaterial color="#35363A" />
      </Subtraction>
    </>
  );
}

function EntranceDoor() {
  return (
    <Subtraction name="door" position={[-0.699, -0.5, 0.5]}>
      <boxGeometry args={[0.6, 2, 0.3]} />
      <meshLambertMaterial color="#6A6B6E" />
    </Subtraction>
  );
}

function BalconyArea() {
  return (
    <>
      <Addition name="balcony" position={[0.3, 0, -1]}>
        <boxGeometry args={[0.2, 1.8, 1]} />
        <meshLambertMaterial color="#9F8460" />
      </Addition>
      <Subtraction name="door" position={[0, -1.2, -0.6]}>
        <boxGeometry args={[0.4, 1, 0.2]} />
        <meshLambertMaterial color="#6A6B6E" />
      </Subtraction>
      <Addition name="balcony" position={[-0.3, 0, -1]}>
        <boxGeometry args={[0.2, 2.3, 1.5]} />
        <meshLambertMaterial color="#625A50" />
      </Addition>
    </>
  );
}

const Window = (props) => (
  <Subtraction name="window" {...props}>
    <boxGeometry args={[0.2, 2, 0.4]} />
    <meshLambertMaterial color="#6A6B6E" />
  </Subtraction>
);

const Tree: CustomMesh = (props) => {
  return (
    <>
      <mesh castShadow {...props}>
        <mesh position={[0.32, 0, 0]}>
          <boxGeometry args={[0.4, 0.3, 0.3]} />
          <meshBasicMaterial color="#5C7C41" />
        </mesh>
        <mesh>
          <boxGeometry args={[0.2, 0.1, 0.1]} />
          <meshBasicMaterial color="#987E5C" />
        </mesh>
      </mesh>
    </>
  );
};
