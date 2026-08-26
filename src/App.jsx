import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'

const quoteUrl = 'https://calendly.com/nyutonllc/30min'
const contactEmail = 'nyutonllc@protonmail.com'

const coreServices = [
  {
    title: 'Vending Machines',
    summary: 'Cashless vending machine placement planned around location traffic, product demand, payment convenience, and reliable service.',
    points: ['Machine placement and product planning', 'Cashless and mobile payment readiness', 'Restock and service coordination'],
    cta: 'Get Vending Service',
    href: '/vending/',
  },
  {
    title: 'Managed Information Technology',
    summary: 'Managed cloud and on-premises technology support for businesses that need reliable devices, networks, accounts, backups, and secure access.',
    points: ['Cloud and on-prem support', 'Device, network, and account management', 'Backup and continuity planning'],
    cta: 'Book an IT Assessment',
    href: '/managed-it/',
  },
]

const detailSections = [
  {
    id: 'vending',
    eyebrow: 'Vending Machines',
    title: 'Cashless vending placement that fits your location.',
    copy: 'Nyuton helps workplaces, warehouses, community properties, and local facilities add convenient vending machines without handing staff another operational burden. Placement is planned around traffic, product demand, equipment fit, payment expectations, and refill cadence.',
    image: '/assets/img/vending-machine.webp',
    imageAlt: 'Nyuton Enterprises vending machine service example',
    items: ['Snack and drink vending machine placement', 'Cashless payment and mobile-pay readiness', 'Product mix planning by location type', 'Refill and service coordination'],
    cta: 'Get Started with Vending',
  },
  {
    id: 'it-cybersecurity',
    eyebrow: 'Managed Information Technology',
    title: 'Cloud and on-prem support for the systems your business runs on.',
    copy: 'Managed IT work is intentionally pragmatic: reduce downtime, secure the basics, and give owners a clearer handle on cloud tools, on-prem devices, Wi-Fi, accounts, backups, vendor platforms, and everyday support needs.',
    image: '/assets/img/managed-it-services-vendor-ecosystem.png',
    imageAlt: 'Business technology workspace',
    items: ['Managed cloud service support', 'On-prem device and network support', 'Account access and backup readiness', 'Security policies and staff awareness guidance'],
    cta: 'Establish IT Support',
  },
]

const whyNyuton = [
  {
    title: 'Local response',
    copy: 'Built for businesses in Garner, Greater Raleigh, and the Research Triangle Area that need a practical regional partner.',
  },
  {
    title: 'Operational fit',
    copy: 'Recommendations are tied to traffic, service quality, customer convenience, uptime, and maintainable business systems.',
  },
  {
    title: 'One accountable partner',
    copy: 'Vending machine placement and managed information technology can be coordinated through one business.',
  },
  {
    title: 'Clear execution',
    copy: 'The work is scoped clearly, implemented carefully, and structured so support after launch or installation stays straightforward.',
  },
]

const technologyFeatures = [
  {
    title: 'Cashless Commerce',
    copy: 'Plan vending around card and mobile payment expectations so employees, tenants, guests, and visitors are not limited by cash.',
  },
  {
    title: 'Product Intelligence',
    copy: 'Use location type, audience patterns, and service feedback to tune snack and beverage product mix over time.',
  },
  {
    title: 'Managed Support',
    copy: 'Keep everyday business technology moving with managed cloud tools, on-prem devices, Wi-Fi, access, backups, and security fundamentals.',
  },
  {
    title: 'Support Visibility',
    copy: 'Create clearer intake paths for vending requests, IT issues, consultations, follow-up, and support priorities.',
  },
]

const processSteps = [
  {
    title: 'Assess the location',
    copy: 'Review foot traffic, staff count, available space, network needs, access hours, current pain points, and business priorities.',
  },
  {
    title: 'Design the service plan',
    copy: 'Recommend the vending machine setup, managed IT scope, payment expectations, cloud and on-prem support needs, and support cadence that fit the site.',
  },
  {
    title: 'Launch and support',
    copy: 'Coordinate setup, vending service, IT issue response, product reviews, and ongoing cloud or on-prem technology improvements as needs change.',
  },
]

