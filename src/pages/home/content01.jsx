import { motion } from "framer-motion";
import ActionButton from "../../components/actionbutton";

export default function Content01() {
  return (
    <div className="w-full lg:h-[68vh] flex flex-col lg:flex-row">
      <div className="w-full lg:w-[50%] h-full flex flex-col gap-10 justify-center px-10 lg:px-30">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-bold font-[Montserrat] text-4xl lg:text-5xl text-[#9D10A2]! relative tracking-wide"
        >
          Passa a Bola
          <div className="absolute w-[140px] lg:w-[200px] h-1.5 lg:h-1 bg-[#5C0C5F] -bottom-5"></div>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="tracking-wide font-[Poppins] text-sm lg:text-lg text-justify"
        >
          O Passa a Bola nasceu com um propósito claro: fortalecer a presença
          das mulheres no futebol e abrir caminhos reais para quem sonha em ir
          além dos treinos. Aqui, o esporte é levado a sério — e o talento
          feminino, valorizado.
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <ActionButton href="/sobre" title="Saiba Mais" />
        </motion.div>
      </div>

      <div className="w-[90%] mx-auto lg:w-[50%] flex justify-center items-center">
        <motion.img
          src="/images/home-img-01.png"
          alt=""
          whileHover={{ rotate: 3 }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        />
      </div>
    </div>
  );
}
