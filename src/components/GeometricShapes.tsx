import { motion } from 'framer-motion';

interface ShapeProps {
  className?: string;
  delay?: number;
  children?: React.ReactNode;
}

// Floating Circle
export const FloatingCircle = ({ className = '', delay = 0 }: ShapeProps) => (
  <motion.div
    className={`absolute rounded-full ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: 1, 
      scale: 1,
      y: [0, -20, 0],
    }}
    transition={{
      opacity: { duration: 0.5, delay },
      scale: { duration: 0.5, delay },
      y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.5 }
    }}
  />
);

// Floating Square
export const FloatingSquare = ({ className = '', delay = 0 }: ShapeProps) => (
  <motion.div
    className={`absolute rounded-lg ${className}`}
    initial={{ opacity: 0, scale: 0, rotate: 0 }}
    animate={{ 
      opacity: 1, 
      scale: 1,
      rotate: [0, 90, 0],
      y: [0, -15, 0],
    }}
    transition={{
      opacity: { duration: 0.5, delay },
      scale: { duration: 0.5, delay },
      rotate: { duration: 8, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.5 },
      y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.3 }
    }}
  />
);

// Floating Triangle (using clip-path)
export const FloatingTriangle = ({ className = '', delay = 0 }: ShapeProps) => (
  <motion.div
    className={`absolute ${className}`}
    style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: 1, 
      scale: 1,
      rotate: [0, -15, 15, 0],
    }}
    transition={{
      opacity: { duration: 0.5, delay },
      scale: { duration: 0.5, delay },
      rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.5 }
    }}
  />
);

// Ring/Circle outline
export const FloatingRing = ({ className = '', delay = 0 }: ShapeProps) => (
  <motion.div
    className={`absolute rounded-full border-2 ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: 1, 
      scale: 1,
      rotate: [0, 360],
    }}
    transition={{
      opacity: { duration: 0.5, delay },
      scale: { duration: 0.5, delay },
      rotate: { duration: 20, repeat: Infinity, ease: 'linear', delay: delay }
    }}
  />
);

// Cross/Plus shape
export const FloatingCross = ({ className = '', delay = 0 }: ShapeProps) => (
  <motion.div
    className={`absolute ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: 1, 
      scale: 1,
      rotate: [0, 45, 0],
    }}
    transition={{
      opacity: { duration: 0.5, delay },
      scale: { duration: 0.5, delay },
      rotate: { duration: 8, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.5 }
    }}
  >
    <div className="relative w-full h-full">
      <div className="absolute top-1/2 left-0 w-full h-1/4 -translate-y-1/2 rounded-full" />
      <div className="absolute top-0 left-1/2 w-1/4 h-full -translate-x-1/2 rounded-full" />
    </div>
  </motion.div>
);

// Dots pattern
export const DotsPattern = ({ className = '' }: { className?: string }) => (
  <div className={`absolute ${className}`}>
    {[...Array(9)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-brand-yellow/30"
        style={{
          left: `${(i % 3) * 20}px`,
          top: `${Math.floor(i / 3) * 20}px`,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.05, duration: 0.3 }}
      />
    ))}
  </div>
);

// Grid lines
export const GridLines = ({ className = '' }: { className?: string }) => (
  <div className={`absolute ${className} opacity-10`}>
    <div className="absolute inset-0" style={{
      backgroundImage: `
        linear-gradient(rgba(255, 226, 37, 0.3) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 226, 37, 0.3) 1px, transparent 1px)
      `,
      backgroundSize: '40px 40px',
    }} />
  </div>
);

// Main background shapes component
export const BackgroundShapes = () => (
  <>
    {/* Large floating circle - top left */}
    <FloatingCircle 
      className="w-64 h-64 bg-gradient-to-br from-brand-yellow/10 to-transparent blur-3xl -top-20 -left-20"
      delay={0}
    />
    
    {/* Medium circle - right side */}
    <FloatingCircle 
      className="w-48 h-48 bg-gradient-to-br from-brand-gold/5 to-transparent blur-2xl top-1/3 right-10"
      delay={0.3}
    />
    
    {/* Small square - bottom left */}
    <FloatingSquare 
      className="w-8 h-8 bg-brand-yellow/20 bottom-1/4 left-1/4"
      delay={0.5}
    />
    
    {/* Ring - top right */}
    <FloatingRing 
      className="w-32 h-32 border-brand-yellow/20 top-20 right-1/4"
      delay={0.7}
    />
    
    {/* Small circle - bottom right */}
    <FloatingCircle 
      className="w-4 h-4 bg-brand-yellow/40 bottom-1/3 right-1/3"
      delay={0.9}
    />
    
    {/* Triangle - middle left */}
    <FloatingTriangle 
      className="w-6 h-6 bg-brand-amber/20 top-1/2 left-10"
      delay={1.1}
    />
    
    {/* Cross - bottom */}
    <FloatingCross 
      className="w-6 h-6 bottom-20 right-1/3"
      delay={1.3}
    >
      <div className="w-full h-full">
        <div className="absolute top-1/2 left-0 w-full h-1/3 -translate-y-1/2 rounded-full bg-brand-yellow/20" />
        <div className="absolute top-0 left-1/2 w-1/3 h-full -translate-x-1/2 rounded-full bg-brand-yellow/20" />
      </div>
    </FloatingCross>
    
    {/* Dots pattern */}
    <DotsPattern className="top-1/4 right-1/4" />
    <DotsPattern className="bottom-1/3 left-1/3" />
  </>
);

// Decorative line
export const DecoLine = ({ className = '' }: { className?: string }) => (
  <motion.div
    className={`h-px bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent ${className}`}
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, ease: 'easeOut' }}
  />
);

export default BackgroundShapes;
