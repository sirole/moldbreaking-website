import { useEffect, useRef, useState } from 'react';
import { Star, Heart, Quote } from 'lucide-react';

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

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

  const testimonials = [
    {
      id: 1,
      name: '王小明',
      avatar: 'W',
      rating: 5,
      text: '我最近使用了遛狗服务，非常满意！护理师很专业，我的狗狗看起来很开心。每天都会收到照片和更新，让我感到很安心。',
      pet: '金毛 - 豆豆',
      color: 'bg-pink',
    },
    {
      id: 2,
      name: '李美丽',
      avatar: 'L',
      rating: 5,
      text: '太棒了！出差一周，宠物寄养服务让我的猫咪得到了很好的照顾。护理师每天发照片，还陪它玩耍。强烈推荐！',
      pet: '英短 - 咪咪',
      color: 'bg-peach',
    },
    {
      id: 3,
      name: '张大力',
      avatar: 'Z',
      rating: 5,
      text: '宠物看护服务真的很贴心。护理师准时上门，喂食、清理、陪玩都很专业。价格也很合理，会继续使用！',
      pet: '柯基 - 旺财',
      color: 'bg-mint',
    },
    {
      id: 4,
      name: '刘小花',
      avatar: 'L',
      rating: 5,
      text: '第一次使用宠物护理服务，本来很担心，但PetCare的团队让我完全放心。狗狗很喜欢护理师，现在每次见面都很兴奋！',
      pet: '柴犬 - 小黄',
      color: 'bg-light-blue',
    },
    {
      id: 5,
      name: '陈建国',
      avatar: 'C',
      rating: 5,
      text: '非常专业的团队！我的两只狗狗都得到了很好的照顾。24小时寄养服务让我可以安心出远门，感谢PetCare！',
      pet: '哈士奇 - 雪球 & 二哈',
      color: 'bg-lavender',
    },
    {
      id: 6,
      name: '赵小雅',
      avatar: 'Z',
      rating: 5,
      text: '遛狗服务太方便了！护理师很有耐心，我的泰迪现在每天都很期待散步时间。强烈推荐给所有忙碌的宠物主人！',
      pet: '泰迪 - 可可',
      color: 'bg-light-pink',
    },
  ];

  // Double the testimonials for seamless loop
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-lavender/30 to-white relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-pink/20 animate-float" />
      <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-peach/20 animate-float" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-light-pink/50 mb-6">
            <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
            <span className="text-sm font-medium text-gray-700">客户评价</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            听听宠物主人们
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
              怎么说
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            超过 5000 位宠物主人选择信任我们，看看他们的真实评价
          </p>
        </div>

        {/* Marquee Container */}
        <div
          className={`relative overflow-hidden transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-lavender/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling track */}
          <div
            className={`flex gap-6 ${isPaused ? '' : 'animate-marquee'}`}
            style={{
              width: 'fit-content',
              animationPlayState: isPaused ? 'paused' : 'running',
            }}
          >
            {allTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="w-80 flex-shrink-0 group"
              >
                <div className="bg-white rounded-3xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-500 h-full border border-gray-100 hover:border-pink/30">
                  {/* Quote icon */}
                  <Quote className="w-8 h-8 text-pink/30 mb-4" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-orange fill-orange" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4 group-hover:line-clamp-none transition-all">
                    {testimonial.text}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center text-white font-bold text-sm`}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{testimonial.name}</div>
                      <div className="text-xs text-gray-500">{testimonial.pet}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {[
            { value: '4.9', label: '平均评分', suffix: '/5.0' },
            { value: '5000+', label: '服务宠物', suffix: '' },
            { value: '98%', label: '满意度', suffix: '' },
            { value: '1000+', label: '五星好评', suffix: '' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-gray-900">
                {stat.value}
                <span className="text-lg text-gray-500">{stat.suffix}</span>
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
