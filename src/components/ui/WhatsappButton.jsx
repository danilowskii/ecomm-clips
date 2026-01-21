import { FaWhatsapp } from "react-icons/fa";
import { motion } from "motion/react";

export default function WhatsAppButton() {
  const waMe =
    "https://wa.me/5511966052171?text=Olá,%20gostaria%20de%20começar%20com%20a%20Ecomm%20Clips.";
  return (
    <motion.a
      href={waMe}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>

      {/* O Ícone em si */}
      <FaWhatsapp className="text-white text-3xl relative z-10" />
    </motion.a>
  );
}
