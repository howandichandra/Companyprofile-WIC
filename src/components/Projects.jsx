import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { PROJECT_TYPES, CLIENT_SEGMENTS } from "../constants";

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-ruby-500 mb-6 font-bold">
            ━━ PROYEK & KLIEN
          </div>
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.05] tracking-tight text-wic-900">
            500+ proyek
            <span className="block text-wic-500">di belakang kami.</span>
          </h2>
          <p className="mt-6 text-wic-800/80 leading-relaxed max-w-xl">
            Lima belas tahun melayani berbagai skala proyek, dari hunian satuan sampai kompleks industrial — semuanya dengan standar pengerjaan yang sama.
          </p>
        </motion.div>

        {/* Grid project types */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {PROJECT_TYPES.map((type, i) => {
            const Icon = Icons[type.icon] || Icons.Building;
            return (
              <motion.div
                key={type.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative bg-gradient-to-br from-wic-50 to-white border-2 border-wic-100 rounded-2xl p-7 hover:border-wic-500 hover:shadow-wic-glow hover:-translate-y-1 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-wic-200/40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-white border-2 border-wic-100 group-hover:border-wic-500 group-hover:bg-wic-500 flex items-center justify-center mb-5 transition-all duration-500">
                    <Icon className="w-7 h-7 text-wic-700 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl font-extrabold text-wic-900 mb-2">
                    {type.label}
                  </h3>
                  <p className="text-sm font-mono text-ruby-500 font-bold">
                    {type.count}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Client segments */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-wic-500 to-wic-700 rounded-3xl p-10 lg:p-16 overflow-hidden shadow-wic-glow"
        >
          <div className="absolute inset-0 bg-blueprint-light opacity-50" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

          <div className="relative">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-wic-100 mb-6 font-bold">
              ━━ DIPERCAYA OLEH
            </div>
            <h3 className="font-display text-3xl lg:text-4xl font-extrabold text-white mb-10 max-w-2xl">
              Pelaku bisnis di berbagai sektor:
            </h3>
            <div className="flex flex-wrap gap-3">
              {CLIENT_SEGMENTS.map((segment, i) => (
                <motion.span
                  key={segment}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2.5 text-sm font-semibold text-white hover:bg-white hover:text-wic-900 transition-all duration-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-ruby-500" />
                  {segment}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
