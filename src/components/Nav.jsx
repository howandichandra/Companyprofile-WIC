import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS, buildWaLink, COMPANY } from "../constants";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar — info kantor */}
      <div className="hidden lg:block bg-wic-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <span className="text-wic-100/80">📍 {COMPANY.city}</span>
            <span className="text-wic-100/80">⏰ Senin–Jumat 08.00–17.00 WIB</span>
          </div>
          <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-wic-200 transition-colors">
            <Phone className="w-3 h-3" />
            <span className="font-medium">{COMPANY.phoneDisplay}</span>
          </a>
        </div>
      </div>

      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`sticky top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-wic-100 shadow-sm"
            : "bg-white border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center">
            <Logo className="h-12 lg:h-14" />
          </a>

          <nav className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-wic-900 hover:text-wic-500 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-wic-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={buildWaLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-wic-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-wic-700 hover:shadow-wic-glow transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Hubungi Kami</span>
            </a>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden p-2 -mr-2 text-wic-900"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-wic-900 lg:hidden"
          >
            <div className="h-20 px-6 flex items-center justify-between border-b border-white/10">
              <Logo className="h-10" />
              <button
                onClick={() => setOpen(false)}
                className="p-2 -mr-2 text-white"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="px-6 py-10 flex flex-col gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="text-2xl font-display font-semibold text-white py-3 border-b border-white/10 hover:text-wic-200 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={buildWaLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 bg-white text-wic-900 px-6 py-4 rounded-full text-base font-bold"
              >
                <MessageCircle className="w-5 h-5" />
                Hubungi Marketing
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
