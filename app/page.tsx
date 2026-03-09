'use client';

import React from 'react';
import { 
  ArrowUpRight, MapPin, Calendar, CheckCircle2, 
  ExternalLink, Mail, Phone, Github, 
  Terminal, BarChart3, Users, Briefcase 
} from 'lucide-react';

export default function BilalPortfolio() {
  return (
    <div className="bg-[#0a0a0a] text-gray-200 min-h-screen font-sans selection:bg-blue-600 selection:text-white">
      
      {/* NAVIGATION */}
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

      {/* HERO */}
      <section className="relative pt-48 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
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
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section id="expertise" className="py-24 px-6 border-y border-white/5 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div className="space-y-8">
            <h2 className="text-xs font-black text-blue-500 uppercase tracking-[0.4em]">Expertise Summary</h2>
            <p className="text-2xl text-white font-bold leading-snug">
              Full Stack CMS Developer specializing in Shopify & Shopify Plus.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              Transforming complex business requirements into robust, scalable solutions. Experience in US-based agencies focusing on SEO, DevOps, and Sales Strategy.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <Terminal className="text-blue-500 mb-4" />
              <h4 className="font-bold text-white mb-2">Development</h4>
              <p className="text-[10px] text-gray-500 uppercase">Liquid / PHP / React / JS</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <Users className="text-blue-500 mb-4" />
              <h4 className="font-bold text-white mb-2">Leadership</h4>
              <p className="text-[10px] text-gray-500 uppercase">Production / Team Lead</p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-xs font-black text-blue-500 uppercase tracking-[0.4em] mb-20">Professional Journey</h2>
        <div className="space-y-24">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h3 className="text-3xl font-black text-white">STACK EDGE DIGITAL</h3>
              <p className="text-blue-500 font-mono text-sm font-bold mt-2 uppercase tracking-tighter">Florida, US (Hybrid)</p>
              <p className="text-gray-500 font-mono text-xs mt-1 italic">2024 – 2025</p>
            </div>
            <div className="lg:col-span-8 border-l border-white/10 pl-10">
              <h4 className="text-xl font-bold text-white mb-4">Production Manager | Sales Head</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>• Led development teams for complex Shopify Plus projects.</li>
                <li>• Managed project pipelines and delivery timelines for global brands.</li>
                <li>• Coordinated between technical teams and stakeholders.</li>
              </ul>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h3 className="text-3xl font-black text-white">SOFTWARE PRO</h3>
              <p className="text-blue-500 font-mono text-sm font-bold mt-2 uppercase tracking-tighter">New York, US (Remote)</p>
              <p className="text-gray-500 font-mono text-xs mt-1 italic">2022 – 2024</p>
            </div>
            <div className="lg:col-span-8 border-l border-white/10 pl-10">
              <h4 className="text-xl font-bold text-white mb-4">Senior CMS Developer</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>• Expertly handled domain configurations and SSL integrations.</li>
                <li>• Built conversion-optimized eCommerce platforms.</li>
                <li>• Managed technical consulting and client communications.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-32 px-6 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-black text-white tracking-tighter mb-8 uppercase">Let's build.</h2>
            <div className="space-y-4">
              <p className="flex items-center gap-4 text-xl font-bold text-gray-400 hover:text-white transition-colors">
                <Mail className="text-blue-500" /> bilalsherwanirbc@gmail.com
              </p>
              <p className="flex items-center gap-4 text-xl font-bold text-gray-400">
                <Phone className="text-blue-500" /> +92 309 7946916
              </p>
            </div>
          </div>
          <div className="text-right flex flex-col justify-end">
             <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
               BSCS — UOL Lahore (2021)
             </p>
          </div>
        </div>
      </footer>
    </div>
  );
}