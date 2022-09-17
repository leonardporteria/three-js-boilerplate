import * as THREE from "three";
import gsap from "gsap";

import Three from "../../Three/Three.js";

const three = new Three(document.querySelector("canvas.model"));
const tl = gsap.timeline();
const clock = new THREE.Clock();

export const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // animate each child of the model
  three.world.model.actualModel.children.forEach((child) => {
    // find the name of the child to select it, and add dedicated animatinos
    if (child.name === "Gear") {
      // can also have gsap animation and will still block other animation
      child.children[0].position.x = elapsedTime * 0.5;
    }
  });

  // update renderer every tick
  three.renderer.renderer.render(three.scene, three.camera.perspectiveCamera);

  // gsap dedicated animation
  tl.to(three.camera.perspectiveCamera.position, { z: 10, duration: 10 });

  window.requestAnimationFrame(tick);
};
