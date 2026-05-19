import { useEffect, useRef, useState } from 'react';
import { FileText, Phone, Users, Award, Heart } from 'lucide-react';

const HowItWorks = () => {
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

  const steps = [
    {
      number: '01',
      title: '填写表格',
      subtitle: 'Fill out the form',
      description: '填写您和宠物的基本信息，上传照片，成为我们的会员。',
      icon: FileText,
      color: 'bg-pink',
      iconColor: 'text-pink-600',
    },
    {
      number: '02',
      title: '与您联系',
      subtitle: 'You are being contacted',
      description: '根据您的位置和需求，我们会推荐附近的优质护理师。',
      icon: Phone,
      color: 'bg-peach',
      iconColor: 'text-orange-600',
    },
    {
      number: '03',
      title: '初次见面',
      subtitle: 'First meeting',
      description: '安排"欢迎汪"见面会，让宠物和护理师相互熟悉。',
      icon: Users,
      color: 'bg-mint',
      iconColor: 'text-green-600',
    },
    {
      number: '04',
      title: '享受优质服务',
      subtitle: 'You receive quality service',
      description: '开始享受专业的宠物护理服务，实时接收更新和照片。',
      icon: Award,
      color: 'bg-light-blue',
      iconColor: 'text-blue-600',
    },
  ];

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-pink/10 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-mint/10 blur-3xl" />
      </div>

      {/* SVG Path */}
      <svg
        className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 hidden lg:block"
        viewBox="0 0 1200 100"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 50 Q150 0, 300 50 T600 50 T900 50 T1200 50"
          stroke="#f6e7ef"
          strokeWidth="3"
          strokeDasharray="10 10"
          fill="none"
          className={`transition-all duration-2000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{
            strokeDashoffset: isVisible ? 0 : 1000,
            transition: 'stroke-dashoffset 2s ease-out',
          }}
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-peach/30 mb-6">
            <Heart className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-gray-700">服务流程</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            工作原理？
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            只需简单几步，即可为您的爱宠预约专业护理服务
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className="group relative bg-white rounded-3xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                {/* Number badge */}
                <div className={`absolute -top-4 -left-2 w-12 h-12 rounded-2xl ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform`}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${step.color}/20 flex items-center justify-center mb-4 mt-4 group-hover:scale-110 transition-transform`}>
                  <step.icon className={`w-8 h-8 ${step.iconColor}`} />
                </div>

                {/* Content */}
                <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                  {step.subtitle}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Connector arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 rounded-full bg-white shadow-soft flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Image */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-pink via-peach to-mint rounded-3xl blur-2xl opacity-30" />
            <img
              src="/images/how-it-works.png"
              alt="工作流程"
              className="relative rounded-3xl shadow-soft-lg max-w-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
