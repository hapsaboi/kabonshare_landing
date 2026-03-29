'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineDownload, HiOutlineExternalLink } from 'react-icons/hi'
import { FiSmartphone, FiMonitor, FiGlobe, FiDownload } from 'react-icons/fi'
import { siteConfig } from '../config/siteConfig'

const PLATFORM_META = {
  android: { label: 'Android', Icon: FiSmartphone, color: 'from-green-500 to-emerald-600' },
  ios: { label: 'iOS', Icon: FiSmartphone, color: 'from-blue-500 to-indigo-600' },
  windows: { label: 'Windows', Icon: FiMonitor, color: 'from-sky-400 to-indigo-600' },
  macos: { label: 'macOS', Icon: FiMonitor, color: 'from-gray-500 to-slate-600' },
  linux: { label: 'Linux', Icon: FiMonitor, color: 'from-orange-500 to-red-600' },
  web: { label: 'Web', Icon: FiGlobe, color: 'from-purple-500 to-violet-600' },
}

function formatBytes(bytes) {
  if (!bytes) return null
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(0) + ' KB'
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
}

export default function Downloads() {
  const [apps, setApps] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const res = await fetch(`${siteConfig.api.baseUrl}/api/apps`)
        const json = await res.json()
        if (json.status && json.data) setApps(json.data)
      } catch (err) {
        console.error('Failed to load apps:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchApps()
  }, [])

  if (loading) return (
    <section className="py-24 bg-gray-50">
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
      </div>
    </section>
  )
  if (apps.length === 0) return null

  return (
    <section id="get-our-apps" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #667eea 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <FiDownload className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-gray-700">Available Now</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              KabonShare
            </span>{' '}
            Everywhere
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Download our apps for your preferred platform and start publishing across all your social channels.
          </p>
        </motion.div>

        {/* Apps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, index) => {
            const meta = PLATFORM_META[app.platform] || PLATFORM_META.web
            const PlatformIcon = meta.Icon
            const downloadUrl = app.latestVersion?.downloadUrl
            const storeUrl = app.storeUrl

            return (
              <motion.div
                key={app.slug}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {/* Icon + platform */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg ${app.iconUrl ? 'bg-white border border-gray-100' : `bg-gradient-to-br ${meta.color}`}`}>
                    {app.iconUrl ? (
                      <img src={app.iconUrl} alt="" className="w-10 h-10 rounded-lg object-cover" />
                    ) : (
                      <PlatformIcon className="w-7 h-7 text-white" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {app.name}
                    </h3>
                    <span className="text-sm text-gray-400 font-medium">{meta.label}</span>
                  </div>
                </div>

                {/* Description */}
                {app.description && (
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">{app.description}</p>
                )}

                {/* Version + size info */}
                {app.latestVersion && (
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-5">
                    <span className="px-2 py-1 bg-gray-50 rounded-md font-medium">
                      v{app.latestVersion.version}
                    </span>
                    {app.latestVersion.fileSize > 0 && (
                      <span>{formatBytes(app.latestVersion.fileSize)}</span>
                    )}

                  </div>
                )}

                {/* Download / Store button */}
                {(downloadUrl || storeUrl) && (
                  <a
                    href={downloadUrl || storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300 bg-gradient-to-r ${meta.color} text-white shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]`}
                  >
                    {downloadUrl ? (
                      <>
                        <HiOutlineDownload className="w-4 h-4" />
                        Download
                      </>
                    ) : (
                      <>
                        <HiOutlineExternalLink className="w-4 h-4" />
                        Get on {meta.label === 'iOS' ? 'App Store' : meta.label === 'Android' ? 'Play Store' : meta.label}
                      </>
                    )}
                  </a>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
