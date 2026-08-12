const serviceLinks = [
  { label: 'Vending & Micro-Markets', href: '#vending' },
  { label: 'IT & Cybersecurity', href: '#it-cybersecurity' },
  { label: 'Digital Solutions', href: '#digital-solutions' },
]

const companyLinks = [
  { label: 'Why Nyuton', href: '#why' },
  { label: 'Service Area', href: '#service-area' },
  { label: 'Schedule a Free Consultation', href: 'https://calendly.com/nyutonllc/30min', external: true },
  { label: 'nyutonllc@protonmail.com', href: 'mailto:nyutonllc@protonmail.com' },
]

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src="/assets/img/logo.jpg" alt="" className="h-10 w-10 rounded-md object-cover" width="40" height="40" />
              <span className="text-lg font-semibold text-white">Nyuton Enterprises</span>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              Business technology and automated commerce solutions from Garner, North Carolina, serving the Greater Raleigh and Research Triangle Area.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Services</h2>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-400 transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Company</h2>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noreferrer' : undefined}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 Nyuton Enterprises LLC. All rights reserved.</p>
          <p>Garner, North Carolina. Service-area business; no street address published.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
