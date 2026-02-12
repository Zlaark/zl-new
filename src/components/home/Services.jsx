'use client';

import { motion } from 'framer-motion';
import {
    Lightbulb,
    Palette,
    Code2,
    Rocket
} from 'lucide-react';

const services = [
    {
        icon: Lightbulb,
        title: 'Strategy & Brand',
        description: 'We define your digital north star, crafting brand identities that resonate and strategies that deliver measurable growth.',
        color: 'from-orange-400 to-amber-500'
    },
    {
        icon: Palette,
        title: 'UI/UX Design',
        description: 'Award-winning interfaces that blend beauty with function. We design intuitive experiences users love to explore.',
        color: 'from-blue-400 to-indigo-500'
    },
    {
        icon: Code2,
        title: 'Development',
        description: 'Robust, scalable, and lightning-fast code. We build modern web applications using the latest tech stack.',
        color: 'from-emerald-400 to-teal-500'
    },
    {
        icon: Rocket,
        title: 'Growth & Marketing',
        description: 'Data-driven campaigns that amplify your reach. We help you find and convert your ideal audience.',
        color: 'from-purple-400 to-pink-500'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

export default function Services() {
    return (
        <section className="section bg-bg-secondary relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
                <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-amber-100 rounded-full blur-3xl" />
                <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-slate-100 rounded-full blur-3xl" />
            </div>

            <div className="container relative z-10">
                <div className="section-header">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="section-title">Our Expertise</h2>
                        <p className="section-subtitle">
                            Comprehensive digital solutions tailored to elevate your business in the modern landscape.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="group relative p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br ${service.color} transition-opacity duration-300`} />

                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${service.color} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                <service.icon size={28} strokeWidth={1.5} />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-700 transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-slate-600 leading-relaxed text-sm">
                                {service.description}
                            </p>

                            {/* Bottom Line Indicator */}
                            <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
