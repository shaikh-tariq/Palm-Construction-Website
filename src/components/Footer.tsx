import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] pt-32 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <img src="/logo.png" alt="Palm Construction Logo" className="h-12 object-contain" />
            </div>
            <p className="text-white/40 font-light leading-relaxed mb-8">
              Palm Construction Inc. is a licensed and insured home remodeling company proudly serving California homeowners with over five years of hands-on experi...
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-[#2E7D32]">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Our Services', href: '/services' },
                { name: 'Projects', href: '/projects' },
                { name: 'Contact', href: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-white/40 hover:text-white transition-colors text-sm uppercase tracking-widest">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-[#2E7D32]">Our Offices</h4>
            <ul className="space-y-8">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-white/20 shrink-0" />
                <div>
                  <p className="text-sm font-bold uppercase mb-1">West Covina HQ</p>
                  <p className="text-xs text-white/40 leading-relaxed">1730 W Cameron Ave #200, West Covina, CA 91790</p>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-white/20 shrink-0" />
                <div>
                  <p className="text-sm font-bold uppercase mb-1">Service Areas</p>
                  <p className="text-xs text-white/40 leading-relaxed">San Diego, Los Angeles & Bay Area, CA</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-[#2E7D32]">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-white/20" />
                <span className="text-sm font-bold uppercase tracking-widest">+1 (562) 625-2600</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-white/20" />
                <span className="text-sm font-bold tracking-widest">info@palmconstructionca.com</span>
              </li>
              <li className="pt-4">
                <Link to="/contact" className="block w-full py-4 glass text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all text-center">
                  Get a Free Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-white/20 uppercase tracking-[0.2em]">
            © 2026 Palm Construction. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a key={item} href="#" className="text-[10px] text-white/20 hover:text-white uppercase tracking-[0.2em] transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
