"use client";
import { useState } from 'react';
import { contact } from '@/data/content';
import { motion } from 'framer-motion';
import FadeIn from '@/components/ui/FadeIn';

export default function ContactForm() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 3000); setForm({ name: '', email: '', message: '' }); };

    return (
        <FadeIn>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-10 border border-stone-100 shadow-sm">
                <h3 className="text-2xl font-bold text-stone-900 mb-6">Send a Message</h3>
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">Name</label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder={contact.form.namePlaceholder} required className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all text-stone-800 placeholder-stone-400" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">Email</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder={contact.form.emailPlaceholder} required className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all text-stone-800 placeholder-stone-400" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">Message</label>
                        <textarea name="message" value={form.message} onChange={handleChange} placeholder={contact.form.messagePlaceholder} required rows={5} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all resize-none text-stone-800 placeholder-stone-400" />
                    </div>
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-orange-200 transition-all">
                        {submitted ? '✓ Message Sent!' : contact.form.submitText}
                    </motion.button>
                </div>
            </form>
        </FadeIn>
    );
}
