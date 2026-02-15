import React from 'react';
import { SKILLS } from '../constants';
import { Smartphone, Code, Server, Database, GitBranch, Terminal, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Skills: React.FC = () => {
  // Helper to get Icon if image is missing
  const getIcon = (iconStr: string) => {
    switch(iconStr) {
      case 'Smartphone': return <Smartphone size={24} />;
      case 'Code': return <Code size={24} />;
      case 'Server': return <Server size={24} />;
      case 'Database': return <Database size={24} />;
      case 'GitBranch': return <GitBranch size={24} />;
      default: return <Terminal size={24} />;
    }
  };

  return (
    <section id="skills" className="py-32 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="text-center md:text-left">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Stack</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Technical Arsenal</h2>
            <p className="text-slate-400 max-w-2xl text-lg">
              I leverage a modern tech stack to build robust, scalable, and beautiful applications.
            </p>
          </div>
          <Link 
            to="/skills" 
            className="hidden md:flex px-6 py-3 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white rounded-xl transition-colors items-center gap-2 font-medium"
          >
            View Full Skillset <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-slate-600 hover:bg-slate-900 transition-all group flex flex-col items-center justify-center text-center h-48"
            >
              <div 
                className="w-16 h-16 mb-4 flex items-center justify-center rounded-xl bg-slate-950 shadow-inner p-3 transition-transform group-hover:scale-110 duration-300"
              >
                {skill.imagePath ? (
                  <img src={skill.imagePath} alt={skill.name} className="w-full h-full object-contain" />
                ) : (
                  <div style={{ color: skill.color }}>{getIcon(skill.iconStr)}</div>
                )}
              </div>
              
              <h3 className="text-white font-bold text-lg mb-1">{skill.name}</h3>
              <p className="text-slate-500 text-sm font-medium">{skill.category.split('&')[0].trim()}</p>
              
              {/* Proficiency Bar */}
              <div className="w-full h-1 bg-slate-800 rounded-full mt-4 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 group-hover:opacity-100 opacity-70"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <Link to="/skills" className="inline-flex px-8 py-4 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white rounded-xl transition-colors items-center gap-2 font-medium">
            View Full Skillset <ArrowRight size={18} />
           </Link>
        </div>
      </div>
    </section>
  );
};

export default Skills;