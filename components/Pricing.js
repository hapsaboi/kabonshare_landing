'use client'
import { motion } from 'framer-motion'
import { FaCheck, FaStar, FaRocket, FaBuilding } from 'react-icons/fa'

const pricingPlans = [
  {
    name: 'Free Tier',
    price: '$0',
    period: 'month',
    description: 'Perfect for testing and small projects',
    features: [
      '100 posts/month',
      '3 connected accounts',
      '24-hour support response',
      'Community access',
      'Basic analytics',
      'API documentation'
    ],
    cta: 'Start Free',
    popular: false,
    gradient: 'from-gray-500 to-gray-600'
  },
  {
    name: 'Starter',
    price: '$29',
    period: 'month',
    description: 'For growing businesses and creators',
    features: [
      '1,000 posts/month',
      '10 connected accounts',
      'Analytics dashboard',
      'Webhook support',
      'Email support',
      'Scheduling features',
      'Multi-platform posting'
    ],
    cta: 'Start Trial',
    popular: false,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Professional',
    price: '$99',
    period: 'month',
    description: 'For agencies and power users',
    features: [
      '10,000 posts/month',
      '50 connected accounts',
      'Advanced analytics',
      'Priority support',
      'Custom webhooks',
      'Team collaboration',
      'Bulk scheduling',
      'White-label option'
    ],
    cta: 'Start Trial',
    popular: true,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations',
    features: [
      'Unlimited posts',
      'Unlimited accounts',
      'Dedicated infrastructure',
      'SLA guarantees',
      'White-label option',
      'Phone support',
      'Custom integrations',
      'Account manager'
    ],
    cta: 'Contact Sales',
    popular: false,
    gradient: 'from-orange-500 to-red-500'
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white dark:bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 dark:from-orange-500/20 dark:to-red-500/20 text-orange-600 dark:text-orange-400 rounded-full text-sm font-semibold border border-orange-500/20">
              Pricing
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan for your needs
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: plan.popular ? 1.05 : 1.02, y: -5 }}
              className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'ring-4 ring-primary lg:scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="flex items-center gap-1 bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    <FaStar className="text-yellow-300" />
                    Popular
                  </span>
                </div>
              )}

              <div className="p-6">
                {/* Plan Icon */}
                <div className={`w-12 h-12 bg-gradient-to-br ${plan.gradient} rounded-xl flex items-center justify-center mb-4`}>
                  {plan.name === 'Free Tier' && <FaRocket className="text-white text-xl" />}
                  {plan.name === 'Starter' && <FaCheck className="text-white text-xl" />}
                  {plan.name === 'Professional' && <FaStar className="text-white text-xl" />}
                  {plan.name === 'Enterprise' && <FaBuilding className="text-white text-xl" />}
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-500 dark:text-gray-400">/{plan.period}</span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
                  {plan.description}
                </p>

                {/* CTA Button */}
                <a
                  href={plan.cta === 'Contact Sales' ? 'mailto:sales@media-share.io' : '#'}
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 mb-6 ${
                    plan.popular
                      ? 'bg-gradient-primary text-white hover:shadow-xl hover:scale-105'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {plan.cta}
                </a>

                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <FaCheck className="text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
