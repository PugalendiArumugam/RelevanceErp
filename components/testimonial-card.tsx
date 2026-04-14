type Testimonial = {
  quote: string;
  name: string;
  company: string;
};

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-slate-700">"{testimonial.quote}"</p>
      <p className="mt-4 text-sm font-semibold text-slate-900">{testimonial.name}</p>
      <p className="text-sm text-slate-500">{testimonial.company}</p>
    </article>
  );
}
