import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { buildWaLink } from "../constants";

export default function FloatingWA() {
  return (
    <motion.a
      href={buildWaLink()}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Hubungi via WhatsApp"
    >
      <div className="absolute inset-0 bg-wic-500 rounded-full animate-ping opacity-25" />
      <div className="relative flex items-center gap-3 bg-wic-500 text-white pl-4 pr-5 py-3.5 rounded-full shadow-wic-glow hover:bg-wic-700 transition-colors">
        <MessageCircle className="w-5 h-5" strokeWidth={2.25} />
        <span className="hidden sm:inline text-sm font-bold">Chat Marketing</span>
      </div>
    </motion.a>
  );
}
