"use client";
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Stars } from '@react-three/drei';
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
                    color="#ff6b00"
                    size={0.05}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
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
            mixBlendMode: 'screen',
        }}
        animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
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
        <div className='absolute inset-0 z-0 pointer-events-none overflow-hidden bg-black'>
            <div className="absolute inset-0 z-0 opacity-40">
                <Canvas camera={{ position: [0, 0, 15] }}>
                    <ParticleSystem />
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                </Canvas>
            </div>

            <DeepGlow color="#ff6b00" size="800px" top="-20%" left="-10%" duration={20} />
            <DeepGlow color="#4d00ff" size="600px" top="30%" left="60%" duration={25} delay={2} />
            <DeepGlow color="#00d1ff" size="500px" top="60%" left="0%" duration={22} delay={5} />

            <motion.div 
                style={{ y: y1, opacity }}
                className='absolute inset-0 z-1 opacity-[0.15]'
            >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </motion.div>

            <div className="absolute inset-0 z-1 overflow-hidden opacity-20">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent w-full"
                        style={{ top: `${20 + i * 15}%` }}
                        animate={{
                            x: ['-100%', '100%'],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 5 + i,
                            repeat: Infinity,
                            delay: i * 2,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            <div className='absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-10' />
        </div>
    );
}
