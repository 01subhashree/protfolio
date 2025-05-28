"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { TweenMax, Power1 } from "gsap";

const RevealEffect = ({ color = 0xe9e6f5, duration = 2.5, onFinish }) => {
  const canvasRef = useRef(null);
  const [showEffect, setShowEffect] = useState(true);

  useEffect(() => {
    if (!showEffect) return;

    document.body.classList.add("bg-white");

    let renderer, scene, camera;
    let width, height, wWidth, wHeight;

    const conf = {
      color: color, // pastel background color
      objectWidth: 12,
      objectThickness: 3,
      ambientColor: 0xe0e0e0,
      light1Color: 0xffffff,
      perspective: 75,
      cameraZ: 75,
    };

    const objects = [];
    const geometry = new THREE.BoxGeometry(
      conf.objectWidth,
      conf.objectWidth,
      conf.objectThickness
    );

    const canvas = canvasRef.current;
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera = new THREE.PerspectiveCamera(
      conf.perspective,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = conf.cameraZ;

    const getRendererSize = () => {
      const cam = new THREE.PerspectiveCamera(conf.perspective, camera.aspect);
      const vFOV = (cam.fov * Math.PI) / 180;
      const height = 2 * Math.tan(vFOV / 2) * Math.abs(conf.cameraZ);
      const width = height * cam.aspect;
      return [width, height];
    };

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      [wWidth, wHeight] = getRendererSize();
    };

    const initLights = () => {
      scene.add(new THREE.AmbientLight(conf.ambientColor));
      const light = new THREE.PointLight(conf.light1Color);
      light.position.z = 100;
      scene.add(light);
    };

    const initObjects = () => {
      const nx = Math.round(wWidth / conf.objectWidth) + 1;
      const ny = Math.round(wHeight / conf.objectWidth) + 1;

      for (let i = 0; i < nx; i++) {
        for (let j = 0; j < ny; j++) {
          const material = new THREE.MeshLambertMaterial({
            color: conf.color,
            transparent: true,
            opacity: 1,
          });

          const mesh = new THREE.Mesh(geometry, material);
          mesh.position.set(
            -wWidth / 2 + i * conf.objectWidth,
            -wHeight / 2 + j * conf.objectWidth,
            0
          );
          objects.push(mesh);
          scene.add(mesh);
        }
      }
    };

    const startAnim = () => {
      objects.forEach((mesh) => {
        mesh.rotation.set(0, 0, 0);
        mesh.material.opacity = 1;
        mesh.position.z = 0;
        const delay = THREE.MathUtils.randFloat(1, 2);
        const rx = THREE.MathUtils.randFloatSpread(2 * Math.PI);
        const ry = THREE.MathUtils.randFloatSpread(2 * Math.PI);
        const rz = THREE.MathUtils.randFloatSpread(2 * Math.PI);

        TweenMax.to(mesh.rotation, duration, { x: rx, y: ry, z: rz, delay });
        TweenMax.to(mesh.position, duration, {
          z: 80,
          delay: delay + 0.5,
          ease: Power1.easeOut,
        });
        TweenMax.to(mesh.material, duration, { opacity: 0, delay: delay + 0.5 });
      });

      setTimeout(() => {
        setShowEffect(false);
        if (onFinish) onFinish();
      }, 4500);
    };

    const animate = () => {
      if (!showEffect) return;
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    const initScene = () => {
      scene = new THREE.Scene();
      onResize();
      initLights();
      initObjects();
      animate();
      startAnim();
    };

    initScene();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      setShowEffect(false);
    };
    // eslint-disable-next-line
  }, [showEffect]);

  if (!showEffect) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen z-50 pointer-events-none"
    />
  );
};

export default RevealEffect;
