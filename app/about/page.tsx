import { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { aboutContent } from "@/data/site-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Relevance Infosystems mission, vision, global delivery capability, and leadership team.",
};

export default function AboutPage() {
  return (
    <div className="container-enterprise py-16">
      <SectionHeading
        title="About Relevance Infosystems"
        subtitle={aboutContent.overview}
      />
      <div className="grid gap-6 md:grid-cols-2">
        <AnimatedSection className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Vision</h2>
          <p className="mt-3 text-slate-600">{aboutContent.vision}</p>
        </AnimatedSection>
        <AnimatedSection className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Mission</h2>
          <p className="mt-3 text-slate-600">{aboutContent.mission}</p>
        </AnimatedSection>
      </div>
      <AnimatedSection className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Global Delivery Capability</h2>
        <p className="mt-3 text-slate-600">{aboutContent.globalDelivery}</p>
      </AnimatedSection>
      <AnimatedSection className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Leadership</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          {aboutContent.leadership.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
      </AnimatedSection>
    </div>
  );
}
