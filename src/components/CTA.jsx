import { motion } from "framer-motion";
import { MessageCircle, FileText, ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import { buildWaLink, COMPANY } from "../constants";

export default function CTA() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-to-br from-sky-tint via-white to-wic-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] glow-blue" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-ruby-500 mb-6 font-bold">
            ━━ MULAI PROYEK ANDA
          </div>
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.05] tracking-tight text-wic-900">
            Punya proyek?
            <span className="block text-wic-500">Ngobrol dulu, tanpa komitmen.</span>
          </h2>
          <p className="mt-6 text-lg text-wic-800/80 leading-relaxed">
            Kirim scope proyek atau pertanyaan via WhatsApp — tim marketing kami biasanya merespons dalam jam kerja yang sama.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* LEFT — 2 CTA cards */}
          <div className="lg:col-span-7 space-y-5">
            {/* Primary — Konsultasi */}
            <motion.a
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              href={buildWaLink("Halo WIC, saya ingin konsultasi proyek dan mendapatkan penawaran. Detail proyek saya:")}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-gradient-to-br from-wic-500 to-wic-700 text-white rounded-3xl p-8 lg:p-10 hover:shadow-wic-glow hover:scale-[1.01] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-blueprint-light opacity-30" />
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider mb-4 text-wic-100">
                    <MessageCircle className="w-4 h-4" />
                    WHATSAPP · PRIORITAS
                  </div>
                  <h3 className="font-display text-3xl lg:text-4xl font-extrabold mb-3">
                    Konsultasi Proyek
                  </h3>
                  <p className="text-wic-100/85 leading-relaxed max-w-md">
                    Diskusi langsung scope, timeline, dan kebutuhan teknis dengan marketing — biasanya direspons dalam jam kerja yang sama.
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold">
                    <span>Chat sekarang</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                <div className="hidden sm:block flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </motion.a>

            {/* Secondary — RAB */}
            <motion.a
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              href={buildWaLink("Halo WIC, saya ingin meminta penawaran / RAB. Spesifikasi & quantity:")}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white border-2 border-wic-100 hover:border-wic-500 rounded-3xl p-8 lg:p-10 hover:shadow-wic-soft transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider mb-4 text-ruby-500 font-bold">
                    <FileText className="w-4 h-4" />
                    REQUEST PENAWARAN
                  </div>
                  <h3 className="font-display text-3xl lg:text-4xl font-extrabold text-wic-900 mb-3">
                    Minta RAB & Quotation
                  </h3>
                  <p className="text-wic-800/75 leading-relaxed max-w-md">
                    Kirim BOQ atau spesifikasi proyek — kami siapkan penawaran detail dalam 1×24 jam kerja.
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-wic-500 group-hover:text-wic-700">
                    <span>Kirim spesifikasi</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                <div className="hidden sm:block flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-wic-50 border-2 border-wic-100 group-hover:bg-ruby-500 group-hover:border-ruby-500 flex items-center justify-center transition-all duration-300">
                    <FileText className="w-8 h-8 text-wic-500 group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </motion.a>
          </div>

          {/* RIGHT — Contact info card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-wic-900 text-white rounded-3xl p-8 lg:p-10 h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-blueprint-light opacity-30" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-wic-500/20 rounded-full blur-3xl" />

              <div className="relative">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-ruby-500 mb-6 font-bold">
                  KANTOR PUSAT
                </div>
                <h3 className="font-display text-2xl font-extrabold text-white mb-8 leading-tight">
                  {COMPANY.name}
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-wic-200" strokeWidth={1.75} />
                    </div>
                    <div>
                      <div className="text-xs text-wic-200/60 font-mono uppercase tracking-wider mb-1">Alamat</div>
                      <p className="text-sm text-wic-100 leading-relaxed">
                        {COMPANY.address}
                      </p>
                    </div>
                  </div>

                  <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="flex items-start gap-3 hover:opacity-80 transition-opacity">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-wic-200" strokeWidth={1.75} />
                    </div>
                    <div>
                      <div className="text-xs text-wic-200/60 font-mono uppercase tracking-wider mb-1">Telepon / WhatsApp</div>
                      <p className="text-sm text-white font-semibold">{COMPANY.phoneDisplay}</p>
                      <p className="text-xs text-wic-200/70 mt-0.5">Marketing: {COMPANY.marketing}</p>
                    </div>
                  </a>

                  <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-3 hover:opacity-80 transition-opacity">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-wic-200" strokeWidth={1.75} />
                    </div>
                    <div>
                      <div className="text-xs text-wic-200/60 font-mono uppercase tracking-wider mb-1">Email</div>
                      <p className="text-sm text-white">{COMPANY.email}</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-wic-200" strokeWidth={1.75} />
                    </div>
                    <div>
                      <div className="text-xs text-wic-200/60 font-mono uppercase tracking-wider mb-1">Jam Operasional</div>
                      <p className="text-sm text-white">Senin – Jumat</p>
                      <p className="text-xs text-wic-200">08.00 – 17.00 WIB</p>
                    </div>
                  </div>
                </div>

                {/* Embedded map link */}
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block bg-white/5 hover:bg-white/10 border border-white/15 rounded-2xl p-4 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">Lihat di Google Maps</span>
                    <ArrowRight className="w-4 h-4 text-wic-200 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
