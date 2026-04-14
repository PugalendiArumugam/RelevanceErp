import { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { services } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore ERP consulting, cloud transformation, data and AI, and custom enterprise application services.",
};

export default function ServicesPage() {
  return (
    <div className="container-enterprise py-16">
      <SectionHeading
        title="Services"
        subtitle="Scalable, enterprise-grade consulting and technology services for global organizations."
      />
      <div className="space-y-8">
        {services.map((service) => (
          <AnimatedSection
            key={service.slug}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-slate-900">{service.title}</h2>
            <p className="mt-3 text-slate-600">{service.overview}</p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Key Capabilities
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {service.capabilities.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Benefits
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {service.benefits.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <Button label={service.cta} href="/contact" className="mt-6" />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
