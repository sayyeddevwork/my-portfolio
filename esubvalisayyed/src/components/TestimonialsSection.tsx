import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';
import { Testimonial } from '../types';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0C3C48] border border-white/10 text-[#9FB4BE] text-sm font-medium uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#2A7187]" />
            <span>Happy Clients</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-space font-bold text-[#F4F1EA] mb-4">
            Words from Happy Clients
          </h2>

          <p className="text-base text-[#9FB4BE] max-w-xl">
            Feedback and testimonials from founders, CTOs, and product leaders who partnered with Sayyed Vali.
          </p>
        </motion.div>

        {/* Grid of Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item: Testimonial, index: number) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#18475D] rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl shadow-black/30 flex flex-col justify-between hover:-translate-y-1.5 hover:border-[#2A7187] transition-all duration-300 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#0C3C48] flex items-center justify-center text-[#2A7187]">
                    <Quote className="w-5 h-5 fill-current" />
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: item.stars }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#F4F1EA] font-medium italic leading-relaxed mb-6">
                  “{item.quote}”
                </p>
              </div>

              {/* Author Attribution */}
              <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#2A7187]"
                />
                <div>
                  <h4 className="text-sm font-bold font-space text-[#F4F1EA]">
                    {item.author}
                  </h4>
                  <p className="text-xs text-[#6E8792]">
                    {item.role} · <span className="text-[#35839C]">{item.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
