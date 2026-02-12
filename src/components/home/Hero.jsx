'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import Link from 'next/link';
import HeroCard from './HeroCard'; // Import the new 3D Card

export default function Hero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const containerRef = useRef(null);

    // Parallax effect on mouse move
    useEffect(() => {
        const handleMouseMove = (e) => {
            // Update motion values directly
            mouseX.set(e.clientX / window.innerWidth);
            mouseY.set(e.clientY / window.innerHeight);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    // Text reveal animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    // Magnetic Button Logic
    const MagneticButton = ({ children, href, variant = 'primary' }) => {
        const ref = useRef(null);
        const [position, setPosition] = useState({ x: 0, y: 0 });

        const handleMouse = (e) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = ref.current.getBoundingClientRect();
            const middleX = clientX - (left + width / 2);
            const middleY = clientY - (top + height / 2);
            setPosition({ x: middleX * 0.3, y: middleY * 0.3 }); // Attraction strength
        };

        const reset = () => {
            setPosition({ x: 0, y: 0 });
        };

        const { x, y } = position;

        return (
            <motion.div
                ref={ref}
                onMouseMove={handleMouse}
                onMouseLeave={reset}
                animate={{ x, y }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            >
                <Link
                    href={href}
                    className={`
            relative flex items-center justify-center px-8 py-4 rounded-full font-medium text-lg transition-all duration-300
            ${variant === 'primary'
                            ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg hover:shadow-orange-500/30'
                            : 'bg-white border text-slate-900 border-slate-200 hover:border-orange-500/50 hover:bg-orange-50/50'}
          `}
                >
                    {children}
                </Link>
            </motion.div>
        );
    };

    // Background blobs animation
    const springConfig = { stiffness: 50, damping: 20 };
    const moveX = useSpring(useTransform(mouseX, [0, 1], [-20, 20]), springConfig);
    const moveY = useSpring(useTransform(mouseY, [0, 1], [-20, 20]), springConfig);
    const moveXReverse = useSpring(useTransform(mouseX, [0, 1], [20, -20]), springConfig);
    const moveYReverse = useSpring(useTransform(mouseY, [0, 1], [20, -20]), springConfig);

    return (
        <section ref={containerRef} className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-bg-primary pt-20">

            {/* Animated Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Abstract Gradient Blobs */}
                <motion.div
                    style={{ x: moveX, y: moveY }}
                    className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-3xl opacity-60"
                />
                <motion.div
                    style={{ x: moveXReverse, y: moveYReverse }}
                    className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-3xl opacity-60"
                />
                <div className="absolute top-[20%] left-[15%] w-[300px] h-[300px] bg-blue-50/30 rounded-full blur-3xl opacity-40 mix-blend-multiply" />

                {/* Grid or texture overlay */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            </div>

            <div className="container relative z-10 px-6 mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Text Content */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
                    >
                        <motion.div variants={fadeInUp} className="mb-6">
                            <span className="inline-block py-1.5 px-4 rounded-full bg-orange-50 border border-orange-100 text-orange-600 font-medium text-sm tracking-wide mb-6">
                                Redefining Digital Experiences
                            </span>
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                            We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Digital Products</span> That Convert.
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-600 max-w-lg mb-10 leading-relaxed">
                            Zlaark is a creative agency crafting premium animation-driven websites and applications that separate you from the competition.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
                            <MagneticButton href="/work">Start a Project</MagneticButton>
                            <MagneticButton href="/about" variant="secondary">Our Process</MagneticButton>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: 3D Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="hidden lg:flex justify-center perspective-1000"
                    >
                        <HeroCard />
                    </motion.div>

                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="w-1 h-2 bg-slate-400 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
