import { motion } from "motion/react";

export default function SectionTitle({ textgray, textpurple }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-lg:px-5 size-fit mx-auto mb-20 text-center gap-4"
    >
      <h1 className="text-[#690A6C]! text-4xl lg:text-5xl font-bold font-[League_Spartan]">
        {textgray}
      </h1>
      <h1 className="text-4xl lg:text-5xl font-bold font-[League_Spartan]">
        {textpurple}
      </h1>
    </motion.div>
  );
}