const serviceAreas = ['Garner', 'Raleigh', 'Durham', 'Chapel Hill', 'Cary', 'Research Triangle Region']

const managedItServices = [
  {
    title: 'Employee IT Support',
    source: 'Help Desk',
    outcome: 'Your employees know exactly who to contact when technology gets in the way.',
  },
  {
    title: 'User Access Management',
    source: 'Onboarding and offboarding',
    outcome: 'New employees get the right access; departing employees lose it promptly.',
  },
  {
    title: 'Google Workspace Management',
    source: 'Google Workspace',
    outcome: 'Accounts, permissions, groups, and administration stay handled.',
  },
  {
    title: 'Account Security',
    source: 'Passwords and MFA',
    outcome: 'Business accounts get stronger control through passwords, MFA, and access review.',
  },
  {
    title: 'Computer Management',
    source: 'Endpoint management',
    outcome: 'Company computers stay managed, supportable, and easier to troubleshoot.',
  },
  {
    title: 'Network Management',
    source: 'Network and Wi-Fi',
    outcome: 'Connectivity has a clear owner when networks or Wi-Fi slow the team down.',
  },
]

const completeItIncludes = [
  'Remote help desk',
  'Employee onboarding and offboarding',
  'Google Workspace administration',
  'MFA management',
  'Password policy management',
  'Computer management',
  'Endpoint troubleshooting',
  'Network support',
  'Wi-Fi support',
]

const assessmentItems = [
  'Users and employee access',
  'Google Workspace configuration',
  'Administrator accounts',
  'MFA coverage',
  'Managed and unmanaged devices',
  'Onboarding and offboarding process',
  'Network and Wi-Fi environment',
  'Current support process',
]

const whyManagedItNyuton = [
  {
    title: 'One accountable IT partner',
    copy: 'Your team does not have to coordinate disconnected vendors for everyday support, access, computers, and connectivity.',
  },
  {
    title: 'Built around Google Workspace',
    copy: 'The service model fits businesses that run on Google Workspace and need account administration handled properly.',
  },
  {
    title: 'Designed for growing organizations',
    copy: 'You get professional IT ownership without hiring a full internal IT department before the business is ready.',
  },
  {
    title: 'Security built into daily IT management',
    copy: 'MFA, access management, password policy, and endpoint administration are part of the operating model.',
  },
]

const managedItBuyingPath = [
  'IT management assessment',
  '30-minute discovery call',
  'Environment review',
  'Proposal',
  'Onboarding',
  'Monthly managed IT',
]

const managedItProof = [
  'Businesses supported',
  'Users supported',
  'Devices managed',
  'Average response time',
  'Years of IT experience',
]

const homeFaqs = [
  {
    question: 'What businesses does Nyuton Enterprises serve?',
    answer: 'Nyuton works with offices, warehouses, community properties, service businesses, and small teams in Garner, Raleigh, Cary, and the broader Research Triangle Area.',
  },
  {
    question: 'Can one company help with vending and technology needs?',
    answer: 'Yes. Nyuton coordinates cashless vending machine placement and managed cloud or on-prem IT support through one accountable regional partner.',
  },
  {
    question: 'How do I start a vending placement or managed IT project?',
    answer: 'Start with a free consultation. Nyuton reviews your location, technology needs, timeline, and operating priorities before recommending a practical next step.',
  },
]

