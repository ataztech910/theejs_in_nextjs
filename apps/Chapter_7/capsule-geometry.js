import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import GUI from 'lil-gui'; 

// Init Debug UI
const gui = new GUI();

// Object with default parameters
const obj = { radius: 1, length: 1, capSegments: 1, radialSegments: 1};

// Init Scene
const props = {
  width: 800, 
  height: 600,
  color: 0xff0000
};
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, props.width / props.height);
scene.add(camera);

// Object creation with special Geometry type
const initGeometry = () => {
  return new THREE.CapsuleGeometry(
    obj.radius, 
    obj.length, 
    obj.capSegments, 
    obj.radialSegments);
}

// Initiate Wireframe to see the Geomerty parameters
let wireframe, geo, mat = null;
const initWireframe = (mesh) => {
  geo = new THREE.WireframeGeometry( mesh.geometry );
  mat = new THREE.LineBasicMaterial( { color: 0xffffff } );
  wireframe = new THREE.LineSegments( geo, mat );
};

const regenerateGeometry = (mesh, currWireframe) => {
  const newGeometry = initGeometry();
  mesh.remove(currWireframe);
  mesh.geometry = newGeometry;

  initWireframe(mesh);
  mesh.add( wireframe );
  
}
const geometry = initGeometry();
const material = new THREE.MeshBasicMaterial({ color: props.color });
const mesh = new THREE.Mesh(geometry, material);

// This is the object wrapper that we will need to see the wireframe in real time
initWireframe(mesh);
mesh.add( wireframe );

// GUI elements to update parameters
gui.add( obj, 'radius', 1, 20)
  .onChange(() => regenerateGeometry(mesh, wireframe));
gui.add( obj, 'length', 1, 20)
  .onChange(() => regenerateGeometry(mesh, wireframe));
gui.add( obj, 'capSegments', 1, 20)
.onChange(() => regenerateGeometry(mesh, wireframe));
gui.add( obj, 'radialSegments', 1, 20)
 .onChange(() => regenerateGeometry(mesh, wireframe));


scene.add(mesh);
camera.position.z = 6;

// Setup the renderer
const canvas = document.querySelector('#container');
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
});

renderer.setSize(props.width, props.height);

// Render the scene using scene and camera objects
// remove renderer below and add the function to animate 
// the scene
// renderer.render(scene, camera);
const controls = new OrbitControls( camera, renderer.domElement );
controls.update();
function animate() {

	requestAnimationFrame( animate );
  // required if controls.enableDamping or controls.autoRotate are set to true
	controls.update();
	renderer.render( scene, camera );

}
animate();