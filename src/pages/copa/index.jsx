import BackgroundShapes from "../../components/backgroundshapes";
import Header from "../../components/header";
import Container from "../../components/container";
import Footer from "../../components/footer";
import SectionTitle from "../../components/sectiontitle";
import ScheduleCopa from "../../components/schedulecopa";
import HeaderMobile from "../../components/headermobile";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function Copa() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const leftInView = useInView(leftRef, { once: true, margin: "-100px" });
  const rightInView = useInView(rightRef, { once: true, margin: "-100px" });
  return (
    <section>
      <Container>
        <BackgroundShapes />
        <Header />
        <HeaderMobile />

        <motion.div
          className="w-full rounded-[40px] shadow-xl mb-15"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            className="w-full object-cover max-lg:h-[50vh] rounded-[40px]"
            src="/images/copa-01.png"
            alt=""
          />
        </motion.div>

        <SectionTitle textgray="A Copa do" textpurple="Passa a Bola" />

        <div className="flex flex-col lg:flex-row px-10 lg:px-30 mb-5 gap-10">
          <motion.div
            ref={leftRef}
            className="relative w-full lg:w-[50%] border-5 border-[#f7edf7] bg-[#f7edf7]/55 rounded-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={leftInView ? { opacity: 1, y: 0 } : {}} // só anima quando entra
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-justify w-full sm:text-xl tracking-wide font-[League_Spartan] bg-[#fbf7fb] p-8 rounded-4xl shadow-lg relative top-4 left-3">
              A Copa Passa a Bola é o principal torneio organizado pela
              comunidade Passa a Bola, pensado para fortalecer o futebol
              feminino em todas as suas formas — do recreativo ao competitivo.
              Nascida como um encontro entre amigas e times locais, a Copa
              cresceu para reunir equipes de várias regiões do Brasil,
              promovendo esporte, respeito e trocas técnicas.
            </p>
          </motion.div>

          <motion.div
            ref={rightRef}
            className="relative w-full lg:w-[50%] border-5 border-[#fbf7fb] bg-[#fbf7fb]/55 rounded-4xl sm:top-[85px]"
            initial={{ opacity: 0, y: 20 }}
            animate={rightInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p className="text-justify sm:text-xl w-full tracking-wide font-[League_Spartan] bg-[#f7edf7] p-8 rounded-4xl shadow-lg relative top-4 right-3">
              Nossa missão é criar um ambiente seguro, inclusivo e de alto
              astral, onde jogadoras possam desenvolver habilidades, conhecer
              outras atletas e ganhar visibilidade. O evento prioriza fair play,
              arbitragem qualificada, e ações educativas (oficinas, palestras e
              rodas de conversa sobre saúde e protagonismo feminino).
            </p>
          </motion.div>
        </div>

        <div className="text-center mt-15 sm:mt-40 mb-15">
          <a
            href="/copa/inscricao"
            className="
      inline-block px-12 py-4 text-3xl font-bold text-white!
      rounded-2xl shadow-lg cursor-pointer font-[League_Spartan]
      bg-[#690A6C] transition-all duration-300
      hover:bg-[#860e8a] hover:scale-105 hover:shadow-[0_0_20px_rgba(105,10,108,0.7)]
    "
          >
            Inscreva-se!
          </a>
        </div>

        <ScheduleCopa />
        <Footer />
      </Container>
    </section>
  );
}
