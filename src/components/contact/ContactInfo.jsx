"use client";
import { contact } from '@/data/content';
import FadeIn from '@/components/ui/FadeIn';
import { motion } from 'framer-motion';

export default function ContactInfo() {
    const items = [
        { icon: '📧', label: 'Email', value: contact.info.email, href: 'mailto:' + contact.info.email },
        { icon: '📞', label: 'Phone', value: contact.info.phone, href: 'tel:' + contact.info.phone },
        { icon: '📍', label: 'Address', value: contact.info.address, href: null },
    ];
    return (
        <div className="space-y-8">
            <FadeIn delay={0.1}>
                <h3 className="text-2xl font-bold text-stone-900 mb-6">Contact Information</h3>
                <p className="text-stone-500 mb-8 leading-relaxed">We are here to help you bring your ideas to life. Reach out through any of the channels below.</p>
            </FadeIn>
            {items.map((item, i) => (
                <FadeIn key={i} delay={0.2 + i * 0.1}>
                    <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4 p-4 rounded-xl hover:bg-stone-50 transition-colors">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                            <div className="text-sm text-stone-400 font-medium mb-1">{item.label}</div>
                            {item.href ? (
                                <a href={item.href} className="text-stone-900 font-medium hover:text-orange-600 transition-colors">{item.value}</a>
                            ) : (
                                <span className="text-stone-900 font-medium">{item.value}</span>
                            )}
                        </div>
                    </motion.div>
                </FadeIn>
            ))}
            <FadeIn delay={0.5}>
                <div className="pt-8 border-t border-stone-100">
                    <h4 className="text-sm font-bold text-stone-900 mb-4 uppercase tracking-wider">Follow Us</h4>
                    <div className="flex gap-4">
                        {contact.socialLinks.map((link) => (
                            <motion.a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" whileHover={{ y: -3 }}
                                className="w-11 h-11 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-orange-100 hover:text-orange-600 transition-all text-sm font-bold">
                                {link.name.charAt(0)}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}
