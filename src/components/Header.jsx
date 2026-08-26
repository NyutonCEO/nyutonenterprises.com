import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const navItems = [
  { label: 'Vending', href: '/vending/' },
  { label: 'Managed IT', href: '/managed-it/' },
]

const serviceAreaItems = [
  { label: 'Service Area Overview', href: '/#service-area' },
  { label: 'Raleigh Vending', href: '/raleigh-vending/' },
  { label: 'Garner Vending', href: '/garner-vending/' },
  { label: 'Cary Vending', href: '/cary-vending/' },
]

const quoteUrl = 'https://calendly.com/nyutonllc/30min'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/86 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3" aria-label="Nyuton Enterprises home">
          <img src="/assets/img/logo.jpg" alt="" className="h-10 w-10 rounded-md object-cover" width="40" height="40" />
          <span className="text-base font-semibold tracking-wide text-white sm:text-lg">Nyuton Enterprises</span>
        </a>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {item.label}
            </a>
          ))}
          <div className="group relative">
            <button
              type="button"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white focus:outline-none focus:text-white"
              aria-haspopup="true"
            >
              Service Area
              <span className="text-xs text-slate-500 transition group-hover:text-slate-300">v</span>
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-56 -translate-x-1/2 rounded-md border border-white/10 bg-slate-950 p-2 opacity-0 shadow-2xl shadow-slate-950/40 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              {serviceAreaItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            href={quoteUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center rounded-md bg-emerald-400 px-4 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
          >
            Schedule a Free Consultation
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 text-white xl:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="relative h-4 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${isOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition ${isOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-white/10 bg-slate-950 xl:hidden"
            aria-label="Mobile navigation"
          >
            <div className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-white/10 py-4 text-sm font-medium text-slate-200"
                >
                  {item.label}
                </a>
              ))}
              <div className="border-b border-white/10 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Service Area</p>
                <div className="mt-3 grid gap-2">
                  {serviceAreaItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="rounded-md bg-white/[0.04] px-3 py-3 text-sm font-medium text-slate-200"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="grid gap-3 py-4">
                <a
                  href={quoteUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-emerald-400 px-4 text-sm font-semibold text-slate-950"
                >
                  Schedule a Free Consultation
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
