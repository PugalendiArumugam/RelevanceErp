export type Service = {
  slug: string;
  title: string;
  overview: string;
  capabilities: string[];
  benefits: string[];
  cta: string;
};

export type CaseStudy = {
  title: string;
  industry: string;
  problem: string;
  solution: string;
  impact: string;
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export const homeContent = {
  hero: {
    headline: "Driving ERP Excellence for Global Enterprises",
    subtext:
      "We help organizations modernize, optimize, and scale their business systems.",
    ctaPrimary: "Talk to Experts",
    ctaSecondary: "Explore Services",
  },
  erpFocus: [
    {
      name: "SAP",
      details:
        "End-to-end implementation, ECC to S/4HANA migration, and managed support.",
    },
    {
      name: "Oracle",
      details:
        "Cloud ERP transformation, integration architecture, and release management.",
    },
    {
      name: "Microsoft Dynamics",
      details:
        "Process standardization, global rollouts, and post-go-live optimization.",
    },
  ],
  whyChooseUs: [
    "Global delivery model",
    "Experienced consultants",
    "Proven track record",
    "Scalable solutions",
  ],
  industries: [
    "Manufacturing",
    "Banking & Financial Services",
    "Retail",
    "Healthcare",
  ],
  finalCta: {
    heading: "Ready to accelerate enterprise transformation?",
    subtext:
      "Partner with Relevance Infosystems for enterprise-grade solutions and 24/7 support.",
  },
};

export const services: Service[] = [
  {
    slug: "erp-consulting",
    title: "ERP Consulting",
    overview:
      "Strategic ERP advisory and implementation services aligned with your global operating model.",
    capabilities: [
      "ERP roadmap and architecture",
      "Program governance and PMO support",
      "Implementation and rollout management",
      "Application managed services",
    ],
    benefits: [
      "Faster transformation timelines",
      "Reduced implementation risk",
      "Improved cross-functional visibility",
    ],
    cta: "Discuss your ERP roadmap",
  },
  {
    slug: "cloud-transformation",
    title: "Cloud Transformation",
    overview:
      "Cloud-first modernization strategies for ERP landscapes, enterprise workloads, and integrations.",
    capabilities: [
      "Cloud readiness assessment",
      "Migration factory and cutover planning",
      "Hybrid cloud architecture",
      "Cloud security and compliance",
    ],
    benefits: [
      "Lower infrastructure overhead",
      "Better business agility",
      "Improved resilience and uptime",
    ],
    cta: "Plan your cloud journey",
  },
  {
    slug: "data-ai",
    title: "Data & AI",
    overview:
      "Unlock actionable intelligence across finance, supply chain, and operations with AI-led analytics.",
    capabilities: [
      "Enterprise data platform design",
      "Executive dashboards and KPI frameworks",
      "Predictive and prescriptive analytics",
      "GenAI copilots for operations",
    ],
    benefits: [
      "Faster decision-making",
      "Higher forecast accuracy",
      "Smarter process automation",
    ],
    cta: "Explore data-led transformation",
  },
  {
    slug: "custom-enterprise-applications",
    title: "Custom Enterprise Applications",
    overview:
      "Design and build scalable applications that integrate seamlessly with your ERP and cloud ecosystem.",
    capabilities: [
      "Product and platform engineering",
      "API-first integration development",
      "Modernization of legacy systems",
      "UX-led enterprise app design",
    ],
    benefits: [
      "Faster innovation cycles",
      "Reduced technical debt",
      "Improved user adoption",
    ],
    cta: "Build enterprise-ready applications",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Global Manufacturing ERP Harmonization",
    industry: "Manufacturing",
    problem:
      "Regional business units operated disparate ERP instances, causing reporting delays and process inefficiencies.",
    solution:
      "Designed and delivered a phased multi-country ERP template rollout with centralized governance.",
    impact:
      "Reduced month-end close time by 38% and improved process compliance across 14 business units.",
  },
  {
    title: "Digital Core Modernization for Retail Group",
    industry: "Retail",
    problem:
      "Legacy systems limited omnichannel visibility and prevented real-time inventory optimization.",
    solution:
      "Implemented a cloud-based ERP architecture with API integrations across commerce and fulfillment systems.",
    impact:
      "Increased inventory accuracy to 97% and reduced stock-out incidents by 31% in 9 months.",
  },
  {
    title: "Finance Transformation for Banking Operations",
    industry: "Banking & Financial Services",
    problem:
      "Manual finance workflows and fragmented data models slowed regulatory reporting.",
    solution:
      "Built a standardized finance data layer and automated reconciliation workflows.",
    impact:
      "Cut reporting cycle time by 42% while improving audit traceability and control maturity.",
  },
];

export const testimonials = [
  {
    quote:
      "Relevance Infosystems brought a pragmatic delivery model and deep ERP expertise that accelerated our transformation goals.",
    name: "VP, Digital Transformation",
    company: "Global Industrial Enterprise",
  },
  {
    quote:
      "Their consultants blended technical depth with business context, helping us unlock measurable value quickly.",
    name: "CIO",
    company: "Regional Banking Group",
  },
];

export const aboutContent = {
  overview:
    "Relevance Infosystems Pvt Ltd helps enterprises modernize core systems through ERP consulting, cloud innovation, and digital transformation programs.",
  mission:
    "To deliver enterprise-grade technology solutions that create measurable business outcomes at global scale.",
  vision:
    "To become a trusted transformation partner for organizations building future-ready digital operations.",
  globalDelivery:
    "Our global delivery model combines onsite strategy leadership with distributed engineering teams for 24/7 support and faster outcomes.",
  leadership: [
    "CEO / Managing Director (Placeholder)",
    "Chief Delivery Officer (Placeholder)",
    "Head of Enterprise Solutions (Placeholder)",
  ],
};
