'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

export function MetallicShape({ delay = 0, className, size = 300 }) {
    // Generate a robust unique ID on mount to avoid hydration mismatch
    const [uniqueId, setUniqueId] = useState('');

    useEffect(() => {
        setUniqueId(`metallic-${delay}-${Math.random().toString(36).substr(2, 9)}`);
    }, [delay]);

    if (!uniqueId) return null; // Or a placeholder/skeleton if needed, but for background it's fine

    return (
        <motion.div
            className={cn("absolute pointer-events-none z-0", className)}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.4, scale: 1 }}
            viewport={{ once: true }}
            animate={{
                y: [0, -40, 0],
                rotate: [0, 90, 0],
                x: [0, 20, 0],
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                delay,
                ease: "linear"
            }}
            style={{ width: size, height: size }}
        >
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
                <defs>
                    <linearGradient id={`${uniqueId}-gradient`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#e2e8f0" />
                        <stop offset="25%" stopColor="#94a3b8" />
                        <stop offset="50%" stopColor="#475569" />
                        <stop offset="75%" stopColor="#94a3b8" />
                        <stop offset="100%" stopColor="#e2e8f0" />
                    </linearGradient>
                    <filter id={`${uniqueId}-glow`}>
                        <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                <path
                    fill={`url(#${uniqueId}-gradient)`}
                    filter={`url(#${uniqueId}-glow)`}
                    d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,77.3,-44.7C85.4,-31.3,90.5,-15.7,90.1,-0.2C89.7,15.2,83.9,30.5,75.1,43.7C66.3,56.9,54.5,68.1,40.7,75.8C26.9,83.5,13.5,87.7,-1.1,89.5C-15.7,91.3,-31.4,90.7,-45.8,84.1C-60.1,77.4,-73.2,64.7,-81.4,49.8C-89.6,34.9,-93,17.4,-91.6,0.8C-91.6,-15.8,-84.1,-31.7,-74.6,-45.5C-65.1,-59.3,-52.3,-71.1,-37.9,-77.7C-23.5,-84.3,-7.5,-85.7,8.6,-80.7C24.7,-75.7,31.3,-83.6,44.7,-76.4Z"
                    transform="translate(100 100)"
                />
            </svg>
        </motion.div>
    );
}
