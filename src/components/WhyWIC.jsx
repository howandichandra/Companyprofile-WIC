import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { WHY_WIC, buildWaLink } from "../constants";

export default function WhyWIC() {
  return (
    <section id="why" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header — gaya banner biru kayak poster */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-wic-500 text-white px-6 py-2 rounded-full mb-6 shadow-wic-glow">
            <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold">
              ━━ KEUNGGULAN
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.05] tracking-tight text-wic-900 max-w-3xl mx-auto">
            Kenapa Pilih
            <span className="text-wic-500"> WIC?</span>
          </h2>
          <p className="mt-6 text-lg text-wic-800/80 max-w-2xl mx-auto">
            Enam alasan kontraktor, developer, dan project owner kembali ke WIC setiap proyek baru.
          </p>
        </motion.div>

        {/* Grid 6 keunggulan */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {WHY_WIC.map((item, i) => {
            const Icon = Icons[item.icon] || Icons.Check;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative bg-white border-2 border-wic-100 rounded-2xl p-6 lg:p-7 hover:border-wic-500 hover:shadow-wic-glow hover:-translate-y-1 transition-all duration-500"
              >
                {/* Top: icon + checkbox merah */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-wic-500 to-wic-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-md">
                    <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <div className="w-7 h-7 bg-white border-2 border-ruby-500 rounded flex items-center justify-center">
                    <Icons.Check className="w-4 h-4 text-ruby-500" strokeWidth={3.5} />
                  </div>
                </div>

                {/* Counter */}
                <div className="text-xs font-mono text-wic-500/60 font-bold mb-2">
                  0{i + 1} / 06
                </div>

                <h3 className="font-display text-xl font-extrabold text-wic-900 leading-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-wic-800/75">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA banner — mimicking the "Hubungi WIC" button dari poster */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-r from-wic-500 to-wic-700 rounded-3xl p-8 lg:p-12 overflow-hidden shadow-wic-glow"
        >
          <div className="absolute inset-0 bg-blueprint-light opacity-50" />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

          <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-6 justify-between">
            <div>
              <p className="text-wic-100 text-xs font-mono uppercase tracking-[0.2em] mb-3 font-bold">
                Hubungi WIC
              </p>
              <h3 className="font-display text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                Chat untuk penawaran terbaik
              </h3>
              <p className="text-wic-100/80 mt-2 max-w-lg">
                Respons cepat dari marketing kami. Diskusi langsung scope, spesifikasi, dan harga.
              </p>
            </div>
            <a
              href={buildWaLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-3 bg-white text-wic-900 px-8 py-5 rounded-2xl text-lg font-extrabold hover:bg-wic-50 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <Icons.Phone className="w-5 h-5 text-ruby-500" />
              +62 823 9138 0999
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
