"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, X } from "lucide-react";

export default function LanguageToggle() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEnglishClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Botón flotante */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        onClick={handleEnglishClick}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-forest-900 text-ivory-50 px-4 py-3 rounded-full shadow-lg hover:bg-forest-800 transition-all active:scale-95 border border-sage-700 cursor-pointer"
      >
        <Globe size={20} />
        <span className="text-sm font-medium">English</span>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Modal content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-ivory-50 rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 border border-sage-200"
            >
              {/* Close button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-forest-600 hover:text-forest-900 transition-colors"
              >
                <X size={24} />
              </button>

              {/* Content */}
              <div className="text-center">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="inline-block mb-4"
                >
                  <span className="text-6xl">🚧</span>
                </motion.div>

                <h3 className="text-2xl font-bold text-forest-900 mb-3">
                  Próximamente...
                </h3>

                <p className="text-forest-700 leading-relaxed">
                  Estoy aprendiendo como hacer sistemas internacionales 😅
                  <br />
                  <span className="text-sage-600 text-sm">
                    Por ahora solo está disponible en español.
                  </span>
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsModalOpen(false)}
                  className="mt-6 bg-forest-900 text-ivory-50 px-6 py-3 rounded-full font-medium hover:bg-forest-800 transition-colors"
                >
                  Entendido
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
