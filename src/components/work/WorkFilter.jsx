"use client";
import { workPage } from '@/data/content';
import { motion } from 'framer-motion';

export default function WorkFilter({ active, onFilter }) {
    return (
        <div className="flex flex-wrap justify-center gap-3 mb-16">
            {workPage.categories.map((cat) => (
                <motion.button key={cat} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => onFilter(cat)}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${active === cat ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-200' : 'bg-white border border-stone-200 text-stone-600 hover:border-orange-300 hover:text-orange-600'}`}>
                    {cat}
                </motion.button>
            ))}
        </div>
    );
}
