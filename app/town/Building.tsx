import {
  Geometry,
  Base,
  Subtraction,
  Addition,
  SubtractionProps,
} from "@react-three/csg";
import { MeshProps } from "@react-three/fiber";
import React, { useRef } from "react";
import { blue, emerald, green, stone } from "tailwindcss/colors";
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
const colors = {
  grass: "#5C7C41",
};

const grassShades = {
  100: "#FFFFFF",
  200: "#F4F8F2",
  300: "#EAF1E4",
  400: "#DFEAD7",
  500: "#D5E3CA",
  600: "#CADCBC",
  700: "#C0D5AF",
  800: "#B5CEA1",
  900: "#ABC794",
  A100: "#A0C087",
  A200: "#96B979",
  A400: "#8BB26C",
  A700: "#81AB5F",
  B100: "#77A054",
  B200: "#6D834D",
  B300: "#637744",
  B400: "#596A3D",
  B500: "#4F5E36",
  B600: "#45522F",
  B700: "#3B4628",
  B800: "#314021",
  B900: "#273419",
  C100: "#1E2A12",
  C200: "#151F0B",
  C300: "#0B1304",
  C400: "#000000",
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
      <Tree position={[-1, 0.159, 3.2]} rotation={[0, 0, Math.PI / 2]} />
    </Setup>
  );
}

const Floor: CustomMesh = (props) => {
  return (
    <mesh receiveShadow castShadow {...props}>
      <Geometry computeVertexNormals useGroups>
        <Base>
          <boxGeometry args={getArgs(FLOOR_DIMENSIONS)} />
          <meshLambertMaterial color={stone[900]} />
        </Base>
        <Addition position={[-1.4, 0.06, 3.4]} name="grass">
          <boxGeometry args={[1, 0.001, 0.8]} />
          <meshBasicMaterial color={grassShades.B200} />
        </Addition>
        <Addition position={[-1.6, 0.06, 3.4]}>
          <sphereGeometry
            args={[0.2, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]}
          />
          <meshBasicMaterial color={grassShades.B500} />
        </Addition>
      </Geometry>
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

const Window = (props: SubtractionProps) => (
  <Subtraction name="window" {...props}>
    <boxGeometry args={[0.2, 2, 0.4]} />
    <meshLambertMaterial color="#6A6B6E" />
  </Subtraction>
);

const Tree: CustomMesh = (props) => {
  return (
    <>
      <mesh castShadow {...props}>
        <mesh position={[0.24, 0, 0]}>
          <boxGeometry args={[0.35, 0.3, 0.3]} />
          <meshBasicMaterial color={grassShades.B400} />
        </mesh>
        <mesh>
          <boxGeometry args={[0.2, 0.1, 0.1]} />
          <meshBasicMaterial color="#987E5C" />
        </mesh>
      </mesh>
    </>
  );
};
