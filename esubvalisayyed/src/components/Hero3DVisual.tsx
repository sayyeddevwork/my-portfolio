import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3DVisual: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    
    let width = container.clientWidth || 450;
    let height = container.clientHeight || 450;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Clear existing canvas children
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Group for mouse parallax tilt and bobbing
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    const clusterGroup = new THREE.Group();
    mainGroup.add(clusterGroup);

    // Materials using Sayyed Vali brand color palette
    // Teal (#2A7187), Cream (#F4F1EA), Dark Teal (#11475D), Gold accent (#D4AF37)
    const tealMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#2A7187'),
      roughness: 0.25,
      metalness: 0.4,
    });

    const creamMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#F4F1EA'),
      roughness: 0.2,
      metalness: 0.1,
    });

    const darkNavyMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#11475D'),
      roughness: 0.3,
      metalness: 0.6,
    });

    const goldAccentMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#35839C'),
      transmission: 0.3,
      opacity: 0.9,
      transparent: true,
      roughness: 0.1,
      metalness: 0.8,
      ior: 1.5,
    });

    // 1. Core Object: Glossy TorusKnot
    const coreGeo = new THREE.TorusKnotGeometry(0.9, 0.32, 120, 16);
    const coreMesh = new THREE.Mesh(coreGeo, tealMaterial);
    coreMesh.castShadow = true;
    coreMesh.receiveShadow = true;
    clusterGroup.add(coreMesh);

    // 2. Inner Cream Sphere
    const innerSphereGeo = new THREE.SphereGeometry(0.55, 32, 32);
    const innerSphereMesh = new THREE.Mesh(innerSphereGeo, creamMaterial);
    innerSphereMesh.castShadow = true;
    clusterGroup.add(innerSphereMesh);

    // 3. Floating Orbiting Objects
    // Object A: Outer Ring
    const ringGeo = new THREE.TorusGeometry(1.9, 0.06, 16, 100);
    const ringMesh = new THREE.Mesh(ringGeo, goldAccentMaterial);
    ringMesh.rotation.x = Math.PI / 3;
    ringMesh.rotation.y = Math.PI / 6;
    clusterGroup.add(ringMesh);

    // Object B: Floating Icosahedron (Top Right)
    const icoGeo = new THREE.IcosahedronGeometry(0.35, 0);
    const icoMesh = new THREE.Mesh(icoGeo, creamMaterial);
    icoMesh.position.set(1.6, 1.2, 0.5);
    icoMesh.castShadow = true;
    clusterGroup.add(icoMesh);

    // Object C: Floating Octahedron (Bottom Left)
    const octaGeo = new THREE.OctahedronGeometry(0.38, 0);
    const octaMesh = new THREE.Mesh(octaGeo, darkNavyMaterial);
    octaMesh.position.set(-1.6, -1.1, 0.6);
    octaMesh.castShadow = true;
    clusterGroup.add(octaMesh);

    // Object D: Small Accent Spheres
    const s1 = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 16), creamMaterial);
    s1.position.set(-1.3, 1.4, -0.4);
    clusterGroup.add(s1);

    const s2 = new THREE.Mesh(new THREE.SphereGeometry(0.22, 16, 16), tealMaterial);
    s2.position.set(1.4, -1.3, -0.2);
    clusterGroup.add(s2);

    // 4. Drop Shadow Ellipse Plane
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const sCtx = shadowCanvas.getContext('2d');
    if (sCtx) {
      const gradient = sCtx.createRadialGradient(64, 64, 0, 64, 64, 64);
      gradient.addColorStop(0, 'rgba(10, 25, 35, 0.7)');
      gradient.addColorStop(0.5, 'rgba(10, 25, 35, 0.3)');
      gradient.addColorStop(1, 'rgba(10, 25, 35, 0)');
      sCtx.fillStyle = gradient;
      sCtx.fillRect(0, 0, 128, 128);
    }

    const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
    const shadowGeo = new THREE.PlaneGeometry(3.5, 3.5);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -2.4;
    mainGroup.add(shadowMesh);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    // Main Soft Directional Light
    const dirLight = new THREE.DirectionalLight(0xF4F1EA, 2.2);
    dirLight.position.set(5, 8, 5);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    // Teal Rim Light (from back left)
    const rimLight = new THREE.PointLight(0x2A7187, 3.5, 15);
    rimLight.position.set(-6, -3, -4);
    scene.add(rimLight);

    // Soft Warm Fill Light
    const fillLight = new THREE.PointLight(0xF4F1EA, 1.5, 12);
    fillLight.position.set(2, -4, 4);
    scene.add(fillLight);

    // Mouse Parallax Interaction State
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = x * 0.4; // Max tilt angle (~22 deg)
      mouse.targetY = y * 0.4;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 450;
      height = container.clientHeight || 450;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    // Animation Render Loop
    let clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Idle Rotation: ~20 seconds per full Y rotation
      clusterGroup.rotation.y = elapsedTime * (Math.PI * 2 / 20);
      clusterGroup.rotation.x = Math.sin(elapsedTime * 0.3) * 0.15;

      // Orbiting floating elements animation
      ringMesh.rotation.z = elapsedTime * 0.2;
      icoMesh.rotation.x = elapsedTime * 0.5;
      icoMesh.position.y = 1.2 + Math.sin(elapsedTime * 1.2) * 0.12;

      octaMesh.rotation.y = elapsedTime * 0.6;
      octaMesh.position.y = -1.1 + Math.cos(elapsedTime * 1.4) * 0.12;

      // Vertical Bobbing: ±10px (equivalent to ~0.15 units) 3.5s loop
      const bobY = Math.sin(elapsedTime * (Math.PI * 2 / 3.5)) * 0.16;
      mainGroup.position.y = bobY;

      // Smooth Mouse Parallax Damping (Ease to target)
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      mainGroup.rotation.y = mouse.x;
      mainGroup.rotation.x = -mouse.y;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-[360px] sm:h-[420px] lg:h-[480px] relative flex items-center justify-center cursor-grab active:cursor-grabbing"
    />
  );
};
