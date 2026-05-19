import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Heart, Clock, Home, Shield } from 'lucide-react';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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

  const services = [
    {
      id: 1,
      title: '遛狗服务',
      subtitle: 'Dog Walking',
      description: '专业的遛狗师带您的爱宠享受户外时光，每次30分钟或60分钟，包含散步、玩耍和基本训练。',
      image: '/images/dog-walking.png',
      icon: Clock,
      features: ['30/60分钟散步', '实时GPS追踪', '照片分享', '基本服从训练'],
      color: 'from-pink to-light-pink',
      bgColor: 'bg-pink/20',
    },
    {
      id: 2,
      title: '宠物看护',
      subtitle: 'Pet Sitting',
      description: '在您外出时，我们的护理师会到您家中照顾宠物，喂食、陪伴、清理，让宠物留在熟悉的环境中。',
      image: '/images/pet-sitting.png',
      icon: Home,
      features: ['上门喂食', '陪伴玩耍', '环境清理', '健康观察'],
      color: 'from-peach to-orange',
      bgColor: 'bg-peach/20',
    },
    {
      id: 3,
      title: '宠物寄养',
      subtitle: 'Pet Boarding',
      description: '当您的宠物需要过夜照顾时，我们提供温馨的家庭式寄养服务，24小时陪伴和照顾。',
      image: '/images/pet-boarding.png',
      icon: Shield,
      features: ['家庭式环境', '24小时照顾', '每日更新', '社交互动'],
      color: 'from-mint to-light-blue',
      bgColor: 'bg-mint/20',
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-white to-lavender/30 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-pink/30 animate-float" />
      <div className="absolute bottom-20 right-10 w-16 h-16 rounded-full bg-peach/30 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full bg-mint/30 animate-float" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lavender/50 mb-6">
            <Heart className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-gray-700">我们的服务</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            为您的爱宠提供
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              专业服务
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            从日常遛狗到长期寄养，我们提供全方位的宠物护理服务，满足您和爱宠的各种需求
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className={`relative bg-white rounded-3xl overflow-hidden shadow-soft transition-all duration-500 hover:shadow-soft-lg hover:-translate-y-2 ${
                activeIndex === index ? 'ring-2 ring-offset-2 ring-pink/50' : ''
              }`}>
                {/* Image */}
                <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${service.color}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  
                  {/* Icon badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-soft">
                    <service.icon className="w-6 h-6 text-gray-700" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                    {service.subtitle}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-all">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${service.bgColor} text-gray-700`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="w-full py-3 rounded-xl bg-gray-900 text-white font-semibold flex items-center justify-center gap-2 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-all">
                    了解更多
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-gray-600 mb-4">不确定哪种服务适合您？</p>
          <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-pink to-peach text-gray-800 font-semibold hover:shadow-lg hover:scale-105 transition-all">
            免费咨询
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
