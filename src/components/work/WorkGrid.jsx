"use client";
import { portfolio } from '@/data/content';
import FadeIn from '@/components/ui/FadeIn';
import { motion, AnimatePresence } from 'framer-motion';

export default function WorkGrid({ filter }) {
    const projects = filter === 'All' ? portfolio.projects : portfolio.projects.filter(p => p.category === filter);
    return (
        <AnimatePresence mode="wait">
            <motion.div key={filter} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, i) => (
                    <FadeIn key={project.id} delay={i * 0.1}>
                        <motion.div whileHover={{ y: -8 }} className="group cursor-pointer">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6" style={{ backgroundColor: project.color }}>
                                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-700">
                                    {project.title.charAt(0)}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]">
                                    <p className="text-white/90 text-sm mb-3">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-stone-900 mb-1 group-hover:text-orange-600 transition-colors">{project.title}</h3>
                            <p className="text-stone-500 text-sm">{project.category}</p>
                        </motion.div>
                    </FadeIn>
                ))}
            </motion.div>
        </AnimatePresence>
    );
}
