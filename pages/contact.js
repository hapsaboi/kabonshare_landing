import Head from 'next/head'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Kabon Share</title>
        <meta name="description" content="Get in touch with Kabon Share. We're here to help with any questions about our social media publishing platform." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">
        <Navbar />

        {/* Contact Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Contact Us
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Have questions? We&apos;re here to help. Reach out to us through any of the channels below.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Email */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Email
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      General Inquiries:
                    </p>
                    <a href="mailto:info@kabonshare.com" className="text-primary hover:underline font-medium">
                      info@kabonshare.com
                    </a>
                    <p className="text-gray-600 dark:text-gray-300 mt-3 mb-2">
                      Technical Support:
                    </p>
                    <a href="mailto:support@kabonshare.com" className="text-primary hover:underline font-medium">
                      support@kabonshare.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Phone
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      Customer Support:
                    </p>
                    <a href="tel:+2349033326993" className="text-primary hover:underline font-medium text-lg">
                      +234 903 332 6993
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Office Address
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      No. 5 AGF Abdulrazak Street<br />
                      Off 1st Avenue, Gwarinpa<br />
                      FCT Abuja<br />
                      Nigeria
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Business Hours
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Saturday: 10:00 AM - 4:00 PM PST<br />
                      Sunday: Closed
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                      * Email support available 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-6 border border-primary/20">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Need Immediate Help?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                For urgent technical issues, please visit our{' '}
                <a href="https://docs.kabonshare.com" className="text-primary hover:underline font-medium">
                  documentation
                </a>{' '}
                or check our{' '}
                <a href="https://docs.kabonshare.com/faq" className="text-primary hover:underline font-medium">
                  FAQ section
                </a>{' '}
                for quick answers.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                For enterprise inquiries and partnerships, please email{' '}
                <a href="mailto:enterprise@kabonshare.com" className="text-primary hover:underline font-medium">
                  support@kabonshare.com
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
