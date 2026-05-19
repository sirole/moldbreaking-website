import { useEffect, useRef, useState } from 'react';
import { Check, Heart, Sparkles, Zap } from 'lucide-react';

const Pricing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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

  const pricingPlans = [
    {
      id: 1,
      name: '单次遛狗',
      subtitle: 'Singular walks (30 min)',
      price: '¥30',
      period: '/次',
      description: '只想试试我们的服务',
      features: [
        '30分钟专业遛狗',
        '实时GPS追踪',
        '3张照片分享',
        '基础健康观察',
      ],
      icon: Zap,
      color: 'from-pink to-light-pink',
      bgColor: 'bg-pink/10',
      popular: false,
    },
    {
      id: 2,
      name: '每周两次',
      subtitle: 'Twice a week',
      price: '¥224',
      period: '/月',
      description: '每次仅需 ¥28',
      features: [
        '每周2次遛狗服务',
        '每次30分钟',
        '实时GPS追踪',
        '无限照片分享',
        '详细活动报告',
        '优先预约',
      ],
      icon: Heart,
      color: 'from-peach to-orange',
      bgColor: 'bg-peach/10',
      popular: true,
    },
    {
      id: 3,
      name: '每周三次',
      subtitle: 'Three times a week',
      price: '¥312',
      period: '/月',
      description: '每次仅需 ¥26',
      features: [
        '每周3次遛狗服务',
        '每次30分钟',
        '实时GPS追踪',
        '无限照片分享',
        '详细活动报告',
        'VIP优先预约',
        '专属护理师',
      ],
      icon: Sparkles,
      color: 'from-mint to-light-blue',
      bgColor: 'bg-mint/10',
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-pink/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-mint/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mint/30 mb-6">
            <Heart className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-gray-700">透明定价</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            遛狗服务
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
              价格方案
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            选择最适合您和宠物的方案，所有价格透明公开，无隐藏费用
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(plan.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="px-4 py-1 rounded-full bg-gradient-to-r from-orange to-pink text-white text-sm font-bold shadow-lg flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    最受欢迎
                  </div>
                </div>
              )}

              <div
                className={`relative h-full bg-white rounded-3xl overflow-hidden transition-all duration-500 ${
                  plan.popular
                    ? 'shadow-soft-lg ring-2 ring-orange/30'
                    : 'shadow-soft hover:shadow-soft-lg'
                } ${hoveredCard === plan.id ? '-translate-y-2' : ''}`}
              >
                {/* Header gradient */}
                <div className={`h-2 bg-gradient-to-r ${plan.color}`} />

                <div className="p-8">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${plan.bgColor} flex items-center justify-center`}>
                      <plan.icon className={`w-7 h-7 text-transparent bg-clip-text bg-gradient-to-r ${plan.color}`} style={{ color: plan.popular ? '#f97316' : undefined }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                      <p className="text-sm text-gray-500">{plan.subtitle}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-500">{plan.period}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full ${plan.bgColor} flex items-center justify-center flex-shrink-0`}>
                          <Check className={`w-3 h-3 ${plan.popular ? 'text-orange' : 'text-green-600'}`} />
                        </div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange to-pink text-white hover:shadow-lg hover:scale-105'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    选择方案
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-gray-500 text-sm">
            所有方案均可随时取消或更改 • 首次体验享受 8 折优惠
          </p>
        </div>

        {/* Image */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-pink via-peach to-mint rounded-3xl blur-2xl opacity-20" />
            <img
              src="/images/pricing.png"
              alt="定价"
              className="relative rounded-3xl max-w-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
