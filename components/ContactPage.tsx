import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';
import { Send, Mail, User, MessageSquare, Briefcase, MapPin, Github, Linkedin, Clock, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/xlgwjrkk", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        setFormState('success');
        form.reset();
        // Reset state after 5 seconds to allow sending another message if needed
        setTimeout(() => setFormState('idle'), 5000);
      } else {
        setFormState('error');
      }
    } catch (error) {
      setFormState('error');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-24 transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">Get In Touch</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Whether you have a question, a project proposition, or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column: Contact Info & FAQ */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Contact Card */}
            <div className="bg-white dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">Email Me</p>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-700 dark:text-white hover:text-primary dark:hover:text-primary transition-colors text-lg">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-secondary shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">Location</p>
                    <p className="text-slate-700 dark:text-white text-lg">{PERSONAL_INFO.location}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex gap-4">
                  <SocialButton href={PERSONAL_INFO.github} icon={<Github size={20} />} label="GitHub" />
                  <SocialButton href={PERSONAL_INFO.linkedin} icon={<Linkedin size={20} />} label="LinkedIn" />
                </div>
              </div>
            </div>

            {/* Response Time / Expectations */}
            <div className="bg-white dark:bg-slate-900/30 p-8 rounded-3xl border border-slate-200 dark:border-slate-800/50 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Clock size={18} className="text-primary" /> What happens next?
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-3 text-slate-600 dark:text-slate-400 text-sm">
                  <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                  <span>I usually respond within 24-48 hours.</span>
                </li>
                <li className="flex gap-3 text-slate-600 dark:text-slate-400 text-sm">
                  <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                  <span>For urgent matters, please mention "Urgent" in the subject/message.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl relative overflow-hidden">
              
              {formState === 'success' ? (
                <div className="h-[500px] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-500 rounded-full flex items-center justify-center mb-6">
                    <Send size={48} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Message Sent!</h3>
                  <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-8">
                    Thank you for reaching out. I have received your message and will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="px-8 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-xl transition-colors font-medium"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                      <div className="relative group">
                        <User size={18} className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500 group-focus-within:text-primary transition-colors" />
                        <input 
                          required 
                          name="name" 
                          type="text" 
                          className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder-slate-400 dark:placeholder-slate-600" 
                          placeholder="John Doe" 
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                      <div className="relative group">
                        <Mail size={18} className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500 group-focus-within:text-primary transition-colors" />
                        <input 
                          required 
                          name="email" 
                          type="email" 
                          className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder-slate-400 dark:placeholder-slate-600" 
                          placeholder="john@example.com" 
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject / Role</label>
                    <div className="relative group">
                      <Briefcase size={18} className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500 group-focus-within:text-primary transition-colors" />
                      <select 
                        name="role" 
                        className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option>Project Inquiry</option>
                        <option>Job Opportunity</option>
                        <option>Freelance Work</option>
                        <option>Just saying hi</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                    <div className="relative group">
                      <MessageSquare size={18} className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500 group-focus-within:text-primary transition-colors" />
                      <textarea 
                        required 
                        name="message" 
                        rows={6} 
                        className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none placeholder-slate-400 dark:placeholder-slate-600" 
                        placeholder="Tell me a bit about your project, timeline, and budget..."
                      ></textarea>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formState === 'submitting'}
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-bold py-4 rounded-xl transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formState === 'submitting' ? (
                      <span className="flex items-center gap-2">Sending...</span>
                    ) : (
                      <>
                        Send Message <Send size={20} />
                      </>
                    )}
                  </button>
                  
                  {formState === 'error' && (
                    <div className="text-center text-red-400 text-sm mt-2">
                      Something went wrong. Please try again or email me directly.
                    </div>
                  )}
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

const SocialButton: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-600 transition-all group"
  >
    <span className="group-hover:scale-110 transition-transform duration-300">{icon}</span>
    <span className="font-medium">{label}</span>
  </a>
);

export default ContactPage;