import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950 pt-20">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-30 transform translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] opacity-30 transform -translate-x-1/3 translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 text-center lg:text-left"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-8 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for freelance & contract work
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Scalable</span> <br/>
            Mobile Solutions.
          </h1>

          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
            {PERSONAL_INFO.bio}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">
            <a 
              href="#projects"
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl transition-all flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1"
            >
              View Projects <ArrowRight size={20} />
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 bg-slate-900 border border-slate-800 text-white font-medium rounded-2xl hover:bg-slate-800 hover:border-slate-700 transition-all flex items-center gap-2"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-8">
            <SocialLink href={PERSONAL_INFO.github} icon={<Github size={22} />} label="GitHub" />
            <SocialLink href={PERSONAL_INFO.linkedin} icon={<Linkedin size={22} />} label="LinkedIn" />
            <SocialLink href={`mailto:${PERSONAL_INFO.email}`} icon={<Mail size={22} />} label="Email" />
          </div>
        </motion.div>

        {/* Profile Image / Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
           <div className="relative w-full max-w-md mx-auto aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-slate-800 group">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent z-10"></div>
              <img 
                src={PERSONAL_INFO.avatar} 
                alt={PERSONAL_INFO.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              
              {/* Floating Badge */}
              <motion.div 
                className="absolute bottom-8 right-8 z-20 bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-slate-700 shadow-xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Current Focus</p>
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold">Flutter & AI</span>
                </div>
              </motion.div>
           </div>

           {/* Decorative Elements */}
           <div className="absolute -top-12 -right-12 w-24 h-24 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
           <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
  >
    <div className="p-2 rounded-full bg-slate-900 border border-slate-800 group-hover:border-slate-600 group-hover:bg-slate-800 transition-all">
      {icon}
    </div>
    <span className="hidden sm:inline text-sm font-medium">{label}</span>
  </a>
);

export default Hero;