const landingPages = {
  '/vending/': {
    accent: 'yellow',
    eyebrow: 'Vending Machines',
    title: 'Upgrade Your Breakroom Without Spending a Dollar',
    intro: 'Nyuton Enterprises installs and manages modern vending machines for qualified Raleigh-Durham workplaces and properties.',
    description: 'Qualified locations can upgrade their breakroom or shared amenity area with managed vending service that removes the usual operational burden. Nyuton reviews location fit, traffic, product preferences, available space, and payment needs, then coordinates placement, cashless payment expectations, stocking priorities, service, and maintenance.',
    image: '/assets/img/vending-machine.webp',
    imageAlt: 'Cashless vending machine stocked with snacks',
    primaryCta: 'Request Free Vending Service',
    highlights: ['No equipment cost', 'No restocking', 'No maintenance', 'Cashless payments', 'Custom selections', 'Locally managed'],
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
    accent: 'red',
    eyebrow: 'Managed Information Technology',
    title: 'Managed cloud and on-prem IT support for small businesses.',
    intro: 'Nyuton helps small teams reduce avoidable downtime, strengthen account security, and make practical technology decisions.',
    description: 'The work focuses on the operating basics that matter most: cloud tools, on-prem devices, Wi-Fi and network issues, account access, endpoint hygiene, backup readiness, and staff security habits. The goal is to improve resilience without adding enterprise complexity.',
    image: '/assets/img/managed-it-services-vendor-ecosystem.png',
    imageAlt: 'Business technology systems illustration',
    primaryCta: 'Request Managed IT',
    highlights: ['Cloud and on-prem troubleshooting', 'Account access and security reviews', 'Backup and continuity planning', 'Security policies and staff guidance'],
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
  '/Managed-IT-Services/': {
    layout: 'managedIt',
    accent: 'red',
    eyebrow: 'Managed IT Services',
    title: 'Outsourced IT Management for Growing Businesses',
    intro: 'We manage your employees\' IT support, Google Workspace, user access, computers, passwords, MFA, networks, and Wi-Fi so your team can stay productive without hiring a full internal IT department.',
    description: 'Nyuton Enterprises becomes the accountable technology partner responsible for day-to-day IT ownership: supported employees, controlled access, managed computers, and reliable connectivity.',
    image: '/assets/img/managed-it-services-vendor-ecosystem.png',
    imageAlt: 'Managed IT systems for business operations',
    primaryCta: 'Book Your IT Assessment',
    highlights: ['Help Desk', 'Google Workspace', 'User Management', 'Endpoint Management', 'Network and Wi-Fi'],
    faqs: [
      {
        question: 'Who is managed IT for?',
        answer: 'Managed IT is built for growing organizations that need professional IT ownership but do not have a dedicated internal IT department.',
      },
      {
        question: 'What happens in the IT Management Assessment?',
        answer: 'Nyuton reviews users, administrator accounts, Google Workspace, MFA, devices, onboarding and offboarding, network and Wi-Fi conditions, and the current support process. The result is an IT Management Score plus a risk and improvement report.',
      },
      {
        question: 'Do you only provide help desk support?',
        answer: 'No. Help desk support is part of the offer, but the goal is broader IT ownership across user access, Google Workspace, account security, computers, networks, and Wi-Fi.',
      },
      {
        question: 'Do you publish managed IT pricing?',
        answer: 'Starting pricing is not published yet. The assessment helps define the number of users, devices, locations, and support needs before Nyuton prepares a managed IT proposal.',
      },
    ],
  },
  '/managed-it/': {
    layout: 'managedIt',
    accent: 'red',
    eyebrow: 'Managed IT',
    title: 'Outsourced IT Management for Growing Businesses',
    intro: 'We manage your employees\' IT support, Google Workspace, user access, computers, passwords, MFA, networks, and Wi-Fi so your team can stay productive without hiring a full internal IT department.',
    description: 'Nyuton Enterprises becomes the accountable technology partner responsible for day-to-day IT ownership: supported employees, controlled access, managed computers, and reliable connectivity.',
    image: '/assets/img/managed-it-services-vendor-ecosystem.png',
    imageAlt: 'Managed IT systems for business operations',
    primaryCta: 'Book Your IT Assessment',
    highlights: ['Help Desk', 'Google Workspace', 'User Management', 'Endpoint Management', 'Network and Wi-Fi'],
    faqs: [
      {
        question: 'Who is managed IT for?',
        answer: 'Managed IT is built for growing organizations that need professional IT ownership but do not have a dedicated internal IT department.',
      },
      {
        question: 'What happens in the IT Management Assessment?',
        answer: 'Nyuton reviews users, administrator accounts, Google Workspace, MFA, devices, onboarding and offboarding, network and Wi-Fi conditions, and the current support process. The result is an IT Management Score plus a risk and improvement report.',
      },
      {
        question: 'Do you only provide help desk support?',
        answer: 'No. Help desk support is part of the offer, but the goal is broader IT ownership across user access, Google Workspace, account security, computers, networks, and Wi-Fi.',
      },
      {
        question: 'Do you publish managed IT pricing?',
        answer: 'Starting pricing is not published yet. The assessment helps define the number of users, devices, locations, and support needs before Nyuton prepares a managed IT proposal.',
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

const landingThemes = {
  yellow: {
    eyebrow: 'text-yellow-300',
    badge: 'border-yellow-300/30 bg-yellow-300/[0.12] text-yellow-100',
    button: 'yellow',
    heroBorder: 'border-yellow-300/35',
    heroGlow: 'shadow-yellow-950/35',
    heroPattern:
      'bg-[linear-gradient(135deg,rgba(250,204,21,0.18)_0_1px,transparent_1px_22px),radial-gradient(circle_at_18%_20%,rgba(250,204,21,0.26),transparent_28%),radial-gradient(circle_at_82%_8%,rgba(34,211,238,0.16),transparent_26%)]',
    card: 'border-yellow-300/20 bg-yellow-300/[0.06]',
    marker: 'bg-yellow-300 text-slate-950',
  },
  red: {
    eyebrow: 'text-red-300',
    badge: 'border-red-300/30 bg-red-300/[0.12] text-red-100',
    button: 'red',
    heroBorder: 'border-red-300/35',
    heroGlow: 'shadow-red-950/35',
    heroPattern:
      'bg-[linear-gradient(135deg,rgba(239,68,68,0.18)_0_1px,transparent_1px_22px),radial-gradient(circle_at_18%_20%,rgba(239,68,68,0.26),transparent_28%),radial-gradient(circle_at_82%_8%,rgba(34,211,238,0.16),transparent_26%)]',
    card: 'border-red-300/20 bg-red-300/[0.06]',
    marker: 'bg-red-500 text-white',
  },
  emerald: {
    eyebrow: 'text-emerald-300',
    badge: 'border-emerald-300/30 bg-emerald-300/[0.12] text-emerald-100',
    button: 'primary',
    heroBorder: 'border-emerald-300/25',
    heroGlow: 'shadow-slate-950/40',
    heroPattern:
      'bg-[linear-gradient(135deg,rgba(52,211,153,0.14)_0_1px,transparent_1px_22px),radial-gradient(circle_at_18%_20%,rgba(52,211,153,0.18),transparent_28%),radial-gradient(circle_at_82%_8%,rgba(34,211,238,0.14),transparent_26%)]',
    card: 'border-white/10 bg-white/[0.04]',
    marker: 'bg-emerald-400 text-slate-950',
  },
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
  const variantClasses = {
    primary: 'bg-emerald-400 text-slate-950 hover:bg-emerald-300',
    secondary: 'border border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10',
    yellow: 'bg-yellow-400 text-slate-950 hover:bg-yellow-300',
    red: 'bg-red-500 text-white hover:bg-red-400',
  }

  const classes = variantClasses[variant] || variantClasses.primary

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
      <div className="absolute inset-0 bg-slate-950/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/82 to-cyan-950/25" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-5 pb-20 pt-32 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
          className="max-w-4xl"
        >
          <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">
            Vending machines and managed information technology
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Vending Placement and Managed IT Support for the Raleigh-Durham Research Triangle Region of North Carolina.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            Nyuton Enterprises LLC provides cashless vending machine placement and Managed Cloud & On-Prem tech solutions across Raleigh-Durham, a multi-county business region anchored by North Carolina's capital and the dynamic markets of Durham, Chapel Hill, Cary, and many established towns and growing communities across the central part of the state.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="#vending" variant="yellow">Get Started with Vending</CTAButton>
            <CTAButton href="#it-cybersecurity" variant="red">Establish IT Support</CTAButton>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-12 grid max-w-3xl gap-3 text-sm text-slate-200 sm:grid-cols-3">
            {['Cashless vending', 'Small business IT', 'Cybersecurity basics'].map((item) => (
              <div key={item} className="rounded-md border border-white/15 bg-slate-950/45 px-4 py-3 backdrop-blur-sm">
                {item}
              </div>
            ))}
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
          title="Vending placement and managed IT for practical business operations."
          copy="Nyuton focuses on two operating needs business owners can feel: convenient cashless vending for their location and dependable cloud or on-prem technology support for their team."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
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

function TechnologyPlatform() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeader
            eyebrow="How it helps"
            title="A practical service model for locations that need reliable placement and reliable support."
            copy="Vending machines and managed IT both depend on consistency. Nyuton treats both as business infrastructure: plan the setup, keep the experience simple, and support the system after it is live."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {technologyFeatures.map((feature, index) => (
              <motion.article
                key={feature.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-lg border border-white/10 bg-slate-950/65 p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{feature.copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Service process"
          title="From first walkthrough to ongoing support."
          copy="The engagement starts with the operating reality of your location, then turns into a clear service plan for vending machine placement, managed information technology, or both."
          align="center"
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-cyan-300/10 text-sm font-bold text-cyan-200">
                {index + 1}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{step.copy}</p>
            </motion.article>
          ))}
        </div>
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
          copy="Nyuton combines local service awareness with technology execution, keeping vending machine placement and managed IT grounded in what a business actually needs to operate."
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
          title="Based in Garner. Serving Raleigh-Durham and the Research Triangle region."
          copy="Nyuton Enterprises LLC is a service-area business with no street address published. Vending placement opportunities and managed IT support requests can start with a free consultation."
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

function ManagedItLandingPage({ page }) {
  const theme = landingThemes[page.accent] || landingThemes.red

  return (
    <main>
      <section className="relative isolate overflow-hidden pt-32">
        <img src={page.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-[0.22]" width="1600" height="1000" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/92 to-slate-950/76" />
        <div className={`absolute inset-0 opacity-70 ${theme.heroPattern}`} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-24">
          <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.12 }}>
            <motion.p variants={fadeUp} className={`text-sm font-semibold uppercase tracking-[0.28em] ${theme.eyebrow}`}>
              {page.eyebrow}
            </motion.p>
            <motion.h1 variants={fadeUp} className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your Business Shouldn't Need a Full-Time IT Department to Have Professional IT Management.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-7 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
              Nyuton Enterprises manages your employees, Google Workspace, computers, accounts, networks, and everyday IT problems for one predictable monthly service.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-3 sm:flex-row">
              <CTAButton variant={theme.button}>{page.primaryCta}</CTAButton>
              <CTAButton href="#included" variant="secondary">See What's Included</CTAButton>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-2">
              {page.highlights.map((highlight) => (
                <span key={highlight} className={`rounded-md border px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] ${theme.badge}`}>
                  {highlight}
                </span>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.55, delay: 0.08 }}
            className={`relative overflow-hidden rounded-lg border bg-slate-900 shadow-2xl ${theme.heroBorder} ${theme.heroGlow}`}
          >
            <div className="border-b border-white/10 px-6 py-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-200">Primary offer</p>
            </div>
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-white">{page.title}</h2>
              <p className="mt-5 leading-8 text-slate-300">{page.intro}</p>
              <div className="mt-8 grid gap-3">
                {['Managed IT', 'Growing organizations', 'Supported employees', 'Controlled access'].map((item) => (
                  <div key={item} className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <SectionHeader
            eyebrow="IT ownership"
            title="Who owns your IT right now?"
            copy="If employees ask managers for computer help, former employees may still have access, MFA is inconsistent, computers are unmanaged, Wi-Fi is unreliable, or nobody owns Google Workspace administration, you do not just have an IT support problem."
          />
          <div className="rounded-lg border border-red-300/20 bg-red-300/[0.08] p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-white">You have an IT ownership problem.</h3>
            <p className="mt-5 leading-8 text-slate-300">
              Nyuton becomes the accountable technology partner responsible for managing that environment, keeping support, access, devices, security basics, networks, and Wi-Fi tied to one operating model.
            </p>
          </div>
        </div>
      </section>

      <section id="included" className="border-y border-white/10 bg-white/[0.03] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="One managed IT system"
            title="Six services, one accountable support relationship."
            copy="Prospects should not have to assemble a menu of technical services. Nyuton packages the operating pieces growing businesses need into one managed IT relationship."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {managedItServices.map((service, index) => (
              <motion.article
                key={service.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-lg border border-white/10 bg-slate-950/65 p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-200">{service.source}</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{service.outcome}</p>
              </motion.article>
            ))}
          </div>
          <p className="mt-10 text-center text-xl font-semibold text-white">One provider. One support relationship. One accountable IT partner.</p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="rounded-lg border border-red-300/25 bg-slate-900 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-200">Flagship package</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Nyuton Complete IT Management</h2>
            <p className="mt-5 leading-8 text-slate-300">
              A complete monthly managed IT relationship for businesses that need employee support, Google Workspace administration, account security, computer management, and network support under one owner.
            </p>
            <div className="mt-8 rounded-md border border-white/10 bg-white/[0.04] px-5 py-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Pricing</p>
              <p className="mt-2 text-2xl font-semibold text-white">Starting price available after assessment</p>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Publish a starting monthly price once real package data is ready. Until then, the assessment qualifies fit and scope.
              </p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {completeItIncludes.map((item) => (
              <div key={item} className="rounded-md border border-white/10 bg-white/[0.04] px-5 py-4 text-sm leading-6 text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-red-950/20 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <SectionHeader
            eyebrow="Entry offer"
            title="Start with an IT Management Assessment."
            copy="A cold visitor should not have to commit to managed IT immediately. The assessment gives qualified prospects a concrete first step and gives Nyuton the context needed to make a serious recommendation."
          />
          <div>
            <div className="grid gap-3 sm:grid-cols-2">
              {assessmentItems.map((item) => (
                <div key={item} className="rounded-md border border-red-300/20 bg-slate-950/65 px-5 py-4 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-lg border border-red-300/25 bg-red-300/[0.1] p-6">
              <h3 className="text-xl font-semibold text-white">Deliverable: IT Management Score + Risk and Improvement Report</h3>
              <p className="mt-4 leading-7 text-slate-300">
                Use this report to show what is working, what is exposed, and what should be improved before a managed IT proposal is prepared.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Proof"
            title="Add real operating proof as the service grows."
            copy="Do not invent metrics. This section is ready for real numbers and short case studies as Nyuton collects them."
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {managedItProof.map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/[0.04] p-5 text-center">
                <p className="text-3xl font-semibold text-white">--</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
          <article className="mt-8 rounded-lg border border-white/10 bg-slate-950/55 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-200">Example case study format</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Healthcare Organization</h3>
            <p className="mt-4 leading-7 text-slate-300">
              Challenge: Multiple users, Google Workspace administration, remote support, and device management were consuming management time.
            </p>
            <p className="mt-3 leading-7 text-slate-300">
              Solution: Centralized IT administration and ongoing remote support.
            </p>
            <p className="mt-3 leading-7 text-slate-300">
              Result: One accountable point of contact for IT operations.
            </p>
          </article>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Nyuton"
            title="Practical IT management for growing teams."
            copy="The offer is strongest when it focuses on operating differences that matter to a business owner, not generic claims every provider makes."
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyManagedItNyuton.map((item, index) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-lg border border-white/10 bg-slate-950/65 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Buying path"
            title="A clear path from assessment to monthly management."
            copy="The page should move visitors toward one primary conversion and one clear service relationship."
            align="center"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3 xl:grid-cols-6">
            {managedItBuyingPath.map((step, index) => (
              <div key={step} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-red-500 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="mt-5 text-sm font-semibold leading-6 text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={page.faqs} title="Managed IT questions" />
      <ManagedItFinalCTA />
    </main>
  )
}

function ManagedItFinalCTA() {
  return (
    <section id="quote" className="px-5 pb-20 sm:px-6 sm:pb-24 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-red-300/25 bg-red-500 px-6 py-12 text-white sm:px-10 lg:px-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-100">Book an IT assessment</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Find out what is unmanaged, exposed, or slowing your team down.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-red-50">
              Start with a focused review of users, Google Workspace, MFA, computers, networks, Wi-Fi, and support process. Nyuton will identify risks, gaps, and the right managed IT path.
            </p>
          </div>
          <a
            href={quoteUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-red-700 transition hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-500"
          >
            Book Your IT Assessment
          </a>
        </div>
      </div>
    </section>
  )
}

function LandingPage({ page }) {
  const theme = landingThemes[page.accent] || landingThemes.emerald

  return (
    <main>
      <section className="relative isolate overflow-hidden pt-32">
        <img src={page.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" width="1600" height="1000" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
        <div className={`absolute inset-0 opacity-80 ${theme.heroPattern}`} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-24">
          <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.12 }}>
            <motion.p variants={fadeUp} className={`text-sm font-semibold uppercase tracking-[0.28em] ${theme.eyebrow}`}>
              {page.eyebrow}
            </motion.p>
            <motion.h1 variants={fadeUp} className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {page.title}
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-7 max-w-3xl text-lg leading-8 text-slate-200">
              {page.intro}
            </motion.p>
            {page.highlights?.length > 0 && (
              <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-2">
                {page.highlights.slice(0, 3).map((highlight) => (
                  <span key={highlight} className={`rounded-md border px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] ${theme.badge}`}>
                    {highlight}
                  </span>
                ))}
              </motion.div>
            )}
            <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-3 sm:flex-row">
              <CTAButton variant={theme.button}>{page.primaryCta}</CTAButton>
              <CTAButton href="/" variant="secondary">View All Services</CTAButton>
            </motion.div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.55, delay: 0.08 }}
            className={`relative overflow-hidden rounded-lg border bg-slate-900 shadow-2xl ${theme.heroBorder} ${theme.heroGlow}`}
          >
            <div className={`absolute inset-0 z-10 mix-blend-screen opacity-70 ${theme.heroPattern}`} />
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
              <div key={highlight} className={`rounded-md border px-5 py-4 text-sm leading-6 text-slate-200 ${theme.card}`}>
                <span className={`mb-4 flex h-9 w-9 items-center justify-center rounded-md text-xs font-bold ${theme.marker}`}>
                  {String(page.highlights.indexOf(highlight) + 1).padStart(2, '0')}
                </span>
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
              Need vending machines, managed information technology, or both?
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-800">
              Share the location, technology need, or support goal. Nyuton will help identify the right next step and whether the fit is vending machine placement, managed cloud support, on-prem IT support, or a combination. You can also email {contactEmail}.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href="#vending"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-950/20 bg-white/20 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white/35 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 focus:ring-offset-emerald-300"
            >
              Get Started with Vending
            </a>
            <a
              href="#it-cybersecurity"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-950/20 bg-white/20 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white/35 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 focus:ring-offset-emerald-300"
            >
              Establish IT Support
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
      : 'Nyuton Enterprises | Vending Placement & Managed IT in Raleigh-Durham NC'

    document.title = title
  }, [page])

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      {page ? (
        page.layout === 'managedIt' ? <ManagedItLandingPage page={page} /> : <LandingPage page={page} />
      ) : (
        <main>
          <Hero />
          <CoreServices />
          <TechnologyPlatform />
          {detailSections.map((section, index) => (
            <DetailSection key={section.id} section={section} index={index} />
          ))}
          <ProcessSection />
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
