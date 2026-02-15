import React from 'react';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';
import { Smartphone, Server, Terminal, CheckCircle2, Zap, Layout, Database, GitBranch } from 'lucide-react';

const SkillsPage: React.FC = () => {
  const categories = [
    { id: "Mobile & Frontend", icon: <Layout size={24} />, description: "Crafting pixel-perfect, performant user interfaces." },
    { id: "Backend & Cloud", icon: <Server size={24} />, description: "Building scalable APIs and serverless architectures." },
    { id: "Tools & DevOps", icon: <Terminal size={24} />, description: "Streamlining development workflows and deployment." }
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-32 pb-24">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Technical Expertise</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A deep dive into the technologies, frameworks, and tools I use to bring ideas to life.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-12">
          {categories.map((category, catIndex) => {
            const categorySkills = SKILLS.filter(s => s.category === category.id);
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                className="bg-slate-900/50 rounded-3xl border border-slate-800 p-8 md:p-12"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-slate-800 rounded-xl text-primary">
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{category.id}</h2>
                    <p className="text-slate-400 text-sm">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySkills.map((skill, index) => (
                    <div 
                      key={skill.name}
                      className="bg-slate-950 p-6 rounded-2xl border border-slate-800/50 hover:border-slate-700 transition-colors group flex items-start gap-4"
                    >
                      <div className="w-12 h-12 shrink-0 bg-white rounded-lg p-2 flex items-center justify-center shadow-lg">
                        {skill.imagePath ? (
                          <img src={skill.imagePath} alt={skill.name} className="w-full h-full object-contain" />
                        ) : (
                          <Zap size={24} className="text-slate-900" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-bold text-white text-lg">{skill.name}</h3>
                          <span className="text-xs font-mono text-slate-500">{skill.level}%</span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-3">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full bg-gradient-to-r from-primary to-secondary"
                          />
                        </div>

                        {/* Proficiency Tag */}
                        <div className="flex items-center gap-1.5 text-xs text-slate-400">
                           <CheckCircle2 size={12} className="text-green-500" />
                           {skill.level > 90 ? 'Expert' : skill.level > 80 ? 'Advanced' : 'Intermediate'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info / CTA */}
        <div className="mt-20 p-8 md:p-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl border border-primary/20 text-center">
           <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
           <p className="text-slate-400 max-w-2xl mx-auto mb-8">
             Technology moves fast, and so do I. I'm currently expanding my knowledge in 
             <span className="text-white font-medium"> Generative AI</span>, 
             <span className="text-white font-medium"> Rust</span>, and 
             <span className="text-white font-medium"> Advanced System Design</span>.
           </p>
           <a 
             href="https://github.com/momokazi" 
             target="_blank"
             className="inline-flex items-center gap-2 px-6 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white hover:bg-slate-900 transition-colors"
           >
             <GitBranch size={18} />
             Check out my code on GitHub
           </a>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;