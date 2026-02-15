import React from 'react';
import { PROJECTS } from '../constants';
import { Github, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  // Show only first 4 projects as featured
  const featuredProjects = PROJECTS.slice(0, 4);

  return (
    <section id="projects" className="py-32 bg-slate-100/50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Featured Work</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
              Highlights from my journey in mobile and backend development.
            </p>
          </div>
          <Link to="/projects" className="px-6 py-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-xl transition-colors flex items-center gap-2 font-medium shadow-sm border border-slate-200 dark:border-slate-700">
            View All Projects <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="group bg-white dark:bg-slate-950 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-primary/20 dark:hover:border-slate-600 hover:shadow-2xl hover:shadow-primary/10 flex flex-col md:flex-row h-full transition-colors transition-shadow duration-300"
              >
                {/* Logo Side / Color Strip */}
                <div className="w-full md:w-24 bg-slate-50 dark:bg-slate-900 flex md:flex-col items-center justify-between p-6 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 shrink-0">
                   <div 
                     className="w-12 h-12 rounded-xl flex items-center justify-center bg-white p-1 shadow-md border border-slate-100 dark:border-transparent"
                   >
                     <img src={project.logoUrl} alt={project.title} className="w-full h-full object-contain rounded-lg" />
                   </div>
                   <div className="hidden md:block w-px h-12 bg-slate-300 dark:bg-slate-800 my-4"></div>
                   <div className="text-slate-400 dark:text-slate-600 md:vertical-writing-mode text-xs font-bold tracking-widest uppercase">
                      {project.category}
                   </div>
                </div>

                {/* Content Side */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">{project.subtitle}</p>
                    </div>
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" className="p-2 bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-white rounded-lg transition-colors border border-slate-200 dark:border-slate-800 hover:border-primary/30 dark:hover:border-slate-600">
                          <Github size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1 leading-relaxed line-clamp-3">
                    {project.overview}
                  </p>

                  <div className="pt-6 border-t border-slate-100 dark:border-slate-900 mt-auto">
                     <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span 
                          key={tech} 
                          className="text-xs font-medium px-3 py-1.5 bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-800 group-hover:border-slate-300 dark:group-hover:border-slate-700 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <Link to="/projects" className="inline-flex px-8 py-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-xl transition-colors items-center gap-2 font-medium shadow-sm border border-slate-200 dark:border-slate-700">
            View Full Gallery <ArrowRight size={18} />
           </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;