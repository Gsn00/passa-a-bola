import { useEffect, useState } from "react";
import BulletPoint from "../../components/bulletpoint";
import Header from "../../components/header";
import HeaderMobile from "../../components/headermobile";
import Pagination from "../../components/pagination";
import { motion } from "framer-motion";

export default function Home() {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setAnimating(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`max-lg:px-5 relative select-none max-lg:flex max-lg:flex-col max-lg:justify-between max-lg:min-h-screen ${
        animating ? "overflow-hidden" : ""
      }`}
    >
      <Header />
      <HeaderMobile />

      <div className="w-full lg:h-[70vh] flex flex-col lg:flex-row">
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
            className="tracking-widest font-[Poppins] text-sm lg:text-lg text-justify"
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
            <a
              href="/sobre"
              className="
                inline-block px-12 py-4 text-3xl font-bold text-white!
                rounded-2xl shadow-lg cursor-pointer font-[League_Spartan]
                bg-[#690A6C] transition-all duration-300
                hover:bg-[#860e8a] hover:scale-105 hover:shadow-[0_0_20px_rgba(105,10,108,0.7)]
              "
            >
              Saiba Mais
            </a>
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

      <motion.footer
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <Pagination>
          <BulletPoint selected={true} />
          <BulletPoint />
          <BulletPoint />
          <BulletPoint />
          <BulletPoint />
        </Pagination>
      </motion.footer>

      <div className="relative hidden lg:flex">
        <div className="w-full aspect-square bg-[#EBD4F2] rounded-[50%] fixed top-[35%] left-[50%] z-[-10]"></div>
        <div className="w-full aspect-square bg-[#EBD4F2] rounded-[50%] fixed bottom-[35%] left-[50%] z-[-10]"></div>
      </div>

      <div className="relative flex lg:hidden">
        <div className="w-[140%] aspect-square bg-[#EBD4F2] rounded-[50%] fixed top-[80%] left-[-20%] z-[-10]"></div>
        <div className="w-[140%] aspect-square bg-[#EBD4F2] rounded-[50%] fixed bottom-[80%] left-[-20%] z-[-10]"></div>
      </div>
    </motion.section>
  );
}
