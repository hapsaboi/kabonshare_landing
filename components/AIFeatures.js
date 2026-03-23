'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiOutlineSparkles, HiOutlinePhotograph, HiOutlineFilm, HiOutlineMusicNote, HiOutlineTranslate, HiOutlineLightningBolt } from 'react-icons/hi'

const aiCapabilities = [
  {
    icon: HiOutlinePhotograph,
    title: 'Images',
    description: 'Drop in a photo and get scroll-stopping captions written for you in seconds.',
    color: '#8B5CF6',
  },
  {
    icon: HiOutlineFilm,
    title: 'Videos & Audio',
    description: 'Works with any video or audio file — the AI understands your content and writes captions that match.',
    color: '#3B82F6',
  },
  {
    icon: HiOutlineTranslate,
    title: 'Ready-to-Post Output',
    description: 'Get a title, short caption, long caption, and hashtags — ready to paste and publish across all your platforms.',
    color: '#10B981',
  },
  {
    icon: HiOutlineLightningBolt,
    title: 'Fast & Affordable',
    description: 'Results in seconds, not minutes. AI credits are included in Pro and Business plans so you can generate without worrying about costs.',
    color: '#F59E0B',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function AIFeatures() {
  return (
    <section id="ai-features" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 backdrop-blur-sm mb-6"
          >
            <HiOutlineSparkles className="text-purple-400" />
            <span className="text-sm font-medium text-purple-300">AI-Powered</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Generate Captions with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              AI
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Upload an image or video — our AI writes your captions, titles, and hashtags in seconds. No more staring at a blank screen.
          </p>
        </motion.div>

        {/* How it works strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 mb-16"
        >
          {[
            { step: '1', label: 'Upload media', sub: 'Image, video, or audio' },
            { step: '2', label: 'AI does the work', sub: 'Understands your content' },
            { step: '3', label: 'Get captions', sub: 'Title, caption & hashtags' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 md:gap-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-purple-500/20">
                  {item.step}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{item.label}</p>
                  <p className="text-slate-500 text-xs">{item.sub}</p>
                </div>
              </div>
              {i < 2 && (
                <div className="hidden md:block w-16 lg:w-24 h-px bg-gradient-to-r from-purple-500/40 to-transparent mx-4" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {aiCapabilities.map((cap, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-7 border border-white/5 hover:border-purple-500/20 transition-all duration-300 overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at top right, ${cap.color}, transparent 70%)` }}
              />
              <div className="relative z-10 flex gap-5">
                <div className="flex-shrink-0 mt-1">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    <cap.icon className="text-2xl" style={{ color: cap.color }} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* AI Output Demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-white/5 overflow-hidden">
            <div className="px-5 py-3 border-b border-white/5 flex items-center gap-2">
              <HiOutlineSparkles className="text-purple-400 text-sm" />
              <span className="text-xs font-medium text-slate-400">AI-Generated Output</span>
              <div className="ml-auto flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
            </div>
            <div className="p-5 space-y-4 font-mono text-sm">
              <div>
                <span className="text-purple-400 text-xs uppercase tracking-wider">Title</span>
                <p className="text-white mt-1">&quot;Golden Hour at the Beach&quot;</p>
              </div>
              <div>
                <span className="text-purple-400 text-xs uppercase tracking-wider">Short Caption</span>
                <p className="text-slate-300 mt-1">&quot;Chasing sunsets and making memories. Nothing beats the golden hour glow. ✨&quot;</p>
              </div>
              <div>
                <span className="text-purple-400 text-xs uppercase tracking-wider">Hashtags</span>
                <p className="text-indigo-300 mt-1">#GoldenHour #BeachVibes #SunsetLovers #NaturePhotography #Travel</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* AI Credits note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-slate-500 text-sm">
            AI generation uses <span className="text-purple-400 font-medium">AI credits</span> included in Pro and Business plans.{' '}
            <Link href="/pricing">
              <span className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 cursor-pointer">
                View pricing
              </span>
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
