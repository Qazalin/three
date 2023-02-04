import { Fresnel, Depth, Noise, LayerMaterial } from "lamina";
import { blue, indigo } from "tailwindcss/colors";
import { Mesh } from "three";

export function IceLayer() {
  return (
    <LayerMaterial color={blue[400]} lighting="phong" envMapIntensity={0.02}>
      <Depth
        near={1}
        far={0.2}
        origin={[0, -0.43700000000000017, 0]}
        colorA={blue[300]}
        colorB={indigo[300]}
      />
      <Depth
        far={1.7}
        origin={[0, 1, 0]}
        colorA={blue[100]}
        colorB={blue[200]}
        alpha={0.7}
        mode={"multiply"}
      />
      <Depth
        near={1.14}
        far={0.9449999999999992}
        origin={[0.5200000000000002, -0.2900000000000002, -0.18999999999999995]}
        colorA={blue[50]}
        colorB={blue[200]}
        alpha={0.7}
        mode={"multiply"}
      />
      <Fresnel color="#ecfeff" mode="lighten" />
      <Noise
        colorA={"#1e3a8a"}
        colorB={"#93c5fd"}
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
