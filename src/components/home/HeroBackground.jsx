"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleSystem = () => {
    const ref = useRef();
    const [sphere] = useState(() => {
        const arr = new Float32Array(5000 * 3);
        for (let i = 0; i < 5000; i++) {
            const r = 10 + Math.random() * 5;
            const theta = 2 * Math.PI * Math.random();
            const phi = Math.acos(2 * Math.random() - 1);
            arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            arr[i * 3 + 2] = r * Math.cos(phi);
        }
        return arr;
    });

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#f97316" // Orange particles
                    size={0.03}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.NormalBlending}
                />
            </Points>
        </group>
    );
};

const DeepGlow = ({ color, size, top, left, duration, delay = 0 }) => (
    <motion.div
        className="absolute pointer-events-none"
        style={{
            width: size,
            height: size,
            top: top,
            left: left,
            background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
            filter: 'blur(80px)',
            zIndex: 0,
            opacity: 0.5,
        }}
        animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 40, 0],
            y: [0, 30, 0],
        }}
        transition={{
            duration: duration,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut",
        }}
    />
);

export default function HeroBackground() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

    return (
        <div className='absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#F5F4F3]'>
            <div className="absolute inset-0 z-0 opacity-40">
                <Canvas camera={{ position: [0, 0, 15] }}>
                    <ParticleSystem />
                </Canvas>
            </div>

            <DeepGlow color="rgba(249, 115, 22, 0.1)" size="800px" top="-20%" left="-10%" duration={20} />
            <DeepGlow color="rgba(59, 130, 246, 0.05)" size="600px" top="30%" left="60%" duration={25} delay={2} />

            <motion.div
                style={{ y: y1, opacity }}
                className='absolute inset-0 z-1 opacity-[0.4]'
            >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </motion.div>

            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-[#F5F4F3]/60 to-[#F5F4F3] pointer-events-none z-10' />
        </div>
    );
}
