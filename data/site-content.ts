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
      "We help organizations modernize, optimize, and scale their business systems with enterprise-grade consulting and delivery.",
    ctaPrimary: "Talk to Experts",
    ctaSecondary: "Explore Services",
  },
  erpFocus: [
    {
      name: "SAP",
      details:
        "Implementation, migration, integration, and managed support — aligned to your compliance and reporting needs.",
    },
    {
      name: "Oracle",
      details:
        "Cloud ERP modernization, integration architecture, and release governance for resilient operations.",
    },
    {
      name: "Microsoft Dynamics",
      details:
        "Process standardization, rollouts, and post-go-live optimization to improve adoption and outcomes.",
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
      "ERP consulting and delivery across core platforms, with a strong focus on implementation excellence and long-term support.",
    capabilities: [
      "ERP roadmap and architecture",
      "Implementation and rollout management",
      "Integration strategy and delivery",
      "Post-go-live support and optimization",
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
      "Cloud consulting, migration, and operations across major cloud platforms with security and governance built in.",
    capabilities: [
      "Cloud readiness assessment and strategy",
      "Cloud migration planning and execution",
      "Hybrid and multi-cloud architecture",
      "Cloud security, backup, and disaster recovery",
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
      "Mobile and web application engineering that improves customer experience, operational efficiency, and digital workflows.",
    capabilities: [
      "Mobile application development (Android)",
      "Web portals (ASP.NET, C#, MSSQL)",
      "Digital workflow automation (claims, approvals, tracking)",
      "API-first integration development",
    ],
    benefits: [
      "Faster innovation cycles",
      "Reduced technical debt",
      "Improved user adoption",
    ],
    cta: "Discuss app development",
  },
  {
    slug: "project-management",
    title: "Project Management Services",
    overview:
      "High-end project management and program delivery support for complex, multi-stakeholder enterprise initiatives.",
    capabilities: [
      "Strategic planning, governance, and KPIs",
      "Stakeholder and risk management",
      "Global program coordination across time zones",
      "Performance monitoring and structured reporting",
    ],
    benefits: [
      "More predictable delivery outcomes",
      "Better stakeholder alignment",
      "Reduced delivery risk and escalations",
    ],
    cta: "Talk to a delivery expert",
  },
  {
    slug: "integration-platforms",
    title: "Integration Platforms",
    overview:
      "Integration consulting and resource deployment to connect applications, data, and APIs across your enterprise landscape.",
    capabilities: [
      "API management and integration design",
      "ETL/data mapping and workflow automation",
      "Platform expertise: MuleSoft, Boomi, Azure Logic Apps, Apache Camel",
      "Integration monitoring and operational support",
    ],
    benefits: [
      "Faster system connectivity",
      "Improved data consistency",
      "Reduced manual effort and errors",
    ],
    cta: "Plan your integration roadmap",
  },
  {
    slug: "infrastructure-consulting",
    title: "Infrastructure Consulting",
    overview:
      "Infrastructure assessment, modernization, and operational enablement for secure, resilient IT environments.",
    capabilities: [
      "Infrastructure assessment and strategy (ITIL/COBIT aligned)",
      "Network design and optimization",
      "Identity and access management (SSO/MFA/RBAC)",
      "Disaster recovery and business continuity planning",
    ],
    benefits: [
      "Improved reliability and performance",
      "Stronger security posture",
      "Better cost control through modernization",
    ],
    cta: "Review your infrastructure",
  },
  {
    slug: "legacy-systems",
    title: "Legacy Application Management",
    overview:
      "Operational support and modernization enablement for business-critical legacy applications in regulated environments.",
    capabilities: [
      "Legacy app maintenance and reliability engineering",
      "Security hardening for older stacks",
      "Integration with modern platforms via APIs and middleware",
      "Modernization planning and phased transition support",
    ],
    benefits: [
      "Higher uptime for critical systems",
      "Reduced operational risk",
      "Smoother modernization without disruption",
    ],
    cta: "Stabilize legacy systems",
  },
  {
    slug: "cybersecurity-consulting",
    title: "Cybersecurity Consulting",
    overview:
      "Security assessment, threat response enablement, and governance support to protect enterprise systems and data.",
    capabilities: [
      "Vulnerability assessment and penetration testing",
      "Application security testing (SAST/DAST/IAST)",
      "SOC enablement and incident response planning",
      "Cloud security and compliance (NIST/ISO/GDPR aligned)",
    ],
    benefits: [
      "Reduced security exposure",
      "Improved compliance readiness",
      "Faster detection and response",
    ],
    cta: "Assess security posture",
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
    "Relevance Infosystems Pvt Ltd is an IT services provider based in India, founded in 2018. We specialize in technology consulting and enterprise delivery across ERP, cloud, infrastructure, integration, cybersecurity, legacy systems, and application development.",
  mission:
    "To deliver enterprise-grade technology consulting and delivery that creates measurable business outcomes — with speed, quality, and accountability.",
  vision:
    "To become a trusted transformation partner for organizations building future-ready digital operations.",
  globalDelivery:
    "Our global delivery model combines deep requirement discovery, expert-led screening, and fast deployment of the right consultants — backed by distributed delivery for 24/7 support and rapid outcomes.",
  leadership: [
    "CEO / Managing Director (Placeholder)",
    "Chief Delivery Officer (Placeholder)",
    "Head of Enterprise Solutions (Placeholder)",
  ],
};

export const contactInfo = {
  email: "contact@relevins.com",
  phone: "+91 9740082668",
  hours: "Monday to Friday, 9 AM to 6 PM (IST)",
};
