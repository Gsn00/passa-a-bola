import { motion } from "framer-motion";
import ActionButton from "../../components/actionbutton";
import Polaroid from "../../components/polaroid";

export default function Content03() {
  return (
    <div className="w-full lg:h-[70vh] flex flex-col lg:flex-row">
      <div className="w-full lg:w-[50%] h-full flex flex-col gap-10 justify-center px-10 lg:px-30">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-bold font-[Montserrat] text-4xl lg:text-5xl text-[#9D10A2]! relative tracking-wide"
        >
          Informação e História
          <div className="absolute w-[140px] lg:w-[200px] h-1.5 lg:h-1 bg-[#5C0C5F] -bottom-5"></div>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="tracking-widest font-[Poppins] text-sm lg:text-lg text-justify"
        >
          O futebol feminino tem histórias incríveis de superação e vitórias.
          Descubra curiosidades, dados e inspirações que mostram a força do
          jogo.
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <ActionButton href="/historia" title="Explore a História" />
        </motion.div>
      </div>
      <div className="w-[90%] mx-auto lg:w-[50%] py-10 md:py-0 flex justify-center items-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: -3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <Polaroid
            className="w-full md:w-[90%] px-1 pt-1 pb-6 md:px-2 md:pt-2 md:pb-12"
            img="/images/historia-home02.jpg"
          />
        </motion.div>
      </div>
    </div>
  );
}
