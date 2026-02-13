"use client";
import { motion } from 'framer-motion';

const GlowObject = ({ color, size, top, left, duration }) => (
    <motion.div
        className="absolute pointer-events-none"
        style={{
            width: size,
            height: size,
            top: top,
            left: left,
            background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
            filter: 'blur(60px)',
            zIndex: 0,
        }}
        animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 30, 0],
            y: [0, 20, 0],
        }}
        transition={{
            duration: duration,
            repeat: Infinity,
            ease: "easeInOut",
        }}
    />
);

const FloatingShape = ({ type, size, color, top, left, delay, duration }) => {
    return (
        <motion.div
            className={`absolute ${color} backdrop-blur-sm border border-white/10 shadow-2xl pointer-events-none`}
            style={{
                width: size,
                height: size,
                top: top,
                left: left,
                borderRadius: type === 'sphere' ? '50%' : type === 'cube' ? '12%' : '50%',
                clipPath: type === 'torus' ? 'path("M 50,0 A 50,50 0 1,1 50,100 A 50,50 0 1,1 50,0 Z M 50,25 A 25,25 0 1,0 50,75 A 25,25 0 1,0 50,25 Z")' : 'none',
                transformStyle: 'preserve-3d',
            }}
            animate={{
                y: [0, -20, 0],
                rotate: [0, 90, 180, 270, 360],
                scale: [1, 1.1, 1],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "linear"
            }}
        />
    );
};

export default function HeroBackground() {
    return (
        <div className='absolute inset-0 z-0 pointer-events-none overflow-hidden'>
            {/* Glow Objects */}
            <GlowObject color="rgba(255, 165, 0, 0.15)" size="600px" top="-10%" left="-10%" duration={15} />
            <GlowObject color="rgba(0, 150, 255, 0.1)" size="500px" top="40%" left="70%" duration={20} />
            <GlowObject color="rgba(255, 100, 0, 0.08)" size="400px" top="70%" left="10%" duration={18} />

            {/* Floating 3D-like Shapes */}
            <FloatingShape
                type="sphere"
                size={80}
                color="bg-orange-500/10"
                top="20%"
                left="15%"
                delay={0}
                duration={8}
            />
            <FloatingShape
                type="cube"
                size={60}
                color="bg-blue-400/10"
                top="60%"
                left="85%"
                delay={2}
                duration={10}
            />
            <FloatingShape
                type="torus"
                size={100}
                color="bg-orange-400/5"
                top="15%"
                left="80%"
                delay={4}
                duration={12}
            />
            <FloatingShape
                type="sphere"
                size={40}
                color="bg-black/5"
                top="75%"
                left="20%"
                delay={1}
                duration={9}
            />

            {/* Grid Background */}
            <div className='absolute inset-0 bg-[url(/grid.svg)] bg-center opacity-[0.03]' />
        </div>
    );
}
