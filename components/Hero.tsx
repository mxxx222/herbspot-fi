"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="section bg-[radial-gradient(1100px_600px_at_50%_-200px,rgba(57,255,20,0.15),rgba(0,0,0,0))] relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="/hero-wellness.mp4" type="video/mp4" />
          <source src="/hero-wellness.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      </div>
      
      <div className="container text-center max-w-4xl relative z-10">
        <motion.h1 
          className="h1 font-heading font-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Europe's Trusted Destination for <span className="text-[var(--brand)]">Botanical Wellness</span>
        </motion.h1>
        
        <motion.p 
          className="lead mt-4 font-body"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Curated botanical wellness devices from trusted EU suppliers. Authorised distributor of premium 510-compatible technology.
        </motion.p>
        
        {/* Verified Partners Section */}
        <motion.div 
          className="mt-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <p className="text-sm text-white/60 mb-4 font-body">Trusted by leading brands</p>
          <div className="flex items-center justify-center gap-8 opacity-60">
            <div className="text-white/50 font-bold text-lg">CCELL</div>
            <div className="text-white/50 font-bold text-lg">AVD</div>
            <div className="text-white/50 font-bold text-lg">O2Vape</div>
            <div className="text-white/50 font-bold text-lg">KandyPens</div>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-8 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 60 }}
          >
            <Link href="/shop" className="btn btn-brand">Explore Curated Selection</Link>
          </motion.div>
          
          <motion.button 
            onClick={() => document.getElementById('featured-blends')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-ghost"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 60 }}
          >
            Build your Wellness Routine
          </motion.button>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 60 }}
          >
            <Link href="#categories" className="btn btn-ghost">Browse Categories</Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}