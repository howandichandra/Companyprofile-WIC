import { motion } from "framer-motion";
import { Target, Compass, Award } from "lucide-react";

const PILLARS = [
  {
    icon: Target,
    label: "MISI",
    title: "Solusi proyek yang bisa diandalkan.",
    description:
      "Menghadirkan produk asli, instalasi presisi, dan dukungan teknis berkelanjutan — dari hunian sampai gedung industrial.",
  },
  {
    icon: Compass,
    label: "VISI",
    title: "Mitra teknis pilihan industri Indonesia.",
    description:
      "Menjadi rekanan utama kontraktor, developer, dan project owner di seluruh nusantara — dikenal karena kualitas, transparansi, dan after-sales konsisten.",
  },
  {
    icon: Award,
    label: "NILAI",
    title: "Resmi, presisi, dan akuntabel.",
    description:
      "Setiap unit yang kami kirim adalah produk principal resmi dengan garansi penuh. Setiap pekerjaan ditangani teknisi bersertifikat.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* LEFT — story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-32 self-start"
          >
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-ruby-500 mb-6 font-bold">
              ━━ TENTANG KAMI
            </div>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.05] tracking-tight text-wic-900">
              Lima belas tahun
              <span className="block text-wic-500">membangun</span>
              kepercayaan.
            </h2>

            <div className="mt-8 space-y-5 text-wic-800/85 leading-relaxed">
              <p>
                <strong className="text-wic-900">PT Warni Indah Cemerlang</strong> berdiri tahun 2010 sebagai distributor resmi dengan satu prinsip — proyek besar atau kecil, semuanya berhak dapat produk asli dan layanan yang serius.
              </p>
              <p>
                Berbasis di <strong className="text-wic-900">Pekanbaru</strong>, kami melayani proyek dari hunian satuan sampai gedung dengan ribuan titik instalasi. Bekerja sama dengan kontraktor, developer, konsultan engineering, dan project owner di seluruh Indonesia.
              </p>
              <p>
                Yang membedakan kami: produk yang kami janjikan adalah yang sampai, tim teknis kami yang turun ke lapangan, dan after-sales tetap responsif lama setelah serah terima.
              </p>
            </div>

            {/* Founder note style */}
            <div className="mt-10 p-6 bg-wic-50 border-l-4 border-ruby-500 rounded-r-xl">
              <p className="font-display italic text-lg text-wic-900 leading-snug">
                "Kami tidak menjual barang. Kami membangun infrastruktur teknis yang bisa dipercaya pemilik proyek selama puluhan tahun."
              </p>
            </div>
          </motion.div>

          {/* RIGHT — pillars */}
          <div className="lg:col-span-7 space-y-4">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative bg-gradient-to-br from-wic-50 to-white rounded-3xl p-8 lg:p-10 border-2 border-wic-100 hover:border-wic-500 hover:shadow-wic-soft transition-all duration-500"
              >
                {/* Number besar */}
                <div className="absolute top-6 right-6 font-display text-7xl lg:text-8xl font-extrabold text-wic-100 group-hover:text-wic-200 transition-colors leading-none select-none">
                  0{i + 1}
                </div>

                <div className="relative flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-wic-500 group-hover:bg-wic-900 transition-colors duration-500 flex items-center justify-center shadow-wic-glow">
                      <pillar.icon className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-mono uppercase tracking-[0.2em] text-ruby-500 mb-2 font-bold">
                      {pillar.label}
                    </div>
                    <h3 className="font-display text-2xl lg:text-3xl font-extrabold text-wic-900 leading-tight">
                      {pillar.title}
                    </h3>
                    <p className="mt-4 text-wic-800/80 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
