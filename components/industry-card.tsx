export function IndustryCard({ industry }: { industry: string }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm hover:shadow-md">
      <h3 className="text-lg font-semibold text-slate-900">{industry}</h3>
      <p className="mt-2 text-sm text-slate-600">
        Industry-tailored ERP and digital solutions built for measurable impact.
      </p>
    </article>
  );
}
