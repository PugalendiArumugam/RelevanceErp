import { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { CaseStudyCard } from "@/components/case-study-card";
import { HeroSection } from "@/components/hero-section";
import { IndustryCard } from "@/components/industry-card";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { Button } from "@/components/ui/button";
import { caseStudies, homeContent, services, testimonials } from "@/data/site-content";

export const metadata: Metadata = {
  title: "ERP Consulting & Digital Transformation",
  description:
    "Relevance Infosystems helps global enterprises modernize ERP systems with cloud, data, and AI-led transformation services.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="container-enterprise space-y-20 py-16">
        <AnimatedSection>
          <SectionHeading
            title="Enterprise ERP Focus"
            subtitle="Deep platform expertise across SAP, Oracle, and Microsoft Dynamics for implementation, migration, and support."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {homeContent.erpFocus.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.details}</p>
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <SectionHeading title="Services" />
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <SectionHeading title="Industries We Serve" />
          <div className="grid gap-5 md:grid-cols-4">
            {homeContent.industries.map((industry) => (
              <IndustryCard key={industry} industry={industry} />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <SectionHeading title="Why Choose Us" />
          <div className="grid gap-4 md:grid-cols-2">
            {homeContent.whyChooseUs.map((item) => (
              <article
                key={item}
                className="rounded-xl border border-slate-200 bg-white p-5 text-slate-700 shadow-sm"
              >
                {item}
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <SectionHeading title="Case Studies" />
          <div className="grid gap-5 md:grid-cols-3">
            {caseStudies.slice(0, 3).map((caseStudy) => (
              <CaseStudyCard key={caseStudy.title} caseStudy={caseStudy} />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <SectionHeading title="Client Testimonials" />
          <div className="grid gap-5 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="rounded-2xl bg-blue-600 px-8 py-14 text-white">
          <h2 className="text-3xl font-bold">{homeContent.finalCta.heading}</h2>
          <p className="mt-3 max-w-3xl text-blue-100">{homeContent.finalCta.subtext}</p>
          <div className="mt-8">
            <Button
              href="/contact"
              label="Talk to Experts"
              className="!border !border-white/40 !bg-white/50 !text-blue-800 !backdrop-blur-sm hover:!bg-white/70"
            />
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
