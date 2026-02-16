'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Fingerprint, PenTool, Code2, ArrowUpRight } from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const ServiceCard = ({ title, icon: Icon, description, tags }) => (
    <motion.div
        variants={fadeInUp}
        className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group min-h-[320px] flex flex-col justify-between"
    >
        <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform shadow-inner shadow-orange-100">
                <Icon className="w-6 h-6" />
            </div>
        </div>

        <p className="text-gray-500 font-medium leading-relaxed mb-10 text-lg">
            {description}
        </p>

        <div className="flex flex-wrap gap-3 mt-auto">
            {tags.map((tag, i) => (
                <span key={i} className="px-5 py-2 rounded-full bg-gray-50 text-[11px] font-bold text-gray-400 uppercase tracking-widest border border-gray-100 group-hover:border-orange-100 group-hover:text-orange-400 transition-colors">
                    {tag}
                </span>
            ))}
        </div>
    </motion.div>
);

export default function ServicesScroll() {
    const services = [
        {
            title: "Branding & Identity",
            icon: Fingerprint,
            description: "From concept to prototype, we create user-centered interfaces that balance beauty with performance, ensuring every interaction feels effortless.",
            tags: ["Identity", "Positioning", "Voice"]
        },
        {
            title: "UI/UX Design",
            icon: PenTool,
            description: "Crafting intuitive, user-centered interfaces that blend clarity, beauty, and effortless interaction.",
            tags: ["Web", "Product", "App"]
        },
        {
            title: "Web Development",
            icon: Code2,
            description: "We build fast, scalable, and fully responsive websites that perform beautifully — whether it's a simple portfolio or a full digital platform.",
            tags: ["Framer", "Front-end", "CMS"]
        }
    ];

    return (
        <section className="py-32 bg-white relative">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

                    {/* Left Column - Sticky */}
                    <div className="relative h-full hidden lg:block">
                        <div className="sticky top-32 h-fit">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                            >
                                <div className="flex items-center gap-3 mb-8">
                                    <span className="text-gray-200 font-light text-xl">&lt;</span>
                                    <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">WHAT WE DO</span>
                                    <span className="text-gray-200 font-light text-xl">&gt;</span>
                                </div>

                                <h2 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-[1] mb-24">
                                    Services built<br />to drive impact
                                </h2>

                                <div className="relative inline-block group">
                                    <Link href="/contact" className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-5 px-10 rounded-2xl shadow-xl shadow-orange-500/20 transition-all border-b-4 border-orange-600 active:border-b-0 active:translate-y-1 transform hover:-translate-y-1">
                                        Discuss your ideas
                                    </Link>

                                    {/* Handwritten Annotation */}
                                    <div className="absolute top-1/2 -right-48 -translate-y-1/2 hidden xl:block pointer-events-none">
                                        <svg className="w-16 h-16 text-orange-300 absolute -left-20 -top-4 rotate-[15deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                                            <path d="M10,60 Q40,10 90,40" />
                                            <path d="M75,30 L90,40 L80,55" />
                                        </svg>
                                        <span className="font-['Reenie_Beanie'] text-3xl text-orange-400 -rotate-6 block transform translate-y-2 translate-x-4">Let's get started</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Mobile Only Header (Non-sticky) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="lg:hidden mb-12"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-gray-200 font-light text-xl">&lt;</span>
                            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">WHAT WE DO</span>
                            <span className="text-gray-200 font-light text-xl">&gt;</span>
                        </div>
                        <h2 className="text-5xl font-bold text-gray-900 tracking-tight leading-[1] mb-8">
                            Services built<br />to drive impact
                        </h2>
                        <Link href="/contact" className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg border-b-4 border-orange-600 active:border-b-0 active:translate-y-1 w-full sm:w-auto">
                            Discuss your ideas
                        </Link>
                    </motion.div>

                    {/* Right Column - Scrollable Cards */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="flex flex-col gap-8 pb-24"
                    >
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
