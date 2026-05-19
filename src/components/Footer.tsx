import { Link } from 'react-router-dom';
import { ArrowUpRight, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

// TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  const footerLinks = {
    services: [
      { name: 'BRANDS', href: '/brands' },
      { name: 'CREATORS', href: '/creators' },
      { name: 'GROWTH via AI', href: '/ai' },
    ],
    company: [
      { name: 'NEWS', href: '/news' },
      { name: 'ABOUT', href: '/about' },
      { name: 'CAREER', href: '/careers' },
      { name: 'お問い合せ', href: '/contact' },
    ],
    legal: [
      { name: 'プライバシーポリシー', href: '/privacy-policy' },
      { name: '利用規約', href: '/terms-of-service' },
      { name: 'クッキーポリシー', href: '/cookie-policy' },
    ],
  };

  const socialLinks = [
    { icon: TikTokIcon, href: 'https://www.tiktok.com/@joshinoasami', label: 'TikTok' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/10476549/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hey@moldbreaking.com', label: 'Email' },
  ];

  return (
    <footer className="bg-dark relative overflow-hidden border-t border-white/5">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/[0.03] rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                  <img 
                    src="/MB_logo_yl.png" 
                    alt="MoldBreaking" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-yellow to-brand-gold blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
              </motion.div>
              <span className="font-bold text-lg text-white tracking-tight">MoldBreaking</span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6 max-w-sm">
              An emotional tech company.<br />
              データで"売れる"を再現し、成約の最短ルートをつくる。
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-brand-yellow/10 hover:text-brand-yellow transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">サービス</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-zinc-500 hover:text-brand-yellow transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">会社</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-zinc-500 hover:text-brand-yellow transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">法的情報</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-zinc-500 hover:text-brand-yellow transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">
            COPYRIGHT (©) 2014-2026 MoldBreaking ALL RIGHTS RESERVED.
          </p>
          <motion.p 
            className="text-zinc-600 text-sm flex items-center gap-2"
            whileHover={{ color: '#FFE225' }}
          >
            <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
            Growth via AI
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
