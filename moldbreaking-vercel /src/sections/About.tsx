import { useEffect, useRef, useState } from 'react';
import { Check, Heart, Shield, Star } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const features = [
    {
      icon: Heart,
      title: '个性化护理',
      description: '根据每只宠物的独特需求，提供量身定制的护理方案',
      color: 'bg-light-pink',
      iconColor: 'text-pink-500',
    },
    {
      icon: Shield,
      title: '值得信赖的专业人士',
      description: '所有护理师都经过严格筛选和专业培训，持证上岗',
      color: 'bg-light-blue',
      iconColor: 'text-blue-500',
    },
    {
      icon: Star,
      title: '内心的平静',
      description: '实时更新和照片分享，让您随时了解爱宠的状况',
      color: 'bg-mint',
      iconColor: 'text-green-600',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-pink/20 blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-mint/20 blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl bg-pink/40 rotate-12" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-peach/40" />
              
              {/* Main image */}
              <div className="relative bg-gradient-to-br from-lavender to-pink rounded-3xl p-8 overflow-hidden">
                <img
                  src="/images/about-us.png"
                  alt="关于我们"
                  className="w-full h-auto relative z-10"
                />
                
                {/* Floating badge */}
                <div className="absolute bottom-8 right-8 bg-white rounded-2xl px-6 py-4 shadow-soft z-20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange to-peach flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white fill-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">5+</div>
                      <div className="text-sm text-gray-500">年经验</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mint/50 mb-6">
              <Heart className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-gray-700">关于我们</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              我们是一支由
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-pink">
                热爱动物
              </span>
              的护理师组成的团队
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              PetCare 成立于 2019 年，我们的使命是为每一位宠物主人提供安心、
              便捷的宠物护理服务。我们相信，每只宠物都值得最好的照顾，
              就像它们是我们家庭的一员一样。
            </p>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex items-start gap-4 p-4 rounded-2xl transition-all duration-500 hover:shadow-soft cursor-pointer group ${feature.color}/30`}
                  style={{
                    transitionDelay: `${300 + index * 100}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  }}
                >
                  <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
