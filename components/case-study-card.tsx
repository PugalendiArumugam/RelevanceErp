import { CaseStudy } from "@/data/site-content";

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg">
      <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
        {caseStudy.industry}
      </p>
      <h3 className="mt-2 text-xl font-semibold text-slate-900">{caseStudy.title}</h3>
      <p className="mt-3 text-sm text-slate-600">
        <span className="font-semibold text-slate-700">Problem: </span>
        {caseStudy.problem}
      </p>
      <p className="mt-3 text-sm text-slate-600">
        <span className="font-semibold text-slate-700">Solution: </span>
        {caseStudy.solution}
      </p>
      <p className="mt-3 text-sm text-slate-600">
        <span className="font-semibold text-slate-700">Impact: </span>
        {caseStudy.impact}
      </p>
    </article>
  );
}
