/**
 * Setting the Scene
 */

var WIDTH = window.innerWidth, HEIGHT = window.innerHeight;

// camera
var VIEW_ANGLE = 45,
    ASPECT = WIDTH / HEIGHT,
    NEAR = 1,
    FAR = 5000;

// DOM
var $container = $('#container');

// webGL
var renderer = new THREE.WebGLRenderer();
var camera = new THREE.PerspectiveCamera(
    VIEW_ANGLE,
    ASPECT,
    NEAR,
    FAR
);

var scene = new THREE.Scene();

scene.add(camera);

camera.position.z = 300;

renderer.setSize(WIDTH, HEIGHT);

$container.append(renderer.domElement);

/**
 * Adding a mesh
 */

var sphereMaterial = new THREE.MeshLambertMaterial(
    {
        color: 0xD0D3D4
    }
);

var radius = 50,
    segments = 16,
    rings = 16;

var sphere = new THREE.Mesh(
    new THREE.SphereGeometry(
        radius,
        segments,
        rings
    ),
    sphereMaterial);

scene.add(sphere);

/**
 * And then there was light!
 */

var pointLight = new THREE.PointLight(0xFFFFFF);

pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;

scene.add(pointLight);



/**
 * Rendering
 */

renderer.render(scene, camera);