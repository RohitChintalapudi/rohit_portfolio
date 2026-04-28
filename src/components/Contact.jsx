import React from 'react';
import { Mail, MapPin, Phone, ExternalLink, User } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative bg-[var(--bg-primary)]">
      <div className="container mx-auto px-6 md:px-12">
        
        <AnimatedSection direction="up" effect="scale" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-primary)]">
            Get In <span className="text-[var(--color-brand-orange)] text-glow">Touch</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-sm md:text-base max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Contact Information */}
          <AnimatedSection direction="left" effect="blur" className="glass p-8 md:p-12 rounded-3xl border border-[var(--border-color)] box-glow relative overflow-hidden">
            {/* Decorative blur */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[var(--color-brand-orange)] rounded-full blur-[100px] opacity-20"></div>
            
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8 relative z-10">Contact Information</h3>
            
            <ul className="flex flex-col gap-8 relative z-10">
              <li className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--color-brand-orange)] border border-[var(--border-color)] group-hover:scale-110 group-hover:border-[var(--color-brand-orange)] transition-all">
                  <User size={24} />
                </div>
                <div>
                  <p className="text-[var(--text-secondary)] text-sm mb-1">Name</p>
                  <p className="text-[var(--text-primary)] font-medium text-lg">Rohit Chintalapudi</p>
                </div>
              </li>
              
              <li className="flex items-center gap-6 group">
                <div className="w-14 h-14 shrink-0 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--color-brand-orange)] border border-[var(--border-color)] group-hover:scale-110 group-hover:border-[var(--color-brand-orange)] transition-all">
                  <Mail size={24} />
                </div>
                <div className="min-w-0">
                  <p className="text-[var(--text-secondary)] text-sm mb-1">Email</p>
                  <a href="mailto:rohit.chintalapudi.work@gmail.com" className="text-[var(--text-primary)] font-medium text-[15px] sm:text-sm md:text-lg hover:text-[var(--color-brand-orange)] transition-colors whitespace-nowrap tracking-tight sm:tracking-normal">
                    rohit.chintalapudi.work@gmail.com
                  </a>
                </div>
              </li>
              
              <li className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--color-brand-orange)] border border-[var(--border-color)] group-hover:scale-110 group-hover:border-[var(--color-brand-orange)] transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[var(--text-secondary)] text-sm mb-1">Phone</p>
                  <p className="text-[var(--text-primary)] font-medium text-lg">+91 7993390572</p>
                </div>
              </li>

              <li className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--color-brand-orange)] border border-[var(--border-color)] group-hover:scale-110 group-hover:border-[var(--color-brand-orange)] transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[var(--text-secondary)] text-sm mb-1">Location</p>
                  <p className="text-[var(--text-primary)] font-medium text-lg">Kondapalle, Andhra Pradesh, India</p>
                </div>
              </li>
            </ul>
          </AnimatedSection>

          {/* Social Links & CTA */}
          <AnimatedSection direction="right" effect="blur" className="flex flex-col justify-center h-full gap-10">
            <div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Connect with me</h3>
              <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                I am highly active on professional networks and coding platforms. Let's connect, collaborate, and build something amazing together!
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/RohitChintalapudi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 rounded-full glass hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] text-[var(--text-primary)] font-medium transition-all active:scale-95">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  GitHub
                </a>
                
                <a href="https://www.linkedin.com/in/rohit-chintalapudi-5454ba36a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 rounded-full glass hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] text-[var(--text-primary)] font-medium transition-all active:scale-95">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  LinkedIn
                </a>

                <a href="https://leetcode.com/u/chintalapudi_rohit/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 rounded-full glass hover:bg-[#FFA116] hover:text-white hover:border-[#FFA116] text-[var(--text-primary)] font-medium transition-all active:scale-95">
                  <svg role="img" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125 2.513 5.277 5.277 0 0 0 1.062 2.318 5.31 5.31 0 0 0 2.238 1.487l8.918 3.082a1.405 1.405 0 0 0 1.761-1.396 1.405 1.405 0 0 0-1.405-1.405l-8.484-2.923a3.504 3.504 0 0 1-1.89-1.503 3.52 3.52 0 0 1-.303-2.617 3.541 3.541 0 0 1 1.434-1.92l3.414-3.666 5.166-5.545a1.385 1.385 0 0 0-.356-2.128A1.37 1.37 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                  </svg>
                  LeetCode
                </a>
                
                <a href="https://www.codechef.com/users/rohit2912" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 rounded-full glass hover:bg-[#5B4638] hover:text-white hover:border-[#5B4638] text-[var(--text-primary)] font-medium transition-all active:scale-95">
                  <ExternalLink size={20} />
                  CodeChef
                </a>
              </div>
            </div>

            <div className="bg-[var(--color-brand-orange)]/10 p-8 rounded-3xl border border-[var(--color-brand-orange)]/20 box-glow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand-orange)] rounded-full blur-[60px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
              <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2 relative z-10">Have an Awesome Project Idea?</h4>
              <p className="text-[var(--text-secondary)] mb-6 relative z-10">Let's discuss how we can bring it to life.</p>
              <a 
                href="mailto:rohit.chintalapudi.work@gmail.com" 
                className="inline-flex justify-center items-center gap-2 px-8 py-3 rounded-full bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-dark)] text-white font-bold transition-all box-glow transform hover:-translate-y-1 active:scale-95 relative z-10"
              >
                Start a Conversation <Mail size={18} />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
