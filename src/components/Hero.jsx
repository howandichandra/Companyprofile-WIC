import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck, Award, Truck } from "lucide-react";
import { buildWaLink, STATS } from "../constants";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-wic-950 via-wic-900 to-wic-700 pt-14 lg:pt-24 pb-24 lg:pb-36"
    >
      {/* Background ornaments — glow biru + grid blueprint */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[820px] h-[820px] bg-gradient-to-br from-wic-400/30 to-transparent rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[620px] h-[620px] bg-wic-500/25 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-ruby-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-blueprint-light opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT — content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-ruby-500 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-white">
                15 Tahun Distributor Resmi
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem] font-extrabold leading-[0.98] tracking-tight text-balance"
            >
              <span className="text-white">Spesialis</span>
              <span className="block text-wic-300">AC, Lampu &</span>
              <span className="block text-white">Panel Listrik</span>
              <span className="block text-wic-200 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold italic mt-2">
                untuk proyek Anda.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-lg lg:text-xl text-wic-100/85 max-w-xl leading-relaxed"
            >
              Distributor resmi <span className="font-bold text-white">Hisense</span>,{" "}
              <span className="font-bold text-white">Philips</span>, dan{" "}
              <span className="font-bold text-white">Siemens</span> — melayani proyek gedung, hotel, pabrik, mall, dan hunian sejak 2010.
            </motion.p>

            {/* Quick trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 flex flex-wrap gap-2.5"
            >
              {[
                { icon: ShieldCheck, text: "Resmi & Bergaransi" },
                { icon: Award, text: "Harga Proyek" },
                { icon: Truck, text: "Kirim Seluruh Indonesia" },
              ].map((b) => (
                <div
                  key={b.text}
                  className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3.5 py-1.5 text-xs font-semibold text-white"
                >
                  <b.icon className="w-3.5 h-3.5 text-ruby-500" />
                  {b.text}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a
                href={buildWaLink("Halo WIC, saya ingin konsultasi proyek dan minta penawaran terbaik. Mohon info lebih lanjut.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-white text-wic-700 px-7 py-4 rounded-full text-base font-bold hover:bg-wic-50 hover:shadow-wic-glow transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Chat untuk Penawaran Terbaik
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#products"
                className="group inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white px-7 py-4 rounded-full text-base font-bold hover:bg-white/10 hover:border-white transition-all"
              >
                Lihat Produk
              </a>
            </motion.div>
          </div>

          {/* RIGHT — hero card frosted glass dengan stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* Glow belakang card */}
              <div className="absolute -inset-6 bg-wic-400/20 rounded-[2.5rem] blur-2xl" />

              {/* Main card — frosted glass */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-[2rem] p-8 lg:p-10 overflow-hidden border border-white/20 shadow-2xl">
                <div className="absolute inset-0 bg-blueprint-light opacity-50" />
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-56 h-56 bg-wic-500/30 rounded-full blur-3xl" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-8">
                    <div className="text-xs font-mono uppercase tracking-[0.2em] text-wic-100">
                      Track Record
                    </div>
                    <div className="text-xs font-mono text-wic-200/70">
                      Sejak 2010
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                    {STATS.map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + i * 0.1 }}
                      >
                        <div className="font-display text-5xl lg:text-6xl font-extrabold text-white leading-none">
                          {stat.value}
                        </div>
                        <div className="mt-2 text-sm text-wic-100/80 font-medium">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-10 pt-6 border-t border-white/15">
                    <div className="flex items-center justify-between text-xs font-mono text-wic-100/70 uppercase tracking-wider mb-3">
                      <span>Authorized Partners</span>
                      <span className="bg-ruby-500 text-white px-2 py-0.5 rounded-full text-[10px] font-bold">RESMI</span>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-white font-display text-xl font-bold">Hisense</span>
                      <span className="text-wic-300">·</span>
                      <span className="text-white font-display text-xl font-bold">Philips</span>
                      <span className="text-wic-300">·</span>
                      <span className="text-white font-display text-xl font-bold">Siemens</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge atas */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
                animate={{ opacity: 1, scale: 1, rotate: -6 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute -top-4 -left-4 lg:-left-8 bg-white rounded-2xl shadow-xl px-4 py-3 border border-wic-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-ruby-500 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-wic-700 uppercase tracking-wider">Garansi</div>
                    <div className="text-sm font-bold text-wic-900">100% Resmi</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge bawah */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 8 }}
                animate={{ opacity: 1, scale: 1, rotate: 4 }}
                transition={{ delay: 1.2, type: "spring" }}
                className="absolute -bottom-4 -right-4 lg:-right-6 bg-white rounded-2xl shadow-xl px-4 py-3 border border-wic-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-wic-500 flex items-center justify-center">
                    <Truck className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-wic-700 uppercase tracking-wider">Kirim</div>
                    <div className="text-sm font-bold text-wic-900">Seluruh Indonesia</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee logos di bawah */}
      <div className="relative mt-20 lg:mt-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-center text-xs font-mono uppercase tracking-[0.25em] text-wic-100/60 mb-6">
            Distributor Resmi Untuk
          </p>
          <div className="flex items-center justify-center gap-x-12 lg:gap-x-24 gap-y-4 flex-wrap">
            <span className="font-display font-extrabold text-3xl lg:text-4xl text-white/50 hover:text-white transition-colors cursor-default">Hisense</span>
            <span className="text-wic-400">●</span>
            <span className="font-display font-extrabold text-3xl lg:text-4xl text-white/50 hover:text-white transition-colors cursor-default">PHILIPS</span>
            <span className="text-wic-400">●</span>
            <span className="font-display font-extrabold text-3xl lg:text-4xl text-white/50 hover:text-white transition-colors cursor-default">SIEMENS</span>
          </div>
        </div>
      </div>

      {/* Garis transisi halus ke section putih di bawah */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white/0 to-transparent pointer-events-none" />
    </section>
  );
}
