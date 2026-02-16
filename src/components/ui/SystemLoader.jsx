"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, MeshWobbleMaterial, PerspectiveCamera, Stars } from '@react-three/drei';
import * as THREE from 'three';

const statuses = [
    "SYNCHRONIZING 3D ENGINES...",
    "CALIBRATING HOLOGRAPHIC ARRAYS...",
    "STABILIZING ENERGY CORE...",
    "ACCESSING DIGITAL DIMENSIONS...",
    "SYSTEM OPTIMIZED"
];

const TechCore = () => {
    const coreRef = useRef();
    const ring1Ref = useRef();
    const ring2Ref = useRef();
    const ring3Ref = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (coreRef.current) {
            coreRef.current.rotation.y = t * 0.5;
            coreRef.current.rotation.z = t * 0.2;
        }
        if (ring1Ref.current) {
            ring1Ref.current.rotation.x = t * 0.8;
            ring1Ref.current.rotation.y = t * 0.4;
        }
        if (ring2Ref.current) {
            ring2Ref.current.rotation.z = t * 0.6;
            ring2Ref.current.rotation.x = t * 0.3;
        }
        if (ring3Ref.current) {
            ring3Ref.current.rotation.y = t * 1.2;
            ring3Ref.current.rotation.z = t * 0.5;
        }
    });

    return (
        <group scale={1.5}>
            {/* Inner Core */}
            <mesh ref={coreRef}>
                <sphereGeometry args={[1, 64, 64]} />
                <MeshDistortMaterial
                    color="#ff6b00"
                    speed={2}
                    distort={0.4}
                    radius={1}
                    emissive="#ff3300"
                    emissiveIntensity={2}
                />
            </mesh>

            {/* Glowing Rings */}
            <mesh ref={ring1Ref} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[1.8, 0.02, 16, 100]} />
                <meshStandardMaterial color="#ff6b00" emissive="#ff6b00" emissiveIntensity={5} transparent opacity={0.6} />
            </mesh>

            <mesh ref={ring2Ref} rotation={[0, Math.PI / 4, 0]}>
                <torusGeometry args={[2.2, 0.02, 16, 100]} />
                <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={3} transparent opacity={0.4} /> {/* Adjusted blue for light theme contrast */}
            </mesh>

            <mesh ref={ring3Ref} rotation={[Math.PI / 3, Math.PI / 3, 0]}>
                <torusGeometry args={[2.6, 0.01, 16, 100]} />
                <meshStandardMaterial color="#ff006e" emissive="#ff006e" emissiveIntensity={4} transparent opacity={0.3} />
            </mesh>
        </group>
    );
};

const SystemLoader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState("INITIALIZING NEURAL CORE...");
    const [isVisible, setIsVisible] = useState(true);



    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => {
                        setIsVisible(false);
                        if (onComplete) onComplete();
                    }, 1200);
                    return 100;
                }

                const statusIndex = Math.min(
                    Math.floor((prev / 100) * statuses.length),
                    statuses.length - 1
                );
                setStatus(statuses[statusIndex]);

                return prev + Math.random() * 8;
            });
        }, 120);

        return () => clearInterval(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 2,
                        filter: "brightness(2) blur(20px)", /* Adjusted brightness filter for light theme exit */
                        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
                    }}
                    className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center overflow-hidden" /* bg-white */
                >
                    {/* 3D Canvas Container */}
                    <div className="absolute inset-0 z-0">
                        <Canvas>
                            <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                            <ambientLight intensity={0.8} /> {/* Increased ambient light */}
                            <pointLight position={[10, 10, 10]} intensity={2} color="#ff6b00" />
                            <pointLight position={[-10, -10, -10]} intensity={1.5} color="#3b82f6" />
                            <TechCore />
                        </Canvas>
                    </div>

                    {/* UI Overlay */}
                    <div className="relative z-10 w-full max-w-md px-6 flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-col items-center mb-12"
                        >
                            <div className="text-orange-600 font-mono text-[10px] tracking-[0.5em] uppercase mb-4 opacity-70">
                                Global Transformation in Progress
                            </div>
                            <h2 className="text-stone-900 font-bold text-4xl tracking-tighter mb-2 italic">ZLAARK</h2> {/* text-stone-900 */}
                            <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-transparent" />
                        </motion.div>

                        <div className="w-full">
                            <div className="flex justify-between items-end mb-4 font-mono text-[10px] tracking-widest text-stone-500"> {/* text-stone-500 */}
                                <span>{status}</span>
                                <span>{Math.floor(progress)}%</span>
                            </div>

                            <div className="h-[2px] w-full bg-stone-200 rounded-full overflow-hidden relative"> {/* bg-stone-200 */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    className="h-full bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.8)]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Ambient Light Burst Background - Adjusted for Light Theme */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-orange-500/5 via-transparent to-transparent opacity-50" />
                    </div>

                    {/* Futuristic Metadata */}
                    <div className="absolute bottom-12 left-12 font-mono text-[9px] text-stone-400 tracking-[0.3em] uppercase"> {/* text-stone-400 */}
                        Core Presence established // 0xAF339
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SystemLoader;
