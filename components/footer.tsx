import Link from "next/link";
import { navLinks } from "@/data/site-content";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="container-enterprise py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold text-slate-900">Relevance Infosystems Pvt Ltd</p>
            <p className="text-sm text-slate-500">
              Enterprise-grade ERP consulting and global IT services.
            </p>
          </div>
          <nav>
            <ul className="flex flex-wrap gap-4 text-sm text-slate-600">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-blue-600">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
