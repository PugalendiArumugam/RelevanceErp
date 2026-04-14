import { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { CaseStudyCard } from "@/components/case-study-card";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real enterprise transformation outcomes delivered through ERP modernization and global IT services.",
};

export default function CaseStudiesPage() {
  return (
    <div className="container-enterprise py-16">
      <SectionHeading
        title="Case Studies"
        subtitle="Selected transformation stories with measurable business impact."
      />
      <AnimatedSection className="grid gap-6 md:grid-cols-3">
        {caseStudies.map((item) => (
          <CaseStudyCard key={item.title} caseStudy={item} />
        ))}
      </AnimatedSection>
    </div>
  );
}
