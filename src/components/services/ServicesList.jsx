"use client";
import { services } from '@/data/content';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Palette, ShoppingBag, Zap, Wrench } from 'lucide-react';

const iconMap = [Globe, Smartphone, Palette, ShoppingBag, Zap, Wrench];

export default function ServicesList() {
    return (
        <section className="section bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.items.map((service, i) => {
                        const Icon = iconMap[i % iconMap.length];
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-300 h-full flex flex-col relative overflow-hidden"
                            >
                                {/* Hover Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                                        <Icon size={28} />
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">{service.title}</h3>
                                    <p className="text-slate-500 mb-6 leading-relaxed flex-grow">{service.longDescription}</p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {service.features.map((f, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-slate-50 text-slate-600 rounded-full text-xs font-medium border border-slate-100 group-hover:border-orange-100 group-hover:bg-white group-hover:text-orange-600 transition-colors">
                                                {f}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
