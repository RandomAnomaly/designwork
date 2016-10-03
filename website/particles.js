var particleCount = 1800,
    particles = new THREE.Geometry(),
    pMaterial = new THREE.ParticleBasicMaterial({
        color: 0xFFFFFF,
        size: 20
    });

for (var p = 0; p < particleCount; p++) {

    var pX = Math.random() * 500 - 250,
        pY = Math.random() * 500 - 250,
        pZ = Math.random() * 500 - 250,
        particle = new THREE.Vertex(
            new THREE.Vector3(pX, pY, pZ)
        );
    particles.vertices.push(particle);
}

var particleSystem = new THREE.ParticleSystem(
    particles,
    pMaterial
);

scene.add(particleSystem);