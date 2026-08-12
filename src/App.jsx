import { motion } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'

const quoteUrl = 'https://calendly.com/nyutonllc/30min'
const contactEmail = 'nyutonllc@protonmail.com'

const coreServices = [
  {
    title: 'Vending & Micro-Markets',
    summary: 'Managed snack, drink, and workplace refreshment programs for offices, warehouses, community properties, and local businesses.',
    points: ['Machine placement and product planning', 'Cashless payment options', 'Restock and service coordination'],
    cta: 'Get Vending Service',
    href: '#vending',
  },
  {
    title: 'IT & Cybersecurity',
    summary: 'Practical technology support and security readiness for small teams that need reliable systems without enterprise complexity.',
    points: ['Device, network, and account support', 'Security reviews and hardening', 'Backup and continuity planning'],
    cta: 'Request IT Support',
    href: '#it-cybersecurity',
  },
  {
    title: 'Digital Solutions',
    summary: 'Web, automation, analytics, and local digital improvements that help businesses operate cleaner and convert more demand.',
    points: ['Business websites and landing pages', 'Workflow automation', 'Local search and conversion tracking'],
    cta: 'Schedule a Free Consultation',
    href: '#digital-solutions',
  },
]

const detailSections = [
  {
    id: 'vending',
    eyebrow: 'Vending & Micro-Markets',
    title: 'Refreshment programs built around your location.',
    copy: 'Nyuton helps local facilities add convenient automated commerce without creating extra work for their staff. The approach starts with traffic patterns, audience needs, and available space, then moves into equipment, product mix, payment setup, and service cadence.',
    image: '/assets/img/vending-machine.webp',
    imageAlt: 'Nyuton Enterprises vending machine service example',
    items: ['Traditional vending for snacks and drinks', 'Micro-market planning for larger breakrooms', 'Product mix reviews based on workplace preferences', 'Clear next steps for placement, refill, and maintenance'],
    cta: 'Get Vending Service',
  },
  {
    id: 'it-cybersecurity',
    eyebrow: 'IT & Cybersecurity',
    title: 'Dependable support for the systems your business runs on.',
    copy: 'The IT and cybersecurity work is intentionally pragmatic: secure the basics, reduce avoidable downtime, and help owners make better decisions about devices, access, backups, and vendor tools.',
    image: '/assets/img/hero.svg',
    imageAlt: 'Business technology workspace',
    items: ['Small business IT support and troubleshooting', 'Account security and access reviews', 'Endpoint, Wi-Fi, and backup readiness', 'Security policies and staff awareness guidance'],
    cta: 'Request IT Support',
  },
  {
    id: 'digital-solutions',
    eyebrow: 'Digital Solutions',
    title: 'Sharper digital systems for growth and operations.',
    copy: 'Nyuton builds and improves the practical digital pieces that make a business easier to find, understand, and work with: websites, landing pages, forms, automations, analytics, and local search foundations.',
    image: '/assets/img/hero.svg',
    imageAlt: 'Digital business systems illustration',
    items: ['Modern websites and campaign landing pages', 'Lead capture and quote request flows', 'Analytics and conversion tracking setup', 'Automation for repetitive business workflows'],
    cta: 'Schedule a Free Consultation',
  },
]

const whyNyuton = [
  {
    title: 'Regional focus',
    copy: 'Built for businesses in Garner, Greater Raleigh, and the Research Triangle Area that need a responsive regional partner.',
  },
  {
    title: 'Commercially practical',
    copy: 'Recommendations are tied to operations, service quality, customer convenience, and measurable business outcomes.',
  },
  {
    title: 'One accountable partner',
    copy: 'Vending, IT, cybersecurity, and digital work can be coordinated through one business instead of scattered vendors.',
  },
  {
    title: 'Clean execution',
    copy: 'The work is scoped clearly, implemented carefully, and kept maintainable after launch or installation.',
  },
]

const serviceAreas = ['Garner', 'Greater Raleigh', 'Research Triangle Area']

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

function SectionHeader({ eyebrow, title, copy, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {copy && <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{copy}</p>}
    </div>
  )
}

