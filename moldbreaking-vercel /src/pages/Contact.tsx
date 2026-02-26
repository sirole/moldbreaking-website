import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Check } from 'lucide-react';
import { FloatingCircle, FloatingSquare, FloatingRing, DecoLine } from '../components/GeometricShapes';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inquiryTypes = [
    { value: 'brand', label: 'ブランド支援について' },
    { value: 'creator', label: 'クリエイター支援について' },
    { value: 'ai', label: 'AI基盤導入について' },
    { value: 'career', label: '採用について' },
    { value: 'other', label: 'その他' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 使用 mailto 发送邮件
    const subject = encodeURIComponent(`【お問い合わせ】${formData.inquiryType ? inquiryTypes.find(t => t.value === formData.inquiryType)?.label : ''}`);
    const body = encodeURIComponent(
      `お名前: ${formData.name}\n` +
      `会社名: ${formData.company}\n` +
      `メール: ${formData.email}\n` +
      `電話: ${formData.phone}\n\n` +
      `【お問い合わせ内容】\n${formData.message}`
    );
    window.location.href = `mailto:hey@moldbreaking.com?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="bg-dark min-h-screen pt-20">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        {/* Geometric decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <FloatingRing 
            className="w-48 h-48 border-brand-yellow/10 top-20 right-20"
            delay={0}
          />
          <FloatingSquare 
            className="w-5 h-5 bg-brand-yellow/15 bottom-1/4 left-20"
            delay={0.3}
          />
          <FloatingCircle 
            className="w-3 h-3 bg-brand-gold/30 top-1/3 left-1/4"
            delay={0.5}
          />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[128px]" />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="text-gradient">最短ルート</span>の相談から。
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto">
              課題をヒアリングし、最短距離で成果へつなぐ提案をします。
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <DecoLine />
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {isSubmitted ? (
                <div className="p-8 rounded-3xl card-glass text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-yellow/20 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-brand-yellow" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    お問い合わせありがとうございます
                  </h3>
                  <p className="text-zinc-400">
                    メールアプリが開きます。内容をご確認の上、送信してください。
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-zinc-400 text-sm mb-2">
                        お名前 <span className="text-brand-yellow">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-dark-light border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-yellow/50 transition-colors"
                        placeholder="山田 太郎"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-400 text-sm mb-2">
                        会社名
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-dark-light border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-yellow/50 transition-colors"
                        placeholder="株式会社〇〇"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-zinc-400 text-sm mb-2">
                        メールアドレス <span className="text-brand-yellow">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-dark-light border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-yellow/50 transition-colors"
                        placeholder="example@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-400 text-sm mb-2">
                        電話番号
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-dark-light border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-yellow/50 transition-colors"
                        placeholder="03-6384-5001"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-zinc-400 text-sm mb-2">
                      お問い合わせ種別 <span className="text-brand-yellow">*</span>
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-dark-light border border-white/10 text-white focus:outline-none focus:border-brand-yellow/50 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-dark-light">選択してください</option>
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value} className="bg-dark-light">
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-zinc-400 text-sm mb-2">
                      お問い合わせ内容 <span className="text-brand-yellow">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl bg-dark-light border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-yellow/50 transition-colors resize-none"
                      placeholder="お問い合わせ内容をご記入ください..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-glass-primary flex items-center justify-center gap-2 py-4"
                  >
                    <Send className="w-5 h-5" />
                    送信する
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-white font-semibold mb-6">
                  お問い合わせ先
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-yellow/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-brand-yellow" />
                    </div>
                    <div>
                      <p className="text-zinc-500 text-sm mb-1">メール</p>
                      <p className="text-white">hey@moldbreaking.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-yellow/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-brand-yellow" />
                    </div>
                    <div>
                      <p className="text-zinc-500 text-sm mb-1">電話</p>
                      <p className="text-white">03-6384-5001</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-yellow/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-brand-yellow" />
                    </div>
                    <div>
                      <p className="text-zinc-500 text-sm mb-1">所在地</p>
                      <p className="text-white">〒150-0046</p>
                      <p className="text-white">東京都渋谷区松濤２丁目１５−１３ X-BASE SHIBUYA 102</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl card-glass">
                <h4 className="text-white font-semibold mb-4">
                  対応時間について
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  お問い合わせいただいた順に、通常3営業日以内にご返信いたします。
                  混雑状況により、お時間をいただく場合がございますことをご了承ください。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
