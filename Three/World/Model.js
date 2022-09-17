import * as THREE from "three";

import Three from "../Three.js";

export default class Model {
  constructor() {
    this.three = new Three();
    this.scene = this.three.scene;
    this.resources = this.three.resources;
    this.time = this.three.time;
    this.model = this.resources.items.model;
    this.actualModel = this.model.scene;

    this.setModel();
    this.setAnimation();
  }

  setModel() {
    console.log("MODEL ADDED");
    this.scene.add(this.actualModel);

    this.actualModel.children.forEach((child) => {
      child.castShadow = true;
      child.receiveShadow = true;
      console.log(child);

      if (child.name === "Gear") {
        // find the name of the child to select it, and add dedicated positions.
        // child.children[0].position.y = 5;
      }
    });
  }

  setAnimation() {
    this.mixer = new THREE.AnimationMixer(this.actualModel);
    this.animate = this.mixer.clipAction(this.model.animations[3]);
    this.animate.play();
  }

  resize() {}

  update() {
    this.mixer.update(this.time.delta * 0.001);
  }
}
