import { useEffect } from 'react'
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
    href: '/vending/',
  },
  {
    title: 'IT & Cybersecurity',
    summary: 'Practical technology support and security readiness for small teams that need reliable systems without enterprise complexity.',
    points: ['Device, network, and account support', 'Security reviews and hardening', 'Backup and continuity planning'],
    cta: 'Request IT Support',
    href: '/it-cybersecurity/',
  },
  {
    title: 'Digital Solutions',
    summary: 'Web, automation, analytics, and local digital improvements that help businesses operate cleaner and convert more demand.',
    points: ['Business websites and landing pages', 'Workflow automation', 'Local search and conversion tracking'],
    cta: 'Schedule a Free Consultation',
    href: '/digital-solutions/',
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

const homeFaqs = [
  {
    question: 'What businesses does Nyuton Enterprises serve?',
    answer: 'Nyuton works with offices, warehouses, community properties, service businesses, and small teams in Garner, Raleigh, Cary, and the broader Research Triangle Area.',
  },
  {
    question: 'Can one company help with vending and technology needs?',
    answer: 'Yes. Nyuton coordinates vending, micro-market planning, IT support, cybersecurity readiness, and digital solutions through one accountable regional partner.',
  },
  {
    question: 'How do I start a vending, IT, or digital project?',
    answer: 'Start with a free consultation. Nyuton reviews your location, business need, timeline, and operating priorities before recommending a practical next step.',
  },
]

const landingPages = {
  '/vending/': {
    eyebrow: 'Vending & Micro-Markets',
    title: 'Vending machine service for Raleigh-area businesses.',
    intro: 'Nyuton Enterprises helps local workplaces add reliable snack, drink, and micro-market options without creating extra operational work for staff.',
    description: 'The vending process starts with location fit, foot traffic, product preferences, available space, and payment needs. From there, Nyuton can help plan machine placement, cashless payment expectations, stocking priorities, and service coordination for offices, warehouses, multifamily properties, and local facilities.',
    image: '/assets/img/vending-machine.webp',
    imageAlt: 'Cashless vending machine stocked with snacks',
    primaryCta: 'Get Vending Service',
    highlights: ['Snack and drink vending programs', 'Cashless and mobile payment planning', 'Micro-market planning for larger breakrooms', 'Restock and service coordination'],
    faqs: [
      {
        question: 'What types of locations are a fit for vending service?',
        answer: 'Good fits include offices, warehouses, apartment communities, gyms, schools, churches, and facilities with consistent foot traffic or staff presence.',
      },
      {
        question: 'Can Nyuton help with cashless vending?',
        answer: 'Yes. Nyuton plans vending programs around modern payment expectations, including card and mobile payment options where equipment and location fit support them.',
      },
      {
        question: 'What areas do you serve for vending?',
        answer: 'Nyuton focuses on Garner, Raleigh, Cary, and nearby Research Triangle communities.',
      },
    ],
  },
  '/it-cybersecurity/': {
    eyebrow: 'IT & Cybersecurity',
    title: 'Small business IT support and cybersecurity readiness.',
    intro: 'Nyuton helps small teams reduce avoidable downtime, strengthen account security, and make practical technology decisions.',
    description: 'The work focuses on the operating basics that matter most: device reliability, Wi-Fi and network issues, account access, endpoint hygiene, backup readiness, and staff security habits. The goal is to improve resilience without adding enterprise complexity.',
    image: '/assets/img/hero.svg',
    imageAlt: 'Business technology systems illustration',
    primaryCta: 'Request IT Support',
    highlights: ['Device and network troubleshooting', 'Account access and security reviews', 'Backup and continuity planning', 'Security policies and staff guidance'],
    faqs: [
      {
        question: 'Do you support small businesses without an internal IT team?',
        answer: 'Yes. Nyuton is structured for owners and small teams that need practical support without maintaining a full internal IT department.',
      },
      {
        question: 'What cybersecurity basics should a small business prioritize?',
        answer: 'Strong passwords, multi-factor authentication, backup readiness, device updates, access reviews, and clear staff expectations are the practical starting points.',
      },
      {
        question: 'Can IT support and cybersecurity be scoped together?',
        answer: 'Yes. Many projects combine troubleshooting, account cleanup, backup planning, and security hardening in one focused engagement.',
      },
    ],
  },
  '/digital-solutions/': {
    eyebrow: 'Digital Solutions',
    title: 'Websites, automation, and digital systems for local businesses.',
    intro: 'Nyuton improves the practical digital pieces that help a business get found, capture leads, and operate cleaner.',
    description: 'Digital work can include modern websites, campaign landing pages, quote request flows, local search foundations, analytics setup, and workflow automation. The focus is business utility: clearer customer paths, cleaner data, and systems that are easier to maintain.',
    image: '/assets/img/hero.svg',
    imageAlt: 'Digital business systems illustration',
    primaryCta: 'Schedule a Free Consultation',
    highlights: ['Business websites and landing pages', 'Lead capture and quote request flows', 'Analytics and conversion tracking', 'Workflow automation for repeated tasks'],
    faqs: [
      {
        question: 'Can Nyuton build a website for a local service business?',
        answer: 'Yes. Nyuton builds focused websites and landing pages for businesses that need clearer positioning, lead capture, and local search foundations.',
      },
      {
        question: 'Do you set up analytics and conversion tracking?',
        answer: 'Yes. Analytics and conversion tracking can be included so owners can understand form submissions, calls, consultations, and campaign performance.',
      },
      {
        question: 'What kinds of workflows can be automated?',
        answer: 'Common opportunities include quote intake, follow-up reminders, reporting, form routing, and repeat administrative handoffs.',
      },
    ],
  },
  '/raleigh-vending/': {
    eyebrow: 'Raleigh Vending',
    title: 'Vending service for Raleigh workplaces and facilities.',
    intro: 'Nyuton supports Raleigh businesses that want convenient vending or micro-market options for employees, tenants, customers, and visitors.',
    description: 'Raleigh locations can vary from office teams and warehouses to community properties and service facilities. Nyuton evaluates traffic patterns, audience preferences, placement needs, and service expectations before recommending a vending path.',
    image: '/assets/img/vending-machine.webp',
    imageAlt: 'Snack vending machine for Raleigh business locations',
    primaryCta: 'Get Raleigh Vending Service',
    highlights: ['Raleigh office vending programs', 'Warehouse and facility refreshment planning', 'Cashless vending expectations', 'Snack and drink product mix reviews'],
    faqs: [
      {
        question: 'Does Nyuton serve Raleigh vending locations?',
        answer: 'Yes. Raleigh is a core service area for vending and micro-market planning.',
      },
      {
        question: 'What information helps evaluate a Raleigh vending location?',
        answer: 'Helpful details include employee or visitor count, access hours, available space, current refreshment options, and payment preferences.',
      },
      {
        question: 'Can vending service support both employees and visitors?',
        answer: 'Yes. Product mix and placement can be planned around staff needs, visitor traffic, or both.',
      },
    ],
  },
  '/garner-vending/': {
    eyebrow: 'Garner Vending',
    title: 'Local vending machine service in Garner, North Carolina.',
    intro: 'Nyuton is based in Garner and helps nearby businesses plan vending and refreshment programs that fit their location.',
    description: 'Garner businesses can use vending to improve workplace convenience, support long shifts, and offer practical refreshments without taking staff time away from operations. Nyuton helps assess location fit, product mix, payment needs, and service cadence.',
    image: '/assets/img/vending-machine.webp',
    imageAlt: 'Garner vending machine service example',
    primaryCta: 'Get Garner Vending Service',
    highlights: ['Garner-based vending partner', 'Snack and beverage machine planning', 'Breakroom and facility refreshment options', 'Clear service and refill expectations'],
    faqs: [
      {
        question: 'Is Nyuton local to Garner?',
        answer: 'Yes. Nyuton Enterprises is based in Garner, North Carolina and serves nearby Greater Raleigh communities.',
      },
      {
        question: 'What Garner businesses are good vending candidates?',
        answer: 'Offices, warehouses, shops, community properties, gyms, and facilities with regular employees or visitors may be good candidates.',
      },
      {
        question: 'Can you review an existing vending setup?',
        answer: 'Yes. Nyuton can review product mix, payment expectations, placement, and service concerns for existing vending locations.',
      },
    ],
  },
  '/cary-vending/': {
    eyebrow: 'Cary Vending',
    title: 'Vending and micro-market planning for Cary businesses.',
    intro: 'Nyuton helps Cary workplaces and facilities evaluate vending options that improve convenience for teams, tenants, and guests.',
    description: 'A vending program should match the location. Nyuton reviews traffic, employee count, available space, product preferences, and payment expectations before recommending a machine or micro-market approach.',
    image: '/assets/img/vending-machine.webp',
    imageAlt: 'Cary vending and micro-market service example',
    primaryCta: 'Get Cary Vending Service',
    highlights: ['Cary workplace vending planning', 'Cashless snack and drink options', 'Micro-market fit reviews', 'Product mix planning for employees and guests'],
    faqs: [
      {
        question: 'Does Nyuton provide vending service in Cary?',
        answer: 'Yes. Cary is included in Nyuton’s Greater Raleigh and Research Triangle service area.',
      },
      {
        question: 'Can Cary locations consider micro-markets?',
        answer: 'Yes. Larger breakrooms or higher-traffic locations may be candidates for micro-market planning.',
      },
      {
        question: 'How does Nyuton choose products?',
        answer: 'Product planning is based on audience preferences, location type, traffic patterns, and service feedback over time.',
      },
    ],
  },
}

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

function FAQSection({ faqs, title = 'Frequently asked questions' }) {
  return (
    <section className="border-y border-white/10 bg-white/[0.03] py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="FAQ" title={title} align="center" />
        <div className="mt-12 grid gap-4">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-lg border border-white/10 bg-slate-950/55 p-6">
              <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
              <p className="mt-3 leading-7 text-slate-300">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function LandingPage({ page }) {
  return (
    <main>
      <section className="relative isolate overflow-hidden pt-32">
        <img src={page.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" width="1600" height="1000" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-24">
          <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.12 }}>
            <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">
              {page.eyebrow}
            </motion.p>
            <motion.h1 variants={fadeUp} className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {page.title}
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-7 max-w-3xl text-lg leading-8 text-slate-200">
              {page.intro}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-3 sm:flex-row">
              <CTAButton>{page.primaryCta}</CTAButton>
              <CTAButton href="/" variant="secondary">View All Services</CTAButton>
            </motion.div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.55, delay: 0.08 }}
            className="overflow-hidden rounded-lg border border-white/10 bg-slate-900 shadow-2xl shadow-slate-950/40"
          >
            <img src={page.image} alt={page.imageAlt} className="aspect-[4/3] w-full object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <SectionHeader eyebrow="Service details" title="Built around the way your location operates." copy={page.description} />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {page.highlights.map((highlight) => (
              <div key={highlight} className="rounded-md border border-white/10 bg-white/[0.04] px-5 py-4 text-sm leading-6 text-slate-200">
                {highlight}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={page.faqs} title={`${page.eyebrow} questions`} />
      <FinalCTA />
    </main>
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
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/'
  const normalizedPath = pathname.endsWith('/') ? pathname : `${pathname}/`
  const page = landingPages[normalizedPath]

  useEffect(() => {
    const title = page
      ? `${page.title} | Nyuton Enterprises`
      : 'Nyuton Enterprises | Vending, IT & Cybersecurity in Raleigh NC'

    document.title = title
  }, [page])

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      {page ? (
        <LandingPage page={page} />
      ) : (
        <main>
          <Hero />
          <CoreServices />
          {detailSections.map((section, index) => (
            <DetailSection key={section.id} section={section} index={index} />
          ))}
          <WhyNyuton />
          <ServiceArea />
          <FAQSection faqs={homeFaqs} />
          <FinalCTA />
        </main>
      )}
      <Footer />
    </div>
  )
}

export default App
