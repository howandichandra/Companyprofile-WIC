import { motion } from "framer-motion";
import { PROCESS } from "../constants";

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-wic-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-blueprint-light opacity-50" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-wic-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-ruby-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 lg:mb-20"
        >
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-ruby-500 mb-6 font-bold">
            ━━ CARA KERJA KAMI
          </div>
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.05] tracking-tight">
            Enam langkah,
            <span className="block text-wic-300">tanpa kejutan di tengah jalan.</span>
          </h2>
          <p className="mt-6 text-wic-100/80 leading-relaxed max-w-xl">
            Dari obrolan pertama sampai maintenance jangka panjang — setiap tahap punya output jelas, dokumentasi lengkap, dan tim yang accountable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {PROCESS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="relative group"
            >
              {/* Step number badge */}
              <div className="flex items-center gap-4 mb-5">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-wic-500 to-wic-700 flex items-center justify-center font-display text-2xl font-extrabold text-white shadow-wic-glow group-hover:scale-110 transition-transform duration-500">
                    {step.step}
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-ruby-500 border-2 border-wic-900" />
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-wic-300/40 to-transparent" />
              </div>

              <h3 className="font-display text-2xl font-extrabold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-wic-100/75 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
