import { MapPin, Phone, Mail, MessageCircle, Instagram, Facebook } from "lucide-react";
import Logo from "./Logo";
import { COMPANY, NAV_LINKS, PRINCIPALS, buildWaLink } from "../constants";

export default function Footer() {
  return (
    <footer className="bg-wic-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint-light opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand block */}
          <div className="lg:col-span-5">
            <Logo className="h-14" />
            <p className="mt-6 text-wic-100/70 text-sm leading-relaxed max-w-md">
              Distributor resmi dan kontraktor spesialis untuk produk Hisense, Philips, dan Siemens. Melayani proyek MEP di seluruh Indonesia sejak 2010.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-wic-400 flex-shrink-0 mt-0.5" strokeWidth={1.75} />
                <p className="text-sm text-wic-100/80 leading-relaxed">
                  {COMPANY.address}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-wic-400 flex-shrink-0" strokeWidth={1.75} />
                <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="text-sm text-wic-100/80 hover:text-white transition-colors">
                  {COMPANY.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-wic-400 flex-shrink-0" strokeWidth={1.75} />
                <a href={`mailto:${COMPANY.email}`} className="text-sm text-wic-100/80 hover:text-white transition-colors">
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 lg:col-start-7">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-ruby-500 mb-6 font-bold">
              NAVIGASI
            </div>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-wic-100/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Principals */}
          <div className="lg:col-span-3">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-ruby-500 mb-6 font-bold">
              AUTHORIZED PARTNERS
            </div>
            <ul className="space-y-3">
              {PRINCIPALS.map((p) => (
                <li key={p.brand}>
                  <span className="font-display text-base font-bold text-white">{p.brand}</span>
                  <span className="block text-xs text-wic-100/50 mt-0.5">{p.category}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-6 md:items-center justify-between">
          <div className="text-xs text-wic-100/60">
            © {new Date().getFullYear()} {COMPANY.name}. Seluruh hak dilindungi.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={buildWaLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-wic-100/80 hover:text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-xs text-wic-100/80 hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-xs text-wic-100/80 hover:text-white transition-colors"
            >
              <Facebook className="w-4 h-4" />
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
