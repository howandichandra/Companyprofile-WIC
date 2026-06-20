import { motion } from "framer-motion";
import { Snowflake, Lightbulb, Zap, ArrowUpRight, Check } from "lucide-react";
import { PRINCIPALS, buildWaLink } from "../constants";

const BRAND_ICONS = {
  Hisense: Snowflake,
  Philips: Lightbulb,
  Siemens: Zap,
};

// Visual brand styling — gradient lingkaran behind product
// wordmark: tampilan nama brand dengan warna & gaya resmi masing-masing
const BRAND_VISUALS = {
  Hisense: {
    bgGradient: "from-sky-100 via-blue-50 to-white",
    iconBg: "bg-gradient-to-br from-sky-500 to-blue-600",
    accent: "text-blue-600",
    wordmark: { text: "Hisense", color: "#00923F", className: "tracking-tight" },
  },
  Philips: {
    bgGradient: "from-blue-100 via-indigo-50 to-white",
    iconBg: "bg-gradient-to-br from-blue-600 to-indigo-700",
    accent: "text-blue-700",
    wordmark: { text: "PHILIPS", color: "#0B5EA8", className: "tracking-[0.12em]" },
  },
  Siemens: {
    bgGradient: "from-cyan-100 via-sky-50 to-white",
    iconBg: "bg-gradient-to-br from-cyan-500 to-teal-600",
    accent: "text-teal-700",
    wordmark: { text: "SIEMENS", color: "#009999", className: "tracking-[0.08em]" },
  },
};

// Wordmark brand — nama brand bergaya, pakai warna identitas resmi
function BrandWordmark({ wordmark }) {
  return (
    <span
      className={`font-display font-extrabold text-xl leading-none ${wordmark.className}`}
      style={{ color: wordmark.color }}
    >
      {wordmark.text}
    </span>
  );
}

function PrincipalCard({ principal, index }) {
  const visual = BRAND_VISUALS[principal.brand];
  const Icon = BRAND_ICONS[principal.brand];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group relative bg-white rounded-3xl border-2 border-wic-100 hover:border-wic-500 hover:shadow-wic-glow transition-all duration-500 overflow-hidden"
    >
      {/* Top section — gambar besar lingkaran ala poster */}
      <div className={`relative bg-gradient-to-br ${visual.bgGradient} p-8 pb-0 overflow-hidden h-72`}>
        {/* WIC logo + Brand wordmark bar */}
        <div className="relative z-10 flex items-center justify-between mb-4">
          <img
            src="/logo-wic-mark.png"
            alt="WIC"
            className="h-9 w-auto select-none"
            draggable={false}
          />
          <BrandWordmark wordmark={visual.wordmark} />
        </div>

        {/* Title */}
        <h3 className="relative z-10 font-display text-xl font-extrabold text-wic-900 leading-tight max-w-xs">
          {principal.title}
        </h3>

        {/* Big circle background — kayak poster */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[110%] aspect-square rounded-full bg-white/60 backdrop-blur-sm border border-white/80" />

        {/* Product icon di tengah */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
          <div className={`w-28 h-28 rounded-3xl ${visual.iconBg} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
            <Icon className="w-14 h-14 text-white" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      {/* Bottom section — content */}
      <div className="p-8">
        {/* Category badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 bg-ruby-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
            <span className="w-1 h-1 rounded-full bg-white" />
            RESMI
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-wic-700">
            {principal.category}
          </span>
        </div>

        <p className={`text-sm italic ${visual.accent} mb-4 font-medium`}>
          {principal.subtitle}
        </p>

        <p className="text-sm text-wic-800/80 leading-relaxed mb-6">
          {principal.description}
        </p>

        {/* Product list dengan checkbox merah (sama persis kayak poster) */}
        <ul className="space-y-2.5 mb-6">
          {principal.products.map((product) => (
            <li key={product} className="flex items-start gap-2.5 text-sm text-wic-900">
              <span className="flex-shrink-0 w-5 h-5 mt-0.5 bg-white border-2 border-ruby-500 rounded flex items-center justify-center">
                <Check className="w-3 h-3 text-ruby-500" strokeWidth={3.5} />
              </span>
              <span className="font-medium">{product}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={buildWaLink(`Halo WIC, saya ingin info lebih lanjut tentang ${principal.brand} untuk proyek saya. Mohon penawaran terbaik.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn w-full inline-flex items-center justify-center gap-2 bg-wic-900 text-white px-5 py-3.5 rounded-full text-sm font-bold hover:bg-wic-500 transition-all duration-300"
        >
          Minta Penawaran {principal.brand}
          <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}

export default function Products() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-sky-tint relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-blueprint opacity-60" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-wic-200/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-20 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-ruby-500 mb-6 font-bold">
              ━━ LINI PRODUK
            </div>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.05] tracking-tight text-wic-900">
              Tiga principal,
              <span className="block text-wic-500">satu standar pengerjaan.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4 text-wic-800/80 leading-relaxed"
          >
            Distributor resmi untuk brand global yang sudah teruji di proyek-proyek besar di Indonesia. Setiap unit datang dengan dokumentasi dan garansi resmi.
          </motion.p>
        </div>

        {/* Grid 3 brand cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PRINCIPALS.map((principal, i) => (
            <PrincipalCard key={principal.id} principal={principal} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
