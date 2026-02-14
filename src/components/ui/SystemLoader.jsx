"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SystemLoader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState("INITIALIZING SYSTEM...");
    const [isVisible, setIsVisible] = useState(true);

    const statuses = [
        "PARSING NEURAL NETWORK...",
        "CALIBRATING SENSORS...",
        "CONNECTING TO DATA STREAMS...",
        "ENCRYPTING CHANNELS...",
        "ACCESS GRANTED"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => {
                        setIsVisible(false);
                        if (onComplete) onComplete();
                    }, 800);
                    return 100;
                }

                // Update status based on progress
                const statusIndex = Math.min(
                    Math.floor((prev / 100) * statuses.length),
                    statuses.length - 1
                );
                setStatus(statuses[statusIndex]);

                return prev + Math.random() * 15;
            });
        }, 150);

        return () => clearInterval(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
                    transition={{ duration: 0.8 }}
                    className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center p-6"
                >
                    <div className="w-full max-w-md">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex justify-between items-end mb-4 font-mono text-xs tracking-widest text-slate-400"
                        >
                            <span>{status}</span>
                            <span>{Math.floor(progress)}%</span>
                        </motion.div>

                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden relative border border-slate-200">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                className="h-full bg-gradient-to-r from-orange-500 to-amber-500 shadow-[0_0_10px_rgba(249,115,22,0.3)]"
                            />

                            {/* Scanning line effect */}
                            <motion.div
                                animate={{ left: ["-20%", "120%"] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                                className="absolute top-0 bottom-0 w-[20%] bg-white/40 skew-x-12 z-10"
                            />
                        </div>

                        <div className="mt-8 grid grid-cols-4 gap-2">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ opacity: [0.2, 0.8, 0.2] }}
                                    transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                                    className="h-1 bg-slate-200 rounded-full"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="absolute top-12 left-12 flex gap-4">
                        <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                        <div className="w-24 h-4 rounded bg-slate-100" />
                    </div>

                    <div className="absolute bottom-12 right-12 text-right">
                        <div className="text-[10px] font-mono text-slate-300 mb-1 tracking-widest uppercase">ZLAARK // OS v.2.0.4</div>
                        <div className="w-32 h-1 bg-slate-100 ml-auto rounded-full" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SystemLoader;
