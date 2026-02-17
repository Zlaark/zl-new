'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { CreditCard, TrendingUp, ShieldCheck } from 'lucide-react';

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

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className='relative w-full max-w-[420px] aspect-square perspective-1000 mx-auto cursor-pointer'
    >
      <div 
         style={{ transform: 'translateZ(75px)' }} 
         className='absolute inset-2 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col justify-between p-8'
      >
          {/* Header */}
          <div className='flex justify-between items-start z-10'>
              <div className='w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center border border-white/10'>
                  <CreditCard className='text-foreground' size={24} />
              </div>
              <div className='px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs font-medium text-muted-foreground'>
                 Premium Asset
              </div>
          </div>

          {/* Floating Elements */}
          <motion.div 
             style={{ transform: 'translateZ(30px)' }}
             className='absolute top-1/3 right-[-10px] p-4 bg-surface-100/80 backdrop-blur-md rounded-xl border border-white/5 flex items-center gap-3 w-48 shadow-xl'
          >
             <div className='bg-green-500/20 p-2 rounded-lg text-green-500'>
                 <TrendingUp size={20} />
             </div>
             <div>
                 <p className='text-xs text-muted-foreground'>Growth</p>
                 <p className='text-lg font-bold text-foreground'>+128%</p>
             </div>
          </motion.div>

          <motion.div 
             style={{ transform: 'translateZ(50px)' }}
             className='absolute bottom-1/4 left-[-10px] p-4 bg-background/90 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-3 w-40 z-20 shadow-xl'
          >
             <div className='bg-blue-500/20 p-2 rounded-lg text-blue-500'>
                 <ShieldCheck size={20} />
             </div>
             <div>
                 <p className='text-xs text-muted-foreground'>Security</p>
                 <p className='text-lg font-bold text-foreground'>Verified</p>
             </div>
          </motion.div>

          {/* Footer */}
          <div className='mt-auto pt-8 z-10'>
              <p className='text-sm text-muted-foreground mb-2'>Total Balance</p>
              <h3 className='text-4xl font-bold text-foreground tracking-tight'>,500<span className='text-muted-foreground'>.00</span></h3>
          </div>
      </div>
    </motion.div>
  );
}
