'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const TextReveal = ({ children, className, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' });
    const text = typeof children === 'string' ? children : '';
    const words = text.split(' ');

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.02 * i + delay },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 20,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: 'spring',
                damping: 20,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.span
            ref={ref}
            className={\inline-block overflow-hidden \\}
            variants={container}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
        >
            {words.map((word, index) => (
                <motion.span
                    variants={child}
                    style={{ marginRight: '0.25em' }}
                    key={index}
                    className='inline-block'
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default TextReveal;
