import Head from 'next/head'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineClock } from 'react-icons/hi'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { siteConfig } from '../config/siteConfig'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - {siteConfig.name}</title>
        <meta name="description" content={`Get in touch with ${siteConfig.name}. We're here to help with any questions about our social media publishing platform.`} />
      </Head>

      <div className="min-h-screen bg-slate-950">
        <Navbar />

        {/* Contact Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Contact Us
              </h1>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Have questions? We&apos;re here to help. Reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-2 gap-5 mb-12">
              {/* Email */}
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-indigo-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiOutlineMail className="text-indigo-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Email</h3>
                    <p className="text-slate-400 text-sm mb-1">General Inquiries:</p>
                    <a href={`mailto:${siteConfig.contact.info}`} className="text-indigo-400 hover:text-indigo-300 font-medium text-sm transition-colors">
                      {siteConfig.contact.info}
                    </a>
                    <p className="text-slate-400 text-sm mt-3 mb-1">Technical Support:</p>
                    <a href={`mailto:${siteConfig.contact.support}`} className="text-indigo-400 hover:text-indigo-300 font-medium text-sm transition-colors">
                      {siteConfig.contact.support}
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-indigo-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiOutlinePhone className="text-indigo-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Phone</h3>
                    <p className="text-slate-400 text-sm mb-1">Customer Support:</p>
                    <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="text-indigo-400 hover:text-indigo-300 font-medium text-lg transition-colors">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-indigo-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiOutlineLocationMarker className="text-indigo-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Office Address</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {siteConfig.address.line1}<br />
                      {siteConfig.address.line2}<br />
                      {siteConfig.address.city}<br />
                      {siteConfig.address.country}
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-indigo-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiOutlineClock className="text-indigo-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Business Hours</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Monday &ndash; Friday: 9:00 AM &ndash; 6:00 PM WAT<br />
                      Saturday: 10:00 AM &ndash; 4:00 PM WAT<br />
                      Sunday: Closed
                    </p>
                    <p className="text-slate-500 text-xs mt-3">
                      * Email support available 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Help Banner */}
            <div className="bg-indigo-500/5 rounded-2xl p-6 border border-indigo-500/10">
              <h3 className="text-lg font-semibold text-white mb-3">
                Need Immediate Help?
              </h3>
              <p className="text-slate-300 text-sm mb-3">
                For urgent technical issues, visit our{' '}
                <a href={siteConfig.api.docs} className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                  documentation
                </a>{' '}
                or check our{' '}
                <a href={siteConfig.api.docs + '/faq'} className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                  FAQ section
                </a>{' '}
                for quick answers.
              </p>
              <p className="text-slate-300 text-sm">
                For enterprise inquiries, email{' '}
                <a href={`mailto:${siteConfig.contact.support}`} className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                  {siteConfig.contact.support}
                </a>
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
