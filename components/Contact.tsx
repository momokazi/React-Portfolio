import React, { useState } from 'react';
import { Send, Mail, User, MessageSquare, Briefcase } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC<any> = () => {
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
        setTimeout(() => setFormState('idle'), 3000);
      } else {
        setFormState('error');
      }
    } catch (error) {
      setFormState('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's Build Something Amazing</h2>
           <p className="text-slate-400 text-lg">
             Have a project in mind or want to hire me? Send me a message and I'll get back to you within 24 hours.
           </p>
        </div>

        <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl">
          {formState === 'success' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-slate-400">Thanks for reaching out, {PERSONAL_INFO.name.split(' ')[0]} will be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                  <div className="relative">
                    <User size={18} className="absolute left-4 top-3.5 text-slate-500" />
                    <input required name="name" type="text" className="w-full pl-12 pr-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="John Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-4 top-3.5 text-slate-500" />
                    <input required name="email" type="email" className="w-full pl-12 pr-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">I am a...</label>
                <div className="relative">
                  <Briefcase size={18} className="absolute left-4 top-3.5 text-slate-500" />
                  <select name="role" className="w-full pl-12 pr-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none">
                    <option>Technical Recruiter</option>
                    <option>Business Owner</option>
                    <option>Developer</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <div className="relative">
                  <MessageSquare size={18} className="absolute left-4 top-3.5 text-slate-500" />
                  <textarea required name="message" rows={5} className="w-full pl-12 pr-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" placeholder="Tell me about your project..."></textarea>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={formState === 'submitting'}
                className="w-full bg-primary hover:bg-opacity-90 text-white font-bold py-4 rounded-xl transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
              >
                {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                {!formState && <Send size={20} />}
              </button>
            </form>
          )}
        </div>
        
        <div className="mt-16 text-center pt-8 border-t border-slate-800 text-slate-500 text-sm">
           <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
           <p className="mt-2">Built with React, Tailwind CSS & Google Gemini</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
