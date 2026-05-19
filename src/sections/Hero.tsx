import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Heart } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dogRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Interactive ball game
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Ball physics
    const ball = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: 3,
      vy: 2,
      radius: 20,
      color: '#ffcea3',
    };

    let mouseX = 0;
    let mouseY = 0;
    let isMouseActive = false;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseActive = true;
    };

    const handleMouseLeave = () => {
      isMouseActive = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Mouse interaction - attract ball
      if (isMouseActive) {
        const dx = mouseX - ball.x;
        const dy = mouseY - ball.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          ball.vx += dx * 0.001;
          ball.vy += dy * 0.001;
        }
      }

      // Update ball position
      ball.x += ball.vx;
      ball.y += ball.vy;

      // Bounce off walls
      if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) {
        ball.vx = -ball.vx * 0.9;
        ball.x = Math.max(ball.radius, Math.min(canvas.width - ball.radius, ball.x));
      }
      if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
        ball.vy = -ball.vy * 0.9;
        ball.y = Math.max(ball.radius, Math.min(canvas.height - ball.radius, ball.y));
      }

      // Gravity
      ball.vy += 0.15;

      // Friction
      ball.vx *= 0.995;
      ball.vy *= 0.995;

      // Draw ball with shadow
      ctx.beginPath();
      ctx.arc(ball.x + 3, ball.y + 3, ball.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0,0,0,0.1)';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      const gradient = ctx.createRadialGradient(
        ball.x - 5,
        ball.y - 5,
        0,
        ball.x,
        ball.y,
        ball.radius
      );
      gradient.addColorStop(0, '#ffe9f1');
      gradient.addColorStop(1, '#ffcea3');
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw paw print on ball
      ctx.fillStyle = 'rgba(255,255,255,0.6)';
      ctx.beginPath();
      ctx.arc(ball.x, ball.y + 3, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(ball.x - 7, ball.y - 4, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(ball.x + 7, ball.y - 4, 3, 0, Math.PI * 2);
      ctx.fill();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink via-peach to-mint">
      {/* Interactive Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 2 }}>
        <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-light-blue/40 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-12 h-12 rounded-full bg-orange/40 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-20 h-20 rounded-full bg-light-pink/40 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/3 w-8 h-8 rounded-full bg-cream/60 animate-float" style={{ animationDelay: '0.5s' }} />
        
        {/* Paw prints */}
        <Heart className="absolute top-32 left-1/4 w-6 h-6 text-pink/50 animate-pulse-soft" />
        <Heart className="absolute bottom-1/3 right-1/4 w-5 h-5 text-peach/50 animate-pulse-soft" style={{ animationDelay: '1s' }} />
        <Heart className="absolute top-1/2 right-10 w-4 h-4 text-mint/50 animate-pulse-soft" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div
              className={`text-center lg:text-left transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm mb-6">
                <Heart className="w-4 h-4 text-orange fill-orange" />
                <span className="text-sm font-medium text-gray-700">专业宠物护理服务</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                您值得信赖的
                <span className="block mt-2 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                  家庭宠物护理伙伴！
                </span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                在 PetCare 宠物看护，我们深知您的宠物对您而言就像家人一样重要！
                我们提供专业、贴心的宠物护理服务，让您的爱宠在您不在时也能感受到家的温暖。
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('#about')}
                  className="group px-8 py-4 rounded-full bg-gray-900 text-white font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all hover:scale-105 hover:shadow-xl"
                >
                  关于我们
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection('#services')}
                  className="px-8 py-4 rounded-full bg-white/70 backdrop-blur-sm text-gray-800 font-semibold hover:bg-white transition-all hover:scale-105 hover:shadow-lg border border-white/50"
                >
                  我们的服务
                </button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mt-12 justify-center lg:justify-start">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">5000+</div>
                  <div className="text-sm text-gray-500">快乐宠物</div>
                </div>
                <div className="w-px bg-gray-300" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-500">满意度</div>
                </div>
                <div className="w-px bg-gray-300" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-500">专业护理师</div>
                </div>
              </div>
            </div>

            {/* Right Content - Dog Image */}
            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="relative">
                {/* Decorative circles */}
                <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-pink/50 blur-2xl" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-peach/50 blur-2xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-mint/30 blur-3xl" />

                {/* Dog Image */}
                <img
                  ref={dogRef}
                  src="/images/hero-dog.png"
                  alt="可爱的柴犬"
                  className="relative z-10 w-full max-w-md mx-auto animate-float hover:scale-105 transition-transform duration-500 cursor-pointer"
                  style={{ animationDuration: '4s' }}
                />

                {/* Floating badges */}
                <div className="absolute top-10 right-0 bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-soft animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-mint flex items-center justify-center">
                      <Heart className="w-4 h-4 text-green-600 fill-green-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">认证护理师</div>
                      <div className="text-sm font-bold text-gray-800">100% 可靠</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-20 left-0 bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-soft animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-light-pink flex items-center justify-center">
                      <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">服务评价</div>
                      <div className="text-sm font-bold text-gray-800">4.9/5.0 ⭐</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
