import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32"
    >
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <span className="text-[#2E7D32] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Get In Touch</span>
              <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-none mb-8">
                Let's Build <br />
                <span className="text-white/20 italic">Together.</span>
              </h1>
              <p className="text-xl text-white/60 font-light leading-relaxed mb-12 max-w-lg">
                Ready to start your project? Contact Palm Construction for a free consultation and estimate.
              </p>

              <div className="space-y-12 mb-16">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                    <Mail aria-hidden="true" className="w-5 h-5 text-[#2E7D32]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-white/40 mb-1">Email Us</p>
                    <p className="text-lg font-bold break-all">info@palmconstructionca.com</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                    <Phone aria-hidden="true" className="w-5 h-5 text-[#2E7D32]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-white/40 mb-1">Call Us</p>
                    <p className="text-lg font-bold">+15626252600</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin aria-hidden="true" className="w-5 h-5 text-[#2E7D32]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-white/40 mb-1">Head Office</p>
                    <p className="text-lg font-bold">1730 W Cameron Ave #200, West Covina, CA 91790</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="glass p-8 border border-white/5">
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Service Areas</h4>
                  <p className="text-white/40 text-xs leading-relaxed">
                    San Diego, Los Angeles & Bay Area, CA<br />
                    Sydney NSW 2000
                  </p>
                </div>
                <div className="glass p-8 border border-white/5">
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Brisbane Office</h4>
                  <p className="text-white/40 text-xs leading-relaxed">
                    <br />
                    Brisbane QLD 4000
                  </p>
                </div>
              </div>
            </div>

            <div className="glass p-6 md:p-12 border border-white/5 overflow-hidden">
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-8 italic">Get a Free Quote</h3>
              <form className="space-y-6" aria-label="Submit Request for Proposal">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-[10px] uppercase font-bold text-white/40 ml-1">Full Name</label>
                    <input id="fullName" name="fullName" type="text" className="w-full bg-white/5 border border-white/10 p-4 focus:border-[#2E7D32] outline-none transition-all text-sm focus-visible:ring-2 focus-visible:ring-[#2E7D32] rounded-sm" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="emailAddress" className="text-[10px] uppercase font-bold text-white/40 ml-1">Email Address</label>
                    <input id="emailAddress" name="emailAddress" type="email" className="w-full bg-white/5 border border-white/10 p-4 focus:border-[#2E7D32] outline-none transition-all text-sm focus-visible:ring-2 focus-visible:ring-[#2E7D32] rounded-sm" placeholder="john@company.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="companyName" className="text-[10px] uppercase font-bold text-white/40 ml-1">Company Name</label>
                  <input id="companyName" name="companyName" type="text" className="w-full bg-white/5 border border-white/10 p-4 focus:border-[#2E7D32] outline-none transition-all text-sm focus-visible:ring-2 focus-visible:ring-[#2E7D32] rounded-sm" placeholder="Global Real Estate Partners" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="projectType" className="text-[10px] uppercase font-bold text-white/40 ml-1">Project Type</label>
                  <select id="projectType" name="projectType" className="w-full bg-white/5 border border-white/10 p-4 focus:border-[#2E7D32] outline-none transition-all text-sm appearance-none focus-visible:ring-2 focus-visible:ring-[#2E7D32] rounded-sm cursor-pointer">
                    <option className="bg-[#050505]">Industrial Construction</option>
                    <option className="bg-[#050505]">Commercial Development</option>
                    <option className="bg-[#050505]">Infrastructure</option>
                    <option className="bg-[#050505]">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] uppercase font-bold text-white/40 ml-1">Message / Project Brief</label>
                  <textarea id="message" name="message" rows={6} className="w-full bg-white/5 border border-white/10 p-4 focus:border-[#2E7D32] outline-none transition-all text-sm resize-none focus-visible:ring-2 focus-visible:ring-[#2E7D32] rounded-sm" placeholder="Tell us about your project requirements..."></textarea>
                </div>
                <button type="submit" className="w-full py-6 bg-[#2E7D32] text-black font-bold uppercase tracking-widest hover:scale-[1.02] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm">
                  Get a Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[500px] w-full grayscale contrast-125 brightness-75 border-y border-white/10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153166!3d-37.816279742021234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1625123456789!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Office Location"
        ></iframe>
      </section>
    </motion.div>
  );
};

export default Contact;
