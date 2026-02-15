import React from 'react';
import { PERSONAL_INFO, EXPERIENCE } from '../constants';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, GraduationCap, Heart, Coffee, Code2, Download } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Happy Clients", value: "10+" },
    { label: "Coffee Consumed", value: "∞" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-24 transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3 flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[400px] aspect-[3/4] rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl group">
              <img 
                src={PERSONAL_INFO.avatar} 
                alt={PERSONAL_INFO.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 text-slate-200 mb-1">
                  <MapPin size={16} className="text-primary" />
                  <span className="text-sm">{PERSONAL_INFO.location}</span>
                </div>
                <h2 className="text-2xl font-bold text-white">{PERSONAL_INFO.name}</h2>
              </div>
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-2/3"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Code</span>,<br /> 
              Defined by <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Quality</span>.
            </h1>
            
            <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
              <p>
                Hello! I'm <strong>Husnain Momin</strong>, a passionate software engineer who bridges the gap between complex backend logic and beautiful, fluid mobile user interfaces.
              </p>
              <p>
                My journey began with a curiosity for how mobile apps actually work "under the hood." That curiosity quickly evolved into a career specializing in 
                <strong> Flutter</strong> and <strong>Node.js</strong>. I don't just write code; I build digital experiences that solve real problems.
              </p>
              <p>
                When I'm not debugging or architecting new systems, you can find me exploring the latest in Generative AI, contributing to open-source, or refining my craft to stay ahead of the ever-changing tech landscape.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {stats.map((stat, index) => (
                <div key={index} className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-center shadow-sm">
                  <div className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <a 
                href="#contact"
                className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20"
              >
                Let's Talk
              </a>
              {/* Optional Resume Button placeholder */}
              <button 
                disabled
                className="px-8 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 font-medium rounded-xl cursor-not-allowed flex items-center gap-2 shadow-sm"
              >
                <Download size={18} /> Resume
              </button>
            </div>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">My Journey</h2>
          
          <div className="relative space-y-12">
            {/* Vertical Line */}
            <div className="absolute left-[28px] top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-800"></div>

            {EXPERIENCE.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex gap-8 items-start group"
              >
                {/* Logo Bubble */}
                <div className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center shrink-0 border-4 border-slate-50 dark:border-slate-950 shadow-xl bg-white overflow-hidden">
                  {item.logo ? (
                    <img src={item.logo} alt={item.company} className="w-full h-full object-contain p-1" />
                  ) : (
                    <Briefcase size={20} className="text-slate-900" />
                  )}
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-colors shadow-sm">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.role}</h3>
                      <div className="flex items-center gap-2 text-primary font-medium text-sm">
                        <span>{item.company}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-500"></span>
                        <span className="text-slate-500 dark:text-slate-400 font-normal">{item.type}</span>
                      </div>
                    </div>
                    <span className="inline-block px-3 py-1 bg-slate-50 dark:bg-slate-950 rounded-lg text-xs text-slate-500 dark:text-slate-400 font-mono border border-slate-100 dark:border-slate-800 self-start">
                      {item.period}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500 mb-4 uppercase tracking-wide">
                     <MapPin size={12} /> {item.location}
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
            
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative flex gap-8 items-start group"
              >
                <div className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center shrink-0 border-4 border-slate-50 dark:border-slate-950 shadow-xl bg-slate-700 text-white">
                  <GraduationCap size={20} />
                </div>
                 <div className="flex-1 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-colors shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">BS Computer Science</h3>
                    <div className="text-primary text-sm font-medium mb-1">University of Technology</div>
                    <span className="text-xs text-slate-500 block mb-2">2018 - 2022</span>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Graduated with a focus on Software Engineering, Data Structures, and Mobile Computing.</p>
                 </div>
              </motion.div>
          </div>
        </div>

        {/* Philosophy / What I do */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors shadow-sm">
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-primary mb-6">
                <Code2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Clean Architecture</h3>
              <p className="text-slate-600 dark:text-slate-400">
                I believe code should be as beautiful as the UI. I stick to SOLID principles and modular architecture to ensure scalability.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors shadow-sm">
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-secondary mb-6">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">User-Centric Design</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Performance means nothing if the user experience is poor. I obsess over smooth animations, accessibility, and intuitive flows.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors shadow-sm">
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-pink-400 mb-6">
                <Coffee size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Continuous Delivery</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Automated testing and CI/CD pipelines are my safety net. I ship with confidence, ensuring stability in every release.
              </p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;