function CTAButton({ children, href = quoteUrl, variant = 'primary' }) {
  const classes =
    variant === 'secondary'
      ? 'border border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10'
      : 'bg-emerald-400 text-slate-950 hover:bg-emerald-300'

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className={`inline-flex min-h-12 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-slate-950 ${classes}`}
    >
      {children}
    </a>
  )
}

function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[92vh] overflow-hidden">
      <img
        src="/assets/img/vending-machine.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        width="1600"
        height="1000"
      />
      <div className="absolute inset-0 bg-slate-950/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-5 pb-20 pt-32 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
          className="max-w-4xl"
        >
          <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">
            Business technology and automated commerce
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Practical systems for modern regional businesses.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            Nyuton Enterprises LLC provides vending, micro-market, IT, cybersecurity, and digital solutions for businesses in Garner, Greater Raleigh, and the Research Triangle Area.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="#vending">Get Vending Service</CTAButton>
            <CTAButton href="#it-cybersecurity" variant="secondary">Request IT Support</CTAButton>
            <CTAButton>Schedule a Free Consultation</CTAButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function CoreServices() {
  return (
    <section id="services" className="border-y border-white/10 bg-slate-900/60 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Core services"
          title="Three ways Nyuton helps businesses run better."
          copy="The site is now centered on focused commercial services instead of unrelated ventures. Each category is designed to support real operating needs."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {coreServices.map((service, index) => (
            <motion.article
              key={service.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-slate-950/20"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-emerald-400/10 text-sm font-bold text-emerald-200">
                0{index + 1}
              </div>
              <h3 className="mt-7 text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{service.summary}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <a href={service.href} className="mt-8 inline-flex text-sm font-semibold text-emerald-300 hover:text-emerald-200">
                {service.cta}
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function DetailSection({ section, index }) {
  const isReversed = index % 2 === 1

  return (
    <section id={section.id} className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className={isReversed ? 'lg:order-2' : ''}
        >
          <SectionHeader eyebrow={section.eyebrow} title={section.title} copy={section.copy} />
          <ul className="mt-8 grid gap-3 text-slate-300 sm:grid-cols-2">
            {section.items.map((item) => (
              <li key={item} className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <CTAButton>{section.cta}</CTAButton>
          </div>
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="overflow-hidden rounded-lg border border-white/10 bg-slate-900"
        >
          <img src={section.image} alt={section.imageAlt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
        </motion.div>
      </div>
    </section>
  )
}

function WhyNyuton() {
  return (
    <section id="why" className="border-y border-white/10 bg-white/[0.03] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Nyuton"
          title="A serious partner for practical business infrastructure."
          copy="Nyuton combines local service awareness with technology execution, keeping the work grounded in what a business actually needs to operate and grow."
          align="center"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyNyuton.map((item, index) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-lg border border-white/10 bg-slate-950/55 p-6"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceArea() {
  return (
    <section id="service-area" className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <SectionHeader
          eyebrow="Greater Raleigh service area"
          title="Based in Garner. Serving the Greater Raleigh and Research Triangle Area."
          copy="Nyuton Enterprises LLC is a service-area business with no street address published. Vending opportunities, IT support requests, and digital projects can start with a free consultation."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {serviceAreas.map((area) => (
            <div key={area} className="rounded-md border border-white/10 bg-white/[0.04] px-5 py-4 text-slate-200">
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section id="quote" className="px-5 pb-20 sm:px-6 sm:pb-24 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-emerald-300/20 bg-emerald-300 px-6 py-12 text-slate-950 sm:px-10 lg:px-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-700">Start the conversation</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Need vending service, IT support, or a digital business solution?
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-800">
              Share the location, business need, or project goal. Nyuton will help identify the right next step and whether the fit is vending, technology support, cybersecurity, digital work, or a combination. You can also email {contactEmail}.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href="#vending"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-950/20 bg-white/20 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white/35 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 focus:ring-offset-emerald-300"
            >
              Get Vending Service
            </a>
            <a
              href="#it-cybersecurity"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-950/20 bg-white/20 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white/35 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 focus:ring-offset-emerald-300"
            >
              Request IT Support
            </a>
            <a
              href={quoteUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 focus:ring-offset-emerald-300"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <main>
        <Hero />
        <CoreServices />
        {detailSections.map((section, index) => (
          <DetailSection key={section.id} section={section} index={index} />
        ))}
        <WhyNyuton />
        <ServiceArea />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
