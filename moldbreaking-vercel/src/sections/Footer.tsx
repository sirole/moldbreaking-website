import { useEffect, useRef, useState } from 'react';
import { Heart, Phone, Mail, MapPin, Instagram, MessageCircle, Send } from 'lucide-react';

const Footer = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const quickLinks = [
    { name: '定价方案', href: '#pricing' },
    { name: '关于我们', href: '#about' },
    { name: '服务项目', href: '#services' },
    { name: '客户评价', href: '#testimonials' },
  ];

  const supportLinks = [
    { name: '常见问题', href: '#' },
    { name: '隐私政策', href: '#' },
    { name: '服务条款', href: '#' },
    { name: '联系我们', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    if (href === '#') return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="contact"
      ref={sectionRef}
      className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden"
    >
      {/* CTA Section */}
      <div className="section-padding pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`relative bg-gradient-to-r from-pink/20 via-peach/20 to-mint/20 rounded-3xl p-8 sm:p-12 mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  分享您对
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink to-orange">
                    宠物的爱
                  </span>
                </h2>
                <p className="text-gray-300 mb-6">
                  订阅我们的通讯，获取宠物护理技巧、优惠活动和最新资讯
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                  <span className="text-gray-400">@PetCare</span>
                </div>
              </div>

              <div>
                <form onSubmit={handleSubmit} className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="输入您的邮箱地址"
                    className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink/50 pr-14"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-pink to-orange flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
                {isSubmitted && (
                  <p className="text-green-400 text-sm mt-2">感谢订阅！</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="section-padding pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div
              className={`transition-all duration-1000 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink to-peach flex items-center justify-center">
                  <Heart className="w-5 h-5 text-gray-800 fill-current" />
                </div>
                <span className="font-bold text-xl">PetCare</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                您值得信赖的家庭宠物护理伙伴。我们提供专业、贴心的宠物护理服务，让您的爱宠在您不在时也能感受到家的温暖。
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>北京市朝阳区</span>
              </div>
            </div>

            {/* Quick Links */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="font-bold text-lg mb-6">快速链接</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="font-bold text-lg mb-6">帮助支持</h3>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div
              className={`transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="font-bold text-lg mb-6">联系我们</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-pink" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">电话</div>
                    <div className="text-sm">400-888-9999</div>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-peach" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">邮箱</div>
                    <div className="text-sm">hello@petcare.com</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Dog Image */}
          <div
            className={`text-center mb-12 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <img
              src="/images/footer-dogs.png"
              alt="可爱的狗狗"
              className="max-w-md mx-auto opacity-80"
            />
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 PetCare. 保留所有权利。
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>用</span>
              <Heart className="w-4 h-4 text-pink fill-pink" />
              <span>为宠物服务</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
