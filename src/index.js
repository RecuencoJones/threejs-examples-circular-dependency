import NodeMaterial from 'three/examples/jsm/nodes/materials/NodeMaterial';

export class ExtendedNodeMaterial extends NodeMaterial {
  greet() {
    console.log('Hello!');
  }
}

new ExtendedNodeMaterial().greet();
