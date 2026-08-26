import Head from 'next/head'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCheck, FiLoader } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { siteConfig } from '../config/siteConfig'

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.5 } }),
}

const INCLUDED = [
  'Unlimited connected accounts',
  'Unlimited workspaces and team members',
  'Custom approval workflows and access levels',
  'Volume pricing on accounts and credits',
  'Priority support with a named contact',
  'Invoicing and annual billing',
]

const field = 'w-full px-4 py-3 rounded-xl bg-surface border border-line text-body placeholder-subtle outline-none focus:border-indigo-400 transition-colors'
const label = 'block text-sm font-medium text-body mb-1.5'

export default function Enterprise() {
  const [form, setForm] = useState({ name: '', email: '', company: '', accounts: '', message: '', website: '' })
  const [state, setState] = useState('idle')   // idle | sending | sent | error
  const [error, setError] = useState('')

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    setState('sending')
    setError('')
    try {
      const res = await fetch(`${siteConfig.api.baseUrl}/api/enquiries/enterprise`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data?.message || 'Something went wrong. Please try again.')
      setState('sent')
    } catch (err) {
      setError(err.message)
      setState('error')
    }
  }

  return (
    <>
      <Head>
        <title>{`Enterprise - ${siteConfig.name}`}</title>
        <meta name="description" content={`Custom plans for teams managing social at scale. Tell us what you need and we'll put together pricing.`} />
      </Head>

      <Navbar />

      <main className="min-h-screen px-4 sm:px-6 py-20 sm:py-28">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={fade} initial="hidden" animate="visible" className="text-center mb-14">
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-body tracking-tight">
              Managing social at scale
            </h1>
            <p className="text-muted mt-4 max-w-xl mx-auto">
              If you&apos;re running dozens of accounts across multiple brands, the standard
              plans probably don&apos;t fit. Tell us what you need and we&apos;ll put together
              pricing that does.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-10">
            {/* What's included */}
            <motion.div variants={fade} custom={1} initial="hidden" animate="visible" className="md:col-span-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-subtle mb-4">Typically includes</p>
              <ul className="space-y-3">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <span className="w-4 h-4 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FiCheck size={9} className="text-emerald-500" />
                    </span>
                    <span className="text-muted leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-subtle mt-6 leading-relaxed">
                Everything is negotiable — these are the things people usually ask for,
                not a fixed package.
              </p>
            </motion.div>

            {/* Form */}
            <motion.div variants={fade} custom={2} initial="hidden" animate="visible" className="md:col-span-3">
              {state === 'sent' ? (
                <div className="rounded-2xl border border-line p-8 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/15 flex items-center justify-center mx-auto mb-4">
                    <FiCheck className="text-emerald-500" size={20} />
                  </div>
                  <h2 className="font-display text-xl font-bold text-body">Thanks — that&apos;s with us</h2>
                  <p className="text-muted text-sm mt-2">
                    We&apos;ll come back to you at {form.email} within one working day.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className="rounded-2xl border border-line p-6 sm:p-8 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={label} htmlFor="name">Your name</label>
                      <input id="name" required value={form.name} onChange={set('name')} className={field} placeholder="Ada Lovelace" />
                    </div>
                    <div>
                      <label className={label} htmlFor="email">Work email</label>
                      <input id="email" type="email" required value={form.email} onChange={set('email')} className={field} placeholder="you@company.com" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={label} htmlFor="company">Company</label>
                      <input id="company" value={form.company} onChange={set('company')} className={field} placeholder="Optional" />
                    </div>
                    <div>
                      <label className={label} htmlFor="accounts">Accounts you need</label>
                      <input id="accounts" value={form.accounts} onChange={set('accounts')} className={field} placeholder="e.g. 40" />
                    </div>
                  </div>

                  <div>
                    <label className={label} htmlFor="message">What are you trying to do?</label>
                    <textarea id="message" required rows={5} value={form.message} onChange={set('message')} className={field}
                      placeholder="How many brands, how many people, anything that has to work a particular way." />
                  </div>

                  {/* Honeypot — hidden from people, irresistible to bots. Not
                      display:none, which some bots skip; off-screen and
                      untabbable instead. */}
                  <div aria-hidden="true" className="absolute left-[-9999px] w-px h-px overflow-hidden">
                    <label htmlFor="website">Leave this empty</label>
                    <input id="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={set('website')} />
                  </div>

                  {/* A form has one failure mode mailto doesn't: if the API is
                      unreachable the visitor hits a dead end and leaves. Offer
                      the direct route with everything they typed already in it,
                      so a broken request costs us nothing. */}
                  {error && (
                    <div className="rounded-xl border border-rose-500/30 bg-rose-500/5 p-4">
                      <p className="text-sm text-rose-500">{error}</p>
                      <a
                        href={`mailto:${siteConfig.contact.enterprise || siteConfig.contact.info}?subject=${encodeURIComponent(`Enterprise enquiry${form.company ? ` — ${form.company}` : ''}`)}&body=${encodeURIComponent(
                          [form.name && `From: ${form.name}`, form.company && `Company: ${form.company}`,
                           form.accounts && `Accounts needed: ${form.accounts}`, '', form.message]
                            .filter(Boolean).join('\n')
                        )}`}
                        className="inline-block mt-2 text-sm font-medium text-indigo-500 hover:underline underline-offset-2">
                        Email us directly instead →
                      </a>
                    </div>
                  )}

                  <button type="submit" disabled={state === 'sending'}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors disabled:opacity-60">
                    {state === 'sending' ? <><FiLoader className="animate-spin" size={15} /> Sending…</> : 'Send enquiry'}
                  </button>

                  <p className="text-[11px] text-subtle text-center">
                    We&apos;ll only use this to reply about Enterprise pricing.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
