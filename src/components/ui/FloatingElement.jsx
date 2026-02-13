'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function FloatingElement({ color, size, top, left, delay }) {
    return (
        <motion.div
            className={cn("absolute rounded-full blur-[80px] opacity-20 pointer-events-none", color)}
            style={{ width: size, height: size, top, left }}
            animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
                scale: [1, 1.1, 1],
            }}
            transition={{
                duration: 8,
                repeat: Infinity,
                delay,
                ease: "easeInOut"
            }}
        />
    );
}
