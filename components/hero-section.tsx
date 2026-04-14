import Image from "next/image";
import { homeContent } from "@/data/site-content";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const bannerImages = [
    "/images/truck1.jpg",
    "/images/truck2.jpg",
    "/images/truck3.jpg",
  ];

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0">
        {bannerImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt="Enterprise operations background banner"
            fill
            priority={index === 0}
            sizes="100vw"
            className="hero-banner-slide object-cover"
            style={{ animationDelay: `${index * 4}s` }}
          />
        ))}
        <div className="absolute inset-0 bg-slate-900/55" />
      </div>

      <div className="container-enterprise relative z-10">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-blue-200 bg-white/95 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-700">
            ERP Consulting & Global IT Services
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
            {homeContent.hero.headline}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-100">
            {homeContent.hero.subtext}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button label={homeContent.hero.ctaPrimary} href="/contact" />
            <Button
              label={homeContent.hero.ctaSecondary}
              href="/services"
              variant="secondary"
              className="border-white/70 bg-white/90 text-slate-900 hover:bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
