// src/components/background/ThreeJsBackground.js
// This component contains all the logic for the animated three.js background.
// It's self-contained and can be reused anywhere.

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeJsBackground = ({
  particleCount = 1500,
  particleSize = 0.3,
  particleColor = '#FFD700',
  linesCount = 20,
  lineColor = 0x555555,
  mouseInfluence = 0.01
}) => {
  const mountRef = useRef(null);
  const mouse = useRef(new THREE.Vector2());

  useEffect(() => {
    let reqId;
    const mountPoint = mountRef.current;
    if (!mountPoint) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mountPoint.clientWidth / mountPoint.clientHeight, 0.1, 1000);
    camera.position.z = 30;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountPoint.clientWidth, mountPoint.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x0a0a0a, 1);
    mountPoint.appendChild(renderer.domElement);

    // Particle system
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 100;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
        color: new THREE.Color(particleColor),
        size: particleSize,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.6
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    
    // Floating lines
    const lines = [];
    const linesMaterial = new THREE.LineBasicMaterial({
        color: lineColor,
        transparent: true,
        opacity: 0.2
    });

    for (let i = 0; i < linesCount; i++) {
        const lineGeometry = new THREE.BufferGeometry();
        const linePoints = [];
        const radius = 20 + Math.random() * 10;
        const segments = 50;
        for (let j = 0; j <= segments; j++) {
            const theta = (j / segments) * Math.PI * 2;
            linePoints.push(
                new THREE.Vector3(
                    Math.cos(theta) * radius,
                    Math.sin(theta) * radius,
                    (Math.random() - 0.5) * 20
                )
            );
        }
        lineGeometry.setFromPoints(linePoints);
        const line = new THREE.Line(lineGeometry, linesMaterial);
        line.userData = {
            rotationSpeed: (Math.random() - 0.5) * 0.001,
            rotationAxis: new THREE.Vector3(
                Math.random() - 0.5,
                Math.random() - 0.5,
                Math.random() - 0.5
            ).normalize()
        };
        lines.push(line);
        scene.add(line);
    }

    // Event Listeners
    const handleMouseMove = (event) => {
        mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    const handleResize = () => {
        camera.aspect = mountPoint.clientWidth / mountPoint.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(mountPoint.clientWidth, mountPoint.clientHeight);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
        const elapsedTime = clock.getElapsedTime();
        particles.rotation.x = elapsedTime * 0.05;
        particles.rotation.y = elapsedTime * 0.03;
        lines.forEach(line => {
            const { rotationAxis, rotationSpeed } = line.userData;
            line.rotateOnAxis(rotationAxis, rotationSpeed);
        });
        camera.position.x += (mouse.current.x * 2 - camera.position.x) * mouseInfluence;
        camera.position.y += (mouse.current.y * 2 - camera.position.y) * mouseInfluence;
        camera.lookAt(scene.position);
        renderer.render(scene, camera);
        reqId = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup function to prevent memory leaks
    return () => {
        cancelAnimationFrame(reqId);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        if (mountPoint && renderer.domElement) {
            mountPoint.removeChild(renderer.domElement);
        }
        scene.traverse(object => {
            if (object.geometry) object.geometry.dispose();
            if (object.material) {
                if (Array.isArray(object.material)) {
                    object.material.forEach(material => material.dispose());
                } else {
                    object.material.dispose();
                }
            }
        });
        renderer.dispose();
    };
  }, [particleCount, particleSize, particleColor, linesCount, lineColor, mouseInfluence]);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default ThreeJsBackground;
