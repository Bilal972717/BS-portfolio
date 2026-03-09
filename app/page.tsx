'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, MapPin, Calendar, CheckCircle2, 
  ExternalLink, Mail, Phone, Github, 
  Terminal, BarChart3, Users, Briefcase 
} from 'lucide-react';

export default function BilalPortfolio() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-[#0a0a0a] text-gray-200 min-h-screen font-sans selection:bg-blue-600 selection:text-white">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-white font-black tracking-tighter text-2xl">BS.</span>
            <span className="text-blue-500 text-[10px] font-bold uppercase tracking-widest text-nowrap">Full Stack CMS Expert</span>
          </div>
          <div className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-widest">
            <a href="#expertise" className="hover:text-blue-500 transition-colors">Expertise</a>
            <a href="#experience" className="hover:text-blue-500 transition-colors">History</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors">Portfolio</a>
            <a href="#contact" className="text-white border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-all">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-48 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
              10 Years of E-commerce Excellence
            </div>
            
            <h1 className="text-6xl md:text-[110px] font-black text-white leading-[0.85] tracking-tighter uppercase mb-10">
              BILAL <br/> SHERWANI
            </h1>
            
            <div className="grid lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-8">
                <p className="text-xl md:text-3xl text-gray-400 font-medium leading-tight max-w-3xl italic">
                  "Architecting <span className="text-white underline decoration-blue-500 underline-offset-4">high-conversion</span> digital experiences through deep-stack CMS engineering."
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <div className="w-32 h-32 rounded-full border border-white/10 flex items-center justify-center animate-spin-slow">
                   <ArrowUpRight size={40} className="text-blue-500" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORE EXPERTISE BENTO */}
      <section id="expertise" className="py-24 px-6 border-y border-white/5 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div className="space-y-8">
            <h2 className="text-xs font-black text-blue-500 uppercase tracking-[0.4em]">Expertise Summary</h2>
            <p className="text-2xl text-white font-bold leading-snug">
              Highly skilled Full Stack CMS Developer with a proven track record in Shopify, Shopify Plus, and Shopify App development.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              Beyond development, I manage <span className="text-white font-bold">Project Production & Sales Strategy</span>. My holistic approach covers SEO, SMM, DevOps, and domain management.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
              <Terminal className="text-blue-500 mb-4" />
              <h4 className="font-bold text-white mb-2">Technical</h4>
              <p className="text-[10px] text-gray-500 uppercase leading-tight">Liquid / PHP / React / SASS / APIs</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
              <Users className="text-blue-500 mb-4" />
              <h4 className="font-bold text-white mb-2">Leadership</h4>
              <p className="text-[10px] text-gray-500 uppercase leading-tight">Production Management / Sales Head</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
              <BarChart3 className="text-blue-500 mb-4" />
              <h4 className="font-bold text-white mb-2">Marketing</h4>
              <p className="text-[10px] text-gray-500 uppercase leading-tight">SEO / SMM / Email Marketing / CRO</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
              <Briefcase className="text-blue-500 mb-4" />
              <h4 className="font-bold text-white mb-2">E-commerce</h4>
              <p className="text-[10px] text-gray-500 uppercase leading-tight">Shopify Plus / WooCommerce / Laravel</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL HISTORY */}
      <section id="experience" className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-xs font-black text-blue-500 uppercase tracking-[0.4em] mb-20">Professional History</h2>
        
        <div className="space-y-32">
          {/* ROLE 1 */}
          <div className="grid lg:grid-cols-12 gap-12 relative">
            <div className="lg:col-span-4">
              <h3 className="text-4xl font-black text-white tracking-tighter">STACK EDGE DIGITAL</h3>
              <p className="text-blue-500 font-mono text-sm font-bold mt-2 uppercase flex items-center gap-2">
                <MapPin size={14}/> Florida, US (Hybrid)
              </p>
              <p className="text-gray-500 font-mono text-xs mt-1">JUN 2024 – JUL 2025</p>
            </div>
            <div className="lg:col-span-8 border-l border-white/10 pl-10">
              <h4 className="text-xl font-bold text-white mb-6 uppercase">CMS Developer & Production Manager</h4>
              <ul className="space-y-4 text-gray-400 text-sm md:text-base">
                <li className="flex gap-3"><CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-1"/> Led development and production teams for high-ticket Shopify Plus projects.</li>
                <li className="flex gap-3"><CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-1"/> Managed project pipelines, delivery timelines, and global sales acquisition.</li>
              </ul>
            </div>
          </div>

          {/* ROLE 2 */}
          <div className="grid lg:grid-cols-12 gap-12 relative">
            <div className="lg:col-span-4">
              <h3 className="text-4xl font-black text-white tracking-tighter">SOFTWARE PRO</h3>
              <p className="text-blue-500 font-mono text-sm font-bold mt-2 uppercase flex items-center gap-2">
                <MapPin size={14}/> New York, US (Remote)
              </p>
              <p className="text-gray-500 font-mono text-xs mt-1">MAY 2022 – MAY 2024</p>
            </div>
            <div className="lg:col-span-8 border-l border-white/10 pl-10">
              <h4 className="text-xl font-bold text-white mb-6 uppercase">Senior CMS Developer</h4>
              <ul className="space-y-4 text-gray-400 text-sm md:text-base">
                <li className="flex gap-3"><CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-1"/> Expertly handled DNS configurations, Zone file management, and SSL certificate integration.</li>
                <li className="flex gap-3"><CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-1"/> Translated brand visions into user-centric, conversion-optimized online stores.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HORIZONTAL PROJECTS REEL */}
      <section id="projects" className="py-24 bg-white text-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 flex justify-between items-end">
          <h2 className="text-6xl font-black tracking-tighter uppercase">Live Stores</h2>
          <p className="text-xs font-bold text-gray-400 tracking-widest uppercase pb-2">Global Deployments</p>
        </div>
        
        <div className="flex overflow-x-auto pb-10 px-6 gap-6 no-scrollbar">
          {[
            { name: 'July.ac', type: 'Travel', url: 'july.ac' },
            { name: 'Kettle & Fire', type: 'F&B', url: 'kettleandfire.com' },
            { name: 'Love Wellness', type: 'Health', url: 'lovewellness.com' },
            { name: 'Trio Beauty', type: 'Cosmetics', url: 'triobeauty.com' },
            { name: 'HealthNag', type: 'Wellness', url: 'healthnag.com' },
            { name: 'Rizq Design', type: 'Fashion', url: 'rizqbydesign.com' }
          ].map((project, i) => (
            <a key={i} href={`https://${project.url}`} target="_blank" className="min-w-[300px] md:min-w-[450px] bg-gray-50 border border-gray-200 p-12 rounded-[2rem] flex flex-col justify-between hover:bg-black hover:text-white transition-all group">
               <div>
                 <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{project.type}</span>
                 <h3 className="text-4xl font-black tracking-tighter mt-4 uppercase">{project.name}</h3>
               </div>
               <div className="flex justify-between items-center mt-20">
                 <p className="text-sm font-mono opacity-50">{project.url}</p>
                 <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </div>
            </a>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="py-40 px-6 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase mb-16">
              Let's <span className="text-blue-500 italic">Connect</span>.
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 text-xl font-bold italic">
              <a href="mailto:bilalsherwanirbc@gmail.com" className="text-gray-400 hover:text-white transition-colors underline underline-offset-8 decoration-white/20">bilalsherwanirbc@gmail.com</a>
              <a href="tel:+923097946916" className="text-gray-400 hover:text-white transition-colors underline underline-offset-8 decoration-white/20">+92 309 7946916</a>
            </div>
            
            <div className="mt-40 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 text-left md:text-center">
              <p>© 2026 BILAL SHERWANI — BSCS COMSATS</p>
              <p>Shopify Expert // Production Manager // Sales Head</p>
            </div>
          </motion.div>
        </div>
      </footer>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </div>
  );
}