import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function SceneBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mount || reducedMotion.matches) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    } catch {
      return; // The page remains usable when WebGL is unavailable.
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.set(0, 0, 11);
    const rig = new THREE.Group();
    scene.add(rig);
    scene.add(new THREE.AmbientLight(0xffffff, 1.2));
    const key = new THREE.DirectionalLight(0xff7777, 3);
    key.position.set(4, 5, 6);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0x8795ff, 2);
    rim.position.set(-5, -3, -2);
    scene.add(rim);

    const metal = new THREE.MeshStandardMaterial({ color: 0xf44849, metalness: 0.76, roughness: 0.24, wireframe: true, transparent: true, opacity: 0.7 });
    const glass = new THREE.MeshStandardMaterial({ color: 0xf4f1ee, metalness: 0.45, roughness: 0.3, wireframe: true, transparent: true, opacity: 0.23 });
    const knot = new THREE.Mesh(new THREE.TorusKnotGeometry(1.65, 0.35, 160, 12, 2, 3), metal);
    knot.position.set(3.1, 0, 0);
    rig.add(knot);
    const orbit = new THREE.Mesh(new THREE.IcosahedronGeometry(2.45, 1), glass);
    orbit.position.copy(knot.position);
    rig.add(orbit);

    const particleCount = window.innerWidth < 768 ? 55 : 110;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 24;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.025, transparent: true, opacity: 0.48 });
    rig.add(new THREE.Points(particlesGeometry, particlesMaterial));

    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    // Keep camera distance and object scale fixed so scrolling does not resize the 3D shape.
    const sceneStops = [
      ['#about', { x: -1.2, y: 0.5, rotation: 0.55 }],
      ['#expertise', { x: 0.7, y: -0.4, rotation: 1.3 }],
      ['#projects', { x: -0.9, y: 0.6, rotation: 2.1 }],
      ['#experience', { x: 0.6, y: -0.3, rotation: 2.8 }],
      ['#contact', { x: 0, y: 0, rotation: 3.6 }],
    ].map(([selector, point]) => ({ element: document.querySelector(selector), point }))
      .filter(({ element }) => element);
    const target = { x: 0, y: 0, rotation: 0 };
    const updateSceneTarget = () => {
      const viewportHeight = window.innerHeight;
      const next = { x: 0, y: 0, rotation: 0 };
      sceneStops.forEach(({ element, point }) => {
        const progress = Math.max(0, Math.min(1,
          (viewportHeight * 0.85 - element.getBoundingClientRect().top) / (viewportHeight * 0.55)
        ));
        const eased = progress * progress * (3 - 2 * progress);
        next.x += (point.x - next.x) * eased;
        next.y += (point.y - next.y) * eased;
        next.rotation += (point.rotation - next.rotation) * eased;
      });
      Object.assign(target, next);
    };
    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(width, height, false);
      knot.position.x = orbit.position.x = width < 1024 ? 1.25 : 3.1;
      updateSceneTarget();
    };
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', updateSceneTarget, { passive: true });
    camera.position.x = target.x;
    camera.position.y = target.y;
    rig.rotation.z = target.rotation;

    const pointer = { x: 0, y: 0 };
    const onPointerMove = (event) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    let frame;
    const clock = new THREE.Clock();
    const render = () => {
      frame = window.requestAnimationFrame(render);
      if (document.hidden) return;
      const delta = Math.min(clock.getDelta(), 0.05);
      const elapsed = clock.elapsedTime;
      const smoothing = 1 - Math.exp(-8 * delta);
      camera.position.x += (target.x - camera.position.x) * smoothing;
      camera.position.y += (target.y - camera.position.y) * smoothing;
      rig.rotation.z += (target.rotation - rig.rotation.z) * smoothing;
      knot.rotation.x = elapsed * 0.11;
      knot.rotation.y = elapsed * 0.16;
      orbit.rotation.y = -elapsed * 0.06;
      rig.rotation.x += ((pointer.y * 0.12) - rig.rotation.x) * 0.035;
      rig.rotation.y += ((pointer.x * 0.16) - rig.rotation.y) * 0.035;
      renderer.render(scene, camera);
    };
    render();

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', updateSceneTarget);
      window.removeEventListener('pointermove', onPointerMove);
      knot.geometry.dispose();
      orbit.geometry.dispose();
      particlesGeometry.dispose();
      metal.dispose();
      glass.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={mountRef} className="scene-background" aria-hidden="true" />;
}
