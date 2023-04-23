"use client";
import { blueDark, greenDark, indigoDark, mauveDark } from "@radix-ui/colors";
import { Geometry, Base, Subtraction, Addition } from "@react-three/csg";
import { red } from "tailwindcss/colors";

export default function Foundation() {
  return (
    <mesh receiveShadow castShadow>
      <pointLight position={[5, 20, 4]} color={mauveDark.mauve11} />
      <Geo1 />
      <Geo2 />
    </mesh>
  );
}

const Geo1 = () => (
  <Geometry computeVertexNormals useGroups>
    <Base>
      <boxGeometry args={[20, 5, 10]} />
      <meshStandardMaterial color={mauveDark.mauve6} />
    </Base>
    <Subtraction name="space" position={[0, 1, 0]}>
      <boxGeometry args={[19, 7, 9]} />
      <meshStandardMaterial color={mauveDark.mauve6} />
    </Subtraction>
  </Geometry>
);

const Geo2 = () => (
  <mesh position={[10, 1, 20]}>
    <Geometry computeVertexNormals useGroups>
      <Base>
        <boxGeometry args={[20, 5, 10]} />
        <meshStandardMaterial color={mauveDark.mauve6} />
      </Base>
      <Subtraction name="space" position={[0, 1, 0]}>
        <boxGeometry args={[19, 7, 9]} />
        <meshStandardMaterial color={mauveDark.mauve6} />
      </Subtraction>
    </Geometry>
  </mesh>
);
