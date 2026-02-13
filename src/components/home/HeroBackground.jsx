"use client";
import { motion } from 'framer-motion';

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

const GlassyBlob = ({ size, color, top, left, delay, duration }) => {
    return (
        <motion.div
            className="absolute pointer-events-none"
            style={{
                width: size,
                height: size,
                top: top,
                left: left,
                zIndex: 1,
            }}
            animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
            }}
            transition={{
                duration: duration * 2,
                repeat: Infinity,
                ease: "linear",
            }}
        >
            <motion.svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full opacity-30"
                style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))' }}
            >
                <defs>
                    <linearGradient id={`grad-${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: color, stopOpacity: 0.8 }} />
                        <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0.2 }} />
                    </linearGradient>
                </defs>
                <motion.path
                    fill={`url(#grad-${delay})`}
                    d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87,-15.7,85.1,-0.1C83.2,14.6,76,29.3,67.3,42.4C58.6,55.5,48.4,67,35.8,73.8C23.2,80.6,8.2,82.8,-6.4,81.3C-21,79.8,-35.3,74.7,-48,66.6C-60.7,58.5,-71.8,47.4,-78.3,34.2C-84.8,21,-86.7,5.7,-84.4,-9.1C-82.2,-23.9,-75.8,-38.2,-66.2,-50.1C-56.7,-62.1,-43.9,-71.7,-30,-78.2C-16,-84.7,-0.8,-88.1,13.7,-85.8C28.2,-83.5,44.7,-76.4,44.7,-76.4Z"
                    transform="translate(100 100)"
                    animate={{
                        d: [
                            "M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87,-15.7,85.1,-0.1C83.2,14.6,76,29.3,67.3,42.4C58.6,55.5,48.4,67,35.8,73.8C23.2,80.6,8.2,82.8,-6.4,81.3C-21,79.8,-35.3,74.7,-48,66.6C-60.7,58.5,-71.8,47.4,-78.3,34.2C-84.8,21,-86.7,5.7,-84.4,-9.1C-82.2,-23.9,-75.8,-38.2,-66.2,-50.1C-56.7,-62.1,-43.9,-71.7,-30,-78.2C-16,-84.7,-0.8,-88.1,13.7,-85.8C28.2,-83.5,44.7,-76.4,44.7,-76.4Z",
                            "M42.3,-73.2C55.2,-66.7,66.2,-55.2,73.2,-42.3C80.2,-29.3,83.2,-14.7,82.5,0.4C81.8,15.5,77.5,31,68.9,44.1C60.3,57.2,47.5,67.8,33.1,74C18.8,80.2,4.4,81.8,-10.8,79.5C-26,77.1,-42,70.8,-54.6,60.8C-67.2,50.8,-76.4,37.1,-81.4,22.1C-86.4,7.1,-87.3,-9.2,-82.4,-24.1C-77.5,-39,-66.9,-52.4,-53.6,-62.9C-40.3,-73.4,-24.3,-80.9,-8,-85.5C8.3,-90.1,29.4,-80.7,42.3,-73.2Z",
                            "M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87,-15.7,85.1,-0.1C83.2,14.6,76,29.3,67.3,42.4C58.6,55.5,48.4,67,35.8,73.8C23.2,80.6,8.2,82.8,-6.4,81.3C-21,79.8,-35.3,74.7,-48,66.6C-60.7,58.5,-71.8,47.4,-78.3,34.2C-84.8,21,-86.7,5.7,-84.4,-9.1C-82.2,-23.9,-75.8,-38.2,-66.2,-50.1C-56.7,-62.1,-43.9,-71.7,-30,-78.2C-16,-84.7,-0.8,-88.1,13.7,-85.8C28.2,-83.5,44.7,-76.4,44.7,-76.4Z"
                        ]
                    }}
                    transition={{
                        duration: duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: delay,
                    }}
                />
            </motion.svg>
            <div
                className="absolute inset-4 rounded-full"
                style={{
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(8px)',
                    boxShadow: 'inset 0 0 20px rgba(255,255,255,0.1)'
                }}
            />
        </motion.div>
    );
};

export default function HeroBackground() {
    return (
        <div className='absolute inset-0 z-0 pointer-events-none overflow-hidden'>
            {/* Deep Layered Glows */}
            <DeepGlow color="#ff6b00" size="800px" top="-20%" left="-10%" duration={20} />
            <DeepGlow color="#4d00ff" size="600px" top="30%" left="60%" duration={25} delay={2} />
            <DeepGlow color="#00d1ff" size="500px" top="60%" left="0%" duration={22} delay={5} />
            <DeepGlow color="#ff006e" size="400px" top="10%" left="80%" duration={18} delay={1} />

            {/* Abstract Glassy Blobs */}
            <GlassyBlob
                size={350}
                color="#ff8c42"
                top="15%"
                left="5%"
                delay={0}
                duration={12}
            />
            <GlassyBlob
                size={300}
                color="#4facfe"
                top="55%"
                left="75%"
                delay={3}
                duration={15}
            />
            <GlassyBlob
                size={250}
                color="#f093fb"
                top="-10%"
                left="70%"
                delay={6}
                duration={14}
            />
            <GlassyBlob
                size={280}
                color="#ffecd2"
                top="70%"
                left="15%"
                delay={2}
                duration={13}
            />

            {/* Decorative Dots/Particles for Depth */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-orange-500/10 rounded-full blur-[2px]"
                    style={{
                        width: Math.random() * 6 + 2,
                        height: Math.random() * 6 + 2,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -40, 0],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: 5 + Math.random() * 5,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                    }}
                />
            ))}

            {/* Grid Overlay for Texture */}
            <div className='absolute inset-0 bg-[url(/grid.svg)] bg-center opacity-[0.05]' />

            {/* Soft Overlay to tie it all together */}
            <div className='absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/20 pointer-events-none' />
        </div>
    );
}
