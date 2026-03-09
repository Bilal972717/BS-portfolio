'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, MapPin, Calendar, CheckCircle2, 
  ExternalLink, Mail, Phone, Github, Globe, 
  Terminal, BarChart3, Users, Briefcase
} from 'lucide-react';

export default function BilalPortfolio() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-[#0a0a0a] text-gray-200 min-h-screen font-sans selection:bg-blue-600 selection:text-white">
      
      {/* 1. NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-white font-black tracking-tighter text-2xl">BS.</span>
            <span className="text-blue-500 text-[10px] font-bold uppercase tracking-widest">Full Stack CMS Expert</span>
          </div>
          <div className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-widest">
            <a href="#expertise" className="hover:text-blue-500 transition-colors">Expertise</a>
            <a href="#experience" className="hover:text-blue-500 transition-colors">History</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors">Portfolio</a>
            <a href="#contact" className="text-white border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-all">Contact</a>
          </div>
        </div>
      </nav>

      {/* 2. HERO: THE POWER POSITIONING */}
      <section className="relative pt-48 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              10 Years Experience
            </div>
            
            <h1 className="text-6xl md:text-[120px] font-black text-white leading-[0.85] tracking-tighter uppercase mb-10">
              BILAL <br/> SHERWANI
            </h1>
            
            <div className="grid lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-8">
                <p className="text-xl md:text-3xl text-gray-400 font-medium leading-tight max-w-3xl italic">
                  "Bridging the gap between <span className="text-white">High-Level Production Management</span> and <span className="text-blue-500 font-bold">Deep-Stack Technical Execution</span>."
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <a href="#projects" className="bg-blue-600 text-white p-12 rounded-full font-black text-xl hover:scale-105 transition-transform flex items-center justify-center text-center leading-none">
                  VIEW THE <br/> REEL
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. CORE SUMMARY (READABILITY FOCUS) */}
      <section id="expertise" className="py-24 px-6 border-y border-white/5 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div className="space-y-8">
            <h2 className="text-xs font-black text-blue-500 uppercase tracking-[0.4em]">Expertise Summary</h2>
            <p className="text-2xl text-white font-bold leading-snug">
              Highly skilled Full Stack CMS Developer with a 10-year track record in crafting exceptional e-commerce experiences.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              Specializing in <span className="text-white">Shopify & Shopify Plus</span>, I excel in transforming complex business requirements into robust, scalable solutions. My expertise extends beyond development to encompass <span className="text-white">SEO, SMM, DevOps, and Sales Strategy</span>, providing a holistic approach to digital success.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div><p className="text-4xl font-black text-white">100+</p><p className="text-[10px] uppercase text-gray-500 font-bold tracking-widest mt-1">Websites Delivered</p></div>
              <div><p className="text-4xl font-black text-white">5+</p><p className="text-[10px] uppercase text-gray-500 font-bold tracking-widest mt-1">USA Agencies Served</p></div>
            </div>
          </div>
          
          {/* BENTO SKILLS GRID */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <Terminal className="text-blue-500 mb-4" />
              <h4 className="font-bold text-white mb-2">Development</h4>
              <p className="text-xs text-gray-500 uppercase tracking-tighter">Liquid / PHP / React / JavaScript / SASS / LESS</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <Users className="text-blue-500 mb-4" />
              <h4 className="font-bold text-white mb-2">Leadership</h4>
              <p className="text-xs text-gray-500 uppercase tracking-tighter">Production Management / Team Lead / Sales Strategy</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <BarChart3 className="text-blue-500 mb-4" />
              <h4 className="font-bold text-white mb-2">Marketing</h4>
              <p className="text-xs text-gray-500 uppercase tracking-tighter">Technical SEO / SMM / Email Marketing / CRO</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <Briefcase className="text-blue-500 mb-4" />
              <h4 className="font-bold text-white mb-2">Platforms</h4>
              <p className="text-xs text-gray-500 uppercase tracking-tighter">Shopify Plus / WooCommerce / BigCommerce / Webflow</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROFESSIONAL EXPERIENCE: THE FULL TIMELINE */}
      <section id="experience" className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-xs font-black text-blue-500 uppercase tracking-[0.4em] mb-20 text-center">Professional Journey</h2>
        
        <div className="space-y-32">
          {/* STACK EDGE */}
          <div className="grid lg:grid-cols-12 gap-12 relative">
            <div className="lg:col-span-4">
              <h3 className="text-4xl font-black text-white tracking-tighter">STACK EDGE DIGITAL</h3>
              <p className="text-blue-500 font-mono text-sm font-bold mt-2 uppercase flex items-center gap-2">
                <MapPin size={14}/> Florida, US (Hybrid)
              </p>
              <p className="text-gray-500 font-mono text-xs mt-1">JUN 2024 – JUL 2025</p>
            </div>
            <div className="lg:col-span-8 border-l border-white/10 pl-10">
              <h4 className="text-xl font-bold text-white mb-6 underline decoration-blue-500 underline-offset-8">CMS Developer | Production Manager | Sales Head</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex gap-3"><CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-1"/> Led development and production teams for CMS and Shopify projects.</li>
                <li className="flex gap-3"><CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-1"/> Managed project pipelines, delivery timelines, and technical requirements for global clients.</li>
                <li className="flex gap-3"><CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-1"/> Directed sales strategy and project acquisition while delivering scalable Shopify solutions.</li>
              </ul>
            </div>
          </div>

          {/* TREEOBIT */}
          <div className="grid lg:grid-cols-12 gap-12 relative">
            <div className="lg:col-span-4">
              <h3 className="text-4xl font-black text-white tracking-tighter">TREEOBIT</h3>
              <p className="text-blue-500 font-mono text-sm font-bold mt-2 uppercase flex items-center gap-2">
                <MapPin size={14}/> Dallas, TX (Remote)
              </p>
              <p className="text-gray-500 font-mono text-xs mt-1">MAR 2024 – MAR 2025</p>
            </div>
            <div className="lg:col-span-8 border-l border-white/10 pl-10">
              <h4 className="text-xl font-bold text-white mb-6 italic text-gray-300">Business Development & Production Manager</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex gap-3"><CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-1"/> Managed development teams and optimized delivery operations and production workflows.</li>
                <li className="flex gap-3"><CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-1"/> Coordinated between development, design, and marketing teams to ensure brand alignment.</li>
              </ul>
            </div>
          </div>

          {/* SOFTWARE PRO */}
          <div className="grid lg:grid-cols-12 gap-12 relative">
            <div className="lg:col-span-4">
              <h3 className="text-4xl font-black text-white tracking-tighter">SOFTWARE PRO</h3>
              <p className="text-blue-500 font-mono text-sm font-bold mt-2 uppercase flex items-center gap-2">
                <MapPin size={14}/> New York, US (Remote)
              </p>
              <p className="text-gray-500 font-mono text-xs mt-1">MAY 2022 – MAY 2024</p>
            </div>
            <div className="lg:col-span-8 border-l border-white/10 pl-10">
              <h4 className="text-xl font-bold text-white mb-6 italic text-gray-300">Senior CMS Developer | Production Manager | Sales Lead</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex gap-3"><CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-1"/> Built conversion-optimized eCommerce platforms for diverse business needs.</li>
                <li className="flex gap-3"><CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-1"/> Expertly handled domain configurations (DNS, Zone files) and SSL certificate integration.</li>
                <li className="flex gap-3"><CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-1"/> Managed technical consulting and client communication for high-ticket projects.</li>
              </ul>
            </div>
          </div>

          {/* ECOM-DEVELOPMENT */}
          <div className="grid lg:grid-cols-12 gap-12 relative">
            <div className="lg:col-span-4 opacity-60">
              <h3 className="text-4xl font-black text-white tracking-tighter uppercase">Ecom-Development</h3>
              <p className="text-gray-500 font-mono text-xs mt-1 tracking-widest">JAN 2019 – MAY 2022</p>
            </div>
            <div className="lg:col-span-8 border-l border-white/10 pl-10 opacity-60">
              <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-tighter">CMS Developer</h4>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Focused on optimizing speed, scalability, and seamless UX for Shopify Plus stores. Built custom private apps and implemented advanced SEO strategies leading to significant organic growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PORTFOLIO GRID: CLEAN & CLICKABLE */}
      <section id="projects" className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Portfolio Reel</h2>
              <h3 className="text-6xl font-black tracking-tighter uppercase leading-none">Live Stores</h3>
            </div>
            <p className="text-gray-400 font-bold max-w-xs text-right">GLOBAL BRANDS DELIVERED OVER THE LAST DECADE.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Trio Beauty', type: 'Beauty', url: 'triobeauty.com' },
              { name: 'July', type: 'Travel', url: 'july.ac' },
              { name: 'HealthNag', type: 'Wellness', url: 'healthnag.com' },
              { name: 'Kettle & Fire', type: 'Food/Bev', url: 'kettleandfire.com' },
              { name: 'Love Wellness', type: 'Health', url: 'lovewellness.com' },
              { name: 'Daniel George', type: 'Fashion', url: 'danielgeorge.com' },
              { name: 'Rizq By Design', type: 'Fashion', url: 'rizqbydesign.com' },
              { name: 'Aware House Shop', type: 'Lifestyle', url: 'awarehouseshop.com' }
            ].map((p, i) => (
              <a key={i} href={`https://${p.url}`} target="_blank" className="group block border border-gray-100 p-8 hover:bg-black transition-all rounded-sm">
                <span className="text-[10px] font-bold text-blue-600 group-hover:text-blue-400 tracking-widest uppercase mb-4 block">{p.type}</span>
                <h4 className="text-2xl font-black group-hover:text-white transition-colors">{p.name}</h4>
                <div className="mt-8 flex justify-between items-center group-hover:text-white">
                  <span className="text-xs font-bold tracking-tighter italic group-hover:text-gray-400">{p.url}</span>
                  <ExternalLink size={14} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CASE STUDIES (RESULT ORIENTED) */}
      <section className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs font-black text-blue-500 uppercase tracking-[0.4em] mb-16 text-center">Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                brand: 'July.ac', 
                p: 'Brand needed high-performance Shopify storefront for premium travel accessories.', 
                s: 'Custom theme optimization and mobile-first UX improvements.', 
                r: 'Faster load times and optimized store performance.' 
              },
              { 
                brand: 'Kettle & Fire', 
                p: 'High-traffic food brand needed better conversion rates and site speed.', 
                s: 'Code optimization, performance audit, and conversion funnel improvements.', 
                r: 'Enhanced page speed scores and improved conversion.' 
              },
              { 
                brand: 'Love Wellness', 
                p: 'Wellness brand needed improved shopping experience and checkout conversions.', 
                s: 'Shopify enhancements and complete UX redesign.', 
                r: 'Better user engagement and improved conversion rates.' 
              }
            ].map((caseStudy, i) => (
              <div key={i} className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-colors">
                <h4 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter">{caseStudy.brand}</h4>
                <div className="space-y-6 text-sm">
                  <p className="text-gray-400"><strong className="text-blue-500 uppercase text-[10px] tracking-widest block mb-1">Problem:</strong> {caseStudy.p}</p>
                  <p className="text-gray-400"><strong className="text-blue-500 uppercase text-[10px] tracking-widest block mb-1">Solution:</strong> {caseStudy.s}</p>
                  <p className="text-white font-bold"><strong className="text-blue-500 uppercase text-[10px] tracking-widest block mb-1">Result:</strong> {caseStudy.r}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CONTACT: THE "DIRECT" APPROACH */}
      <footer id="contact" className="py-32 px-6 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-6xl font-black text-white tracking-tighter mb-8 leading-none uppercase">Let's build <br/> something <br/> great.</h2>
              <div className="space-y-4">
                <a href="mailto:bilalsherwanirbc@gmail.com" className="flex items-center gap-4 text-xl font-bold text-gray-400 hover:text-white transition-colors">
                  <Mail className="text-blue-500" /> bilalsherwanirbc@gmail.com
                </a>
                <a href="tel:+923097946916" className="flex items-center gap-4 text-xl font-bold text-gray-400 hover:text-white transition-colors">
                  <Phone className="text-blue-500" /> +92 309 7946916
                </a>
                <a href="https://github.com/Bilal972717" className="flex items-center gap-4 text-xl font-bold text-gray-400 hover:text-white transition-colors">
                  <Github className="text-blue-500" /> github.com/Bilal972717
                </a>
              </div>
              <div className="mt-12 pt-8 border-t border-white/10">
                 <p className="text-xs font-bold text-gray-600 uppercase tracking-widest leading-loose">
                   BS Computer Science — Comsats Lahore (2019) <br/>
                   Serving US & Global Markets with high-fidelity E-commerce Solutions.
                 </p>
              </div>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <input type="text" placeholder="NAME" className="bg-transparent border-b border-white/20 py-4 outline-none focus:border-blue-500 transition-colors uppercase text-xs font-bold" />
                <input type="email" placeholder="EMAIL" className="bg-transparent border-b border-white/20 py-4 outline-none focus:border-blue-500 transition-colors uppercase text-xs font-bold" />
              </div>
              <textarea placeholder="PROJECT DETAILS" rows={4} className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-blue-500 transition-colors uppercase text-xs font-bold"></textarea>
              <button className="w-full bg-white text-black font-black py-5 uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">Send Message</button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}