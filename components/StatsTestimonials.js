'use client'
import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    quote: "Media Share API saved us 3 months of development time. We launched social publishing in our SaaS product in just 2 days.",
    author: "Sarah Johnson",
    role: "CTO at SocialHub",
    avatar: "👩‍💼",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    quote: "The OAuth management alone is worth the price. We used to spend hours debugging token refreshes.",
    author: "Mike Chen",
    role: "Lead Developer at ContentCo",
    avatar: "👨‍💻",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    quote: "We manage 100+ client accounts. Media Share's bulk scheduling is a game-changer.",
    author: "Lisa Martinez",
    role: "Agency Owner at Digital Boost",
    avatar: "👩‍🚀",
    gradient: "from-orange-500 to-red-500"
  }
]

export default function StatsTestimonials() {
  return (
    <section className="py-20 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 text-primary dark:text-blue-400 rounded-full text-sm font-semibold border border-blue-500/20">
                Testimonials
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              What Developers Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Trusted by developers building the next generation of social media tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
              >
                {/* Quote Icon */}
                <div className={`absolute -top-4 left-8 w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                  <FaQuoteLeft className="text-white text-xl" />
                </div>

                {/* Quote */}
                <div className="mt-6 mb-6">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-2xl shadow-md`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Proof Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-center text-white shadow-xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Social Media Publishing?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Start building with Media Share API today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Start Free Trial
            </a>
            <a
              href="#developer-experience"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white/50 hover:bg-white/30 transition-all duration-300"
            >
              View Documentation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
