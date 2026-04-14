import { Service } from "@/data/site-content";
import { Button } from "@/components/ui/button";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
      <p className="mt-3 text-slate-600">{service.overview}</p>
      <ul className="mt-5 space-y-2 text-sm text-slate-600">
        {service.capabilities.slice(0, 3).map((capability) => (
          <li key={capability}>- {capability}</li>
        ))}
      </ul>
      <Button
        label={service.cta}
        href="/contact"
        variant="secondary"
        className="mt-6"
      />
    </article>
  );
}
