import { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { contactInfo } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Relevance Infosystems experts about ERP consulting, cloud transformation, and enterprise technology initiatives.",
};

export default function ContactPage() {
  return (
    <div className="container-enterprise py-16">
      <SectionHeading
        title="Contact Our Experts"
        subtitle="Tell us about your ERP and digital transformation goals. Our team responds quickly."
      />
      <div className="grid gap-8 md:grid-cols-5">
        <div className="md:col-span-3">
          <ContactForm />
        </div>
        <aside className="md:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Global Delivery Support</h2>
          <p className="mt-3 text-slate-600">
            We operate with a global delivery model and provide 24/7 support for
            enterprise-grade solutions across regions and time zones.
          </p>
          <div className="mt-6 space-y-3 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
            <div>
              <p className="font-semibold text-slate-900">Email</p>
              <p className="mt-1">{contactInfo.email}</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Phone</p>
              <p className="mt-1">{contactInfo.phone}</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Hours</p>
              <p className="mt-1">{contactInfo.hours}</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
