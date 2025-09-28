import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CardQuestion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={() => toggleOpen()}
      className={`flex flex-col pt-5 pb-4 px-4 rounded-2xl bg-white/50 shadow-sm cursor-pointer select-none ${
        isOpen ? "bg-white/100" : ""
      } transition-all duration-300`}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">{question}</h3>
        <ChevronDown
          size={28}
          strokeWidth={1}
          className={`${
            isOpen ? "rotate-180" : ""
          } transition-all duration-300`}
        />
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.2, ease: "easeInOut" },
                opacity: { duration: 0.1, ease: "easeInOut", delay: 0.2 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.2, ease: "easeInOut" },
                opacity: { duration: 0.1, ease: "easeInOut" },
              },
            }}
          >
            <p className="font-light pt-3 text-[#707070]!">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
