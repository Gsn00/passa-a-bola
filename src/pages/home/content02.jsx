import { motion } from "framer-motion";
import ActionButton from "../../components/actionbutton";
import Polaroid from "../../components/polaroid";

export default function Content02() {
  return (
    <div className="w-full h-fit lg:h-[70vh] flex flex-col lg:flex-row">
      <div className="w-full lg:w-[50%] h-full flex flex-col gap-10 justify-center px-10 lg:px-30">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-bold font-[Montserrat] text-3xl md:text-4xl lg:text-5xl text-[#9D10A2]! relative tracking-wide"
        >
          Oportunidades no Futebol Feminino
          <div className="absolute w-[140px] lg:w-[200px] h-1.5 lg:h-1 bg-[#5C0C5F] -bottom-5"></div>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="tracking-widest font-[Poppins] text-sm lg:text-lg text-justify"
        >
          Muito além dos treinos, o{" "}
          <span className="font-semibold">Passa a Bola</span> conecta atletas a
          peneiras, campeonatos e oportunidades reais dentro do futebol.
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <ActionButton href="/peneiras" title="Encontre Oportunidades" />
        </motion.div>
      </div>
      <div className="w-full md:w-[90%] py-10 mx-auto lg:w-[50%] flex justify-center items-center relative">
        <motion.div
          initial={{ opacity: 0, x: -100, rotate: -10 }}
          animate={{ opacity: 1, x: 40, rotate: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <Polaroid
            className="w-full max-w-[400px] aspect-square px-1 pt-1 pb-6 md:px-2 md:pt-2 md:pb-12"
            img="/images/peneiras.png"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100, rotate: 10 }}
          animate={{ opacity: 1, x: -40, rotate: -5 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative"
        >
          <Polaroid
            className="w-full max-w-[400px] aspect-square px-1 pt-1 pb-6 md:px-2 md:pt-2 md:pb-12"
            img="/images/peneiras02.jpeg"
          />
        </motion.div>
      </div>
    </div>
  );
}
