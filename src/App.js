import "./styles.css";
import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Environment, Plane, Reflector } from "drei";
import gsap from "gsap";
import Text from "./Text";

const { PI, sin, cos } = Math;

const Letter = ({ i, count, radius, l }) => {
  const $ref = useRef();
  return (
    <group ref={$ref} rotation={[0, 0, 0]}>
      <Text
        hAlign="center"
        position={[
          radius * sin((i / count) * PI * 2),
          -0.8,
          radius * sin((i / count) * PI * 4)
        ]}
        rotation={[0, (i / count) * PI * 2, 0]}
        i={i}
        children={l}
      />
    </group>
  );
};
const Magic = ({ text, count, radius, start = 0, position }) => {
  const $ref = useRef();
  useEffect(() => {
    gsap.to($ref.current.rotation, {
      duration: 6,
      y: PI * 1.3 + PI * 2,
      repeat: -1,
      ease: "power3.inOut"
    });
  });
};
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
