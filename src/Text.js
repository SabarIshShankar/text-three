import * as THREE from "three";
import React, { useRef, useEffect, useMemo } from "react";
import { useLoader, useUpdate } from "react-three-fiber";
import gsap from "gsap";

export default function Text({
  children,
  vAlign = "center",
  hAlign = "center",
  size = 1,
  color = "#000000",
  i,
  ...props
}) {
  const font = useLoader(THREE.FontLoader, "/bold.blob");
  const config = useMemo(
    () => ({
      font,
      size: 10,
      height: 2,
      curveSegments: 30,
      bevelEnabled: true,
      bevelThickness: 2,
      bevelSize: 1,
      bevelOffset: 0.1,
      bevelSegments: 30
    }),
    [font]
  );
}
