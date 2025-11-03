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
          className="h1 font-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Suomen <span className="text-[var(--brand)]">Luotetuin</span><br />
          Kasviöljyjen Erikoisliike
        </motion.h1>
        
        <motion.p 
          className="lead mt-4 font-body"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Laadukkaat 510-yhteensopivat laitteet ja lisätarvikkeet aromaterapeuttiseen käyttöön. 
          Valtuutettu jälleenmyyjä, nopea toimitus Suomeen.
        </motion.p>
        
        {/* Luottamusindikaattorit */}
        <motion.div 
          className="mt-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <span className="text-sm font-semibold text-white">✓ Laillinen Suomessa</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <span className="text-sm font-semibold text-white">✓ EU-sertifioitu</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <span className="text-sm font-semibold text-white">✓ 24h toimitus</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <span className="text-sm font-semibold text-white">✓ Luotettavat brändit</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 60 }}
          >
            <Link href="/shop" className="btn btn-brand">Selaa Tuotteita</Link>
          </motion.div>
          
          <motion.button 
            onClick={() => document.getElementById('featured-blends')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-ghost"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 60 }}
          >
            Katso Suositut
          </motion.button>
        </motion.div>

        {/* Luotetut brändit */}
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-sm text-white/40 mb-4 font-body">Valtuutettu jälleenmyyjä</p>
          <div className="flex items-center justify-center gap-8 opacity-40">
            <div className="text-white/60 font-bold text-lg">CCELL</div>
            <div className="text-white/60 font-bold text-lg">AVD</div>
            <div className="text-white/60 font-bold text-lg">O2Vape</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}