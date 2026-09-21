import React from 'react';
import { Mail, MapPin, Phone, User } from 'lucide-react';
import { SiGithub, SiLeetcode, SiCodechef } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
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
          <AnimatedSection direction="left" effect="blur" className="glass p-8 md:p-12 rounded-3xl border border-[var(--border-color)] relative overflow-hidden">
            {/* Decorative blur */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[var(--color-brand-orange)] rounded-full blur-[100px] opacity-10"></div>
            
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
              
              {/* 4 Social Platforms with authentic original brand colors */}
              <div className="flex flex-wrap gap-4">
                {/* GitHub */}
                <a
                  href="https://github.com/RohitChintalapudi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-3 rounded-full bg-[#181717]/90 hover:bg-[#24292e] text-white border border-white/20 hover:border-white shadow-[0_0_15px_rgba(255,255,255,0.08)] hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] font-medium transition-all active:scale-95"
                >
                  <SiGithub className="text-xl text-white group-hover:scale-110 transition-transform" />
                  <span>GitHub</span>
                </a>
                
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/rohit-chintalapudi-5454ba36a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-3 rounded-full bg-[#0A66C2]/15 hover:bg-[#0A66C2] text-white border border-[#0A66C2]/40 hover:border-[#0A66C2] shadow-[0_0_15px_rgba(10,102,194,0.2)] hover:shadow-[0_0_25px_rgba(10,102,194,0.5)] font-medium transition-all active:scale-95"
                >
                  <FaLinkedin className="text-xl text-[#0A66C2] group-hover:text-white group-hover:scale-110 transition-all" />
                  <span>LinkedIn</span>
                </a>

                {/* LeetCode */}
                <a
                  href="https://leetcode.com/u/chintalapudi_rohit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-3 rounded-full bg-[#FFA116]/15 hover:bg-[#FFA116] text-white hover:text-black border border-[#FFA116]/40 hover:border-[#FFA116] shadow-[0_0_15px_rgba(255,161,22,0.2)] hover:shadow-[0_0_25px_rgba(255,161,22,0.5)] font-medium transition-all active:scale-95"
                >
                  <SiLeetcode className="text-xl text-[#FFA116] group-hover:text-black group-hover:scale-110 transition-all" />
                  <span>LeetCode</span>
                </a>
                
                {/* CodeChef */}
                <a
                  href="https://www.codechef.com/users/rohit2912"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-3 rounded-full bg-[#5B4638]/25 hover:bg-[#5B4638] text-white border border-[#93582A]/50 hover:border-[#D16B38] shadow-[0_0_15px_rgba(91,70,56,0.25)] hover:shadow-[0_0_25px_rgba(147,88,42,0.5)] font-medium transition-all active:scale-95"
                >
                  <SiCodechef className="text-xl text-[#D16B38] group-hover:text-white group-hover:scale-110 transition-all" />
                  <span>CodeChef</span>
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-black p-8 rounded-3xl border border-[var(--color-brand-orange)]/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--color-brand-orange)] rounded-full blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
              <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2 relative z-10">Have an Awesome Project Idea?</h4>
              <p className="text-[var(--text-secondary)] mb-6 relative z-10">Let's discuss how we can bring it to life.</p>
              <a 
                href="mailto:rohit.chintalapudi.work@gmail.com" 
                className="inline-flex justify-center items-center gap-2 px-8 py-3 rounded-full bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-dark)] text-white font-bold transition-all transform hover:-translate-y-1 active:scale-95 relative z-10"
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
