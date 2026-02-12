'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { CreditCard, TrendingUp, ShieldCheck, Activity } from 'lucide-react';

export default function HeroCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);
  const shineX = useTransform(mouseX, [-0.5, 0.5], [0, 100]); // Move shine opposite direction
  const shineY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[400px] aspect-[4/5] md:aspect-square perspective-1000 mx-auto cursor-pointer"
    >
      <div 
         style={{ transform: "translateZ(75px)" }} 
         className="absolute inset-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col justify-between p-8"
      >
          {/* Glare Effect */}
          <motion.div 
             style={{ 
                 background: "radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 60%)",
                 left: shineX + "%", // Dynamic position
                 top: shineY + "%",
                 x: "-50%",
                 y: "-50%",
             }}
             className="absolute w-[150%] h-[150%] pointer-events-none blur-xl opacity-50 transition-opacity duration-300"
          />

          {/* Card Header */}
          <div className="flex justify-between items-start z-10">
              <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center border border-orange-500/30">
                  <CreditCard className="text-orange-500" size={24} />
              </div>
              <div className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-slate-600">
                 Premium
              </div>
          </div>

          {/* Floating UI Elements (Parallax Depth) */}
          <motion.div 
             style={{ transform: "translateZ(30px)" }}
             className="absolute top-1/3 right-[-20px] p-4 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 w-48"
          >
             <div className="bg-green-100 p-2 rounded-lg text-green-600">
                 <TrendingUp size={20} />
             </div>
             <div>
                 <p className="text-xs text-slate-400">Growth</p>
                 <p className="text-sm font-bold text-slate-800">+128%</p>
             </div>
          </motion.div>

          <motion.div 
             style={{ transform: "translateZ(50px)" }}
             className="absolute bottom-1/4 left-[-20px] p-4 bg-slate-900 rounded-xl shadow-xl flex items-center gap-3 w-40 z-20"
          >
             <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
                 <ShieldCheck size={20} />
             </div>
             <div>
                 <p className="text-xs text-slate-400">Security</p>
                 <p className="text-sm font-bold text-white">Verified</p>
             </div>
          </motion.div>

          {/* Card Footer */}
          <div className="mt-auto pt-8 z-10">
              <p className="text-sm text-slate-500 mb-1">Total Balance</p>
              <h3 className="text-3xl font-bold text-slate-800">$24,500.00</h3>
              <div className="mt-4 flex gap-2">
                 {[1,2,3,4].map(i => (
                     <div key={i} className="h-1.5 flex-1 bg-slate-200 rounded-full overflow-hidden">
                         <div className="h-full bg-orange-500 w-[60%]" />
                     </div>
                 ))}
              </div>
          </div>
      </div>
    </motion.div>
  );
}
