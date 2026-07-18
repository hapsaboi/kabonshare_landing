'use client'
import { motion } from 'framer-motion'
import { HiOutlineStar } from 'react-icons/hi'
import { siteConfig } from '../config/siteConfig'

const testimonials = [
  {
    quote: "KabonShare saved us months of development time. We launched social publishing in our SaaS product in just 2 days.",
    author: "Sarah J.",
    role: "CTO, SaaS Company",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    quote: "The OAuth management alone is worth it. We used to spend hours debugging token refreshes — now it just works.",
    author: "Michael C.",
    role: "Lead Developer",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    quote: "We manage 50+ client accounts through KabonShare. The multi-platform scheduling is a huge time saver.",
    author: "Lisa M.",
    role: "Agency Owner",
    gradient: "from-orange-500 to-red-500"
  }
]

export default function StatsTestimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #667eea 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-6"
          >
            <HiOutlineStar className="text-amber-500" />
            <span className="text-sm font-medium text-indigo-700">What People Say</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Trusted by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Creators & Developers
            </span>
          </h2>
          <p className="text-lg text-subtle max-w-2xl mx-auto">
            Hear from teams and individuals using KabonShare to simplify their social media workflow.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <HiOutlineStar key={i} className="text-amber-400 fill-amber-400 text-sm" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                <div className={`w-10 h-10 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-white text-sm font-bold`}>
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{testimonial.author}</div>
                  <div className="text-xs text-subtle">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-10 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to Simplify Your Social Publishing?
          </h3>
          <p className="text-lg mb-6 text-muted max-w-xl mx-auto">
            Join creators and developers who publish smarter with KabonShare.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={siteConfig.dashboard + '/signup'}
              className="inline-flex items-center justify-center bg-white text-indigo-600 px-7 py-3.5 rounded-xl font-semibold hover:bg-gray-50 hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
            >
              Get Started Free
            </a>
            <a
              href={siteConfig.api.docs}
              className="inline-flex items-center justify-center glass-card backdrop-blur-sm text-body px-7 py-3.5 rounded-xl font-semibold border border-white/20 hover:glass-card transition-all duration-300"
            >
              View API Docs
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
