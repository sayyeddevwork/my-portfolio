import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const HeroCanvas3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    // Check reduced motion preference
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    motionQuery.addEventListener('change', handleMotionChange);

    // Verify WebGL capability
    let supportsWebGL = true;
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) supportsWebGL = false;
    } catch {
      supportsWebGL = false;
    }
    setHasWebGL(supportsWebGL);

    return () => motionQuery.removeEventListener('change', handleMotionChange);
  }, []);

  useEffect(() => {
    if (isReducedMotion || !hasWebGL) return;
    if (!canvasRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth || window.innerWidth;
    const height = containerRef.current.clientHeight || 500;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 35;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: window.devicePixelRatio < 2, // antialias only on lower DPR for performance
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create Nodes & Connecting Mesh Geometry
    const particleCount = window.innerWidth < 768 ? 16 : 30; // significantly fewer nodes to keep view uncluttered
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color('#3b82f6'); // Subtle Blue
    const color2 = new THREE.Color('#64748b'); // Subtle Slate

    for (let i = 0; i < particleCount; i++) {
      // Push particles outwards to leave center readable
      const angle = Math.random() * Math.PI * 2;
      const radius = 15 + Math.random() * 35;
      const x = Math.cos(angle) * radius;
      const y = (Math.random() - 0.5) * 45;
      const z = (Math.random() - 0.5) * 25;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const mixedColor = color1.clone().lerp(color2, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle material - subtle, non-intrusive points
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.6,
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
    });

    const pointCloud = new THREE.Points(geometry, particleMaterial);
    scene.add(pointCloud);

    // Line network geometry connecting close particles
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x475569,
      transparent: true,
      opacity: 0.06,
    });

    const linesGeometry = new THREE.BufferGeometry();
    const linePositions: number[] = [];

    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < 14) {
          linePositions.push(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
          linePositions.push(positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]);
        }
      }
    }

    linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const lineSegments = new THREE.LineSegments(linesGeometry, lineMaterial);
    scene.add(lineSegments);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (!containerRef.current || !renderer || !camera) return;
        const newWidth = containerRef.current.clientWidth || window.innerWidth;
        const newHeight = containerRef.current.clientHeight || 500;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      }, 150);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Animation Loop with FPS throttling
    let animationFrameId: number;
    let lastTime = 0;
    const fpsInterval = 1000 / 30; // throttle to 30 FPS for battery & GPU efficiency

    const animate = (time: number) => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = time - lastTime;
      if (delta < fpsInterval) return;
      lastTime = time - (delta % fpsInterval);

      if (!isReducedMotion) {
        targetX = mouseX * 0.15;
        targetY = mouseY * 0.15;

        pointCloud.rotation.y += 0.0003;
        pointCloud.rotation.x += 0.0001;
        lineSegments.rotation.y += 0.0003;
        lineSegments.rotation.x += 0.0001;

        camera.position.x += (targetX * 5 - camera.position.x) * 0.05;
        camera.position.y += (-targetY * 5 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);
      }

      renderer.render(scene, camera);
    };

    animate(0);

    // Cleanup Resources
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      geometry.dispose();
      particleMaterial.dispose();
      lineMaterial.dispose();
      linesGeometry.dispose();
      renderer.dispose();
    };
  }, [isReducedMotion, hasWebGL]);

  // Fallback SVG or Subtle Gradient Pattern if WebGL is disabled or fails
  if (!hasWebGL || isReducedMotion) {
    return (
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]" />
    );
  }

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden opacity-35">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
