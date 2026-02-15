import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax effects
  // Move background elements down as we scroll (positive y) to create a "slower" scroll feel 
  // relative to the content which moves up with the viewport.
  const yBg1 = useTransform(scrollY, [0, 500], [0, 200]);
  const yBg2 = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950 pt-20 pb-10">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Wrapper Motion Divs for Parallax */}
        <motion.div 
          style={{ y: yBg1 }}
          className="absolute top-0 right-0"
        >
           <div className="w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-30 transform translate-x-1/3 -translate-y-1/4"></div>
        </motion.div>

        <motion.div 
          style={{ y: yBg2 }}
          className="absolute bottom-0 left-0"
        >
          <div className="w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] opacity-30 transform -translate-x-1/3 translate-y-1/4"></div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 z-10 flex flex-col items-center">
        
        {/* Profile Image - Moved to Top */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mb-10"
        >
           <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-slate-800 group">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent z-10"></div>
              <img 
                src={PERSONAL_INFO.avatar} 
                alt={PERSONAL_INFO.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
           </div>
           
           {/* Decorative Elements */}
           <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
           <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge Removed as requested */}

          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Scalable</span> <br className="hidden md:block" />
            Mobile Solutions.
          </h1>

          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            {PERSONAL_INFO.bio}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-12">
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

          <div className="flex items-center justify-center gap-8">
            <SocialLink href={PERSONAL_INFO.github} icon={<Github size={22} />} label="GitHub" />
            <SocialLink href={PERSONAL_INFO.linkedin} icon={<Linkedin size={22} />} label="LinkedIn" />
            <SocialLink href={`mailto:${PERSONAL_INFO.email}`} icon={<Mail size={22} />} label="Email" />
          </div>
        </motion.div>

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