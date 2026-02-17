'use client';
import { motion } from 'framer-motion';
import { Check, Rocket, Flame } from 'lucide-react';
import Link from 'next/link';

const pricingPlans = [
    {
        name: 'STARTER',
        price: '999',
        description: 'Perfect for startups and small teams launching their first project.',
        features: [
            '1 Landing Page Design',
            'Basic Brand Guidelines',
            'Mobile Responsive Layout',
            '2 Revisions',
            'Delivery in 7 days'
        ],
        buttonText: 'Get started now',
        buttonLink: '/contact',
        icon: Rocket,
        highlight: false
    },
    {
        name: 'GROWTH',
        price: '2499',
        description: 'Best for growing brands looking to scale their digital presence.',
        features: [
            'Multi-page Website Design',
            'Brand Strategy Session',
            'Web Animations & Interactions',
            '4 Revisions',
            'Delivery in 14 days'
        ],
        buttonText: 'Start your project',
        buttonLink: '/contact',
        icon: Flame,
        highlight: true,
        badge: 'POPULAR'
    }
];

export default function Pricing() {
    return (
        <section className="py-20 bg-white relative overflow-hidden text-slate-900 font-sans">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-slate-400 font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-4 block"
                    >
                        &gt; PRICING &lt;
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight"
                    >
                        Plan that fits
                    </motion.h2>
                </div>

                <div className="max-w-5xl mx-auto bg-[#f3f4f6] rounded-[2.5rem] p-4 md:p-8 border border-slate-200/50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {pricingPlans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`relative rounded-[2rem] overflow-hidden flex flex-col h-full shadow-sm
                                    ${plan.highlight 
                                        ? 'bg-[#f46f17] text-white' 
                                        : 'bg-white text-slate-900'
                                    }`}
                            >
                                {/* Card Header */}
                                <div className={`p-8 md:p-10 ${plan.highlight ? 'bg-black/5' : 'bg-[#f3f4f6]/50'}`}>
                                    <div className="flex justify-between items-start mb-6">
                                        <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${plan.highlight ? 'text-white/80' : 'text-slate-400'}`}>
                                            {plan.name}
                                        </span>
                                        {plan.badge && (
                                            <span className="bg-[#ff4d12] text-white text-[10px] font-black px-3 py-1 rounded-full tracking-tighter">
                                                {plan.badge}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex items-baseline gap-1 mb-4">
                                        <span className={`text-5xl md:text-6xl font-bold tracking-tighter ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                                            ${plan.price}
                                        </span>
                                        <span className={`text-base font-bold ${plan.highlight ? 'text-white/70' : 'text-slate-400'}`}>/ project</span>
                                    </div>
                                    <p className={`text-base md:text-lg leading-relaxed font-bold ${plan.highlight ? 'text-white/90' : 'text-slate-500'}`}>
                                        {plan.description}
                                    </p>
                                </div>

                                {/* Divider */}
                                <div className={`h-px w-full ${plan.highlight ? 'border-t border-dashed border-white/20' : 'border-t border-dashed border-slate-200'}`} />

                                {/* Card Body */}
                                <div className="p-8 md:p-10 flex-grow relative flex flex-col">
                                    <ul className="space-y-4 mb-10">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-4">
                                                <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.highlight ? 'bg-white' : 'bg-slate-100'}`}>
                                                    <Check className={`w-3 h-3 ${plan.highlight ? 'text-[#f46f17]' : 'text-slate-400'}`} />
                                                </div>
                                                <span className={`text-base font-bold tracking-tight ${plan.highlight ? 'text-white' : 'text-slate-700'}`}>
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-auto">
                                        <Link href={plan.buttonLink} className="block transition-transform active:scale-[0.98]">
                                            <div className={`w-full py-4 rounded-xl text-base font-bold text-center transition-all duration-300
                                                ${plan.highlight 
                                                    ? 'bg-slate-900 text-white hover:bg-black shadow-lg shadow-black/10' 
                                                    : 'bg-[#f46f17] text-white hover:bg-[#e05d0e] shadow-lg shadow-orange-200'
                                                }`}>
                                                {plan.buttonText}
                                            </div>
                                        </Link>
                                    </div>

                                    {/* Illustration Overlay */}
                                    <div className={`absolute bottom-4 right-4 opacity-[0.08] pointer-events-none`}>
                                        <plan.icon className="w-20 h-20 md:w-24 md:h-24" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 text-center max-w-2xl mx-auto px-4">
                    <p className="text-slate-400 font-bold text-lg md:text-xl leading-snug">
                        For agencies and enterprises needing custom strategy and execution.
                    </p>
                </div>
            </div>

            {/* Premium Gradients */}
            <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-50/50 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-slate-50 blur-[150px] rounded-full pointer-events-none" />
        </section>
    );
}

