import BackgroundShapes from "../../components/backgroundshapes";
import Header from "../../components/header";
import Container from "../../components/container";
import Footer from "../../components/footer";
import SectionTitle from "../../components/sectiontitle";
import ScheduleCopa from "../../components/schedulecopa";
import HeaderMobile from "../../components/headermobile";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import ActionButton from "../../components/actionbutton";

export default function Copa() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const videoLeftRef = useRef(null);
  const videoRightRef = useRef(null);

  const leftInView = useInView(leftRef, { once: true, margin: "-100px" });
  const rightInView = useInView(rightRef, { once: true, margin: "-100px" });
  const videoLeftInView = useInView(videoLeftRef, {
    once: true,
    margin: "-100px",
  });
  const videoRightInView = useInView(videoRightRef, {
    once: true,
    margin: "-100px",
  });

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

        <div className="flex flex-col lg:flex-row px-5 lg:px-30 mb-5 gap-10">
          <motion.div
            ref={leftRef}
            className="relative w-full lg:w-[50%] border-5 border-[#f7edf7] bg-[#f7edf7]/55 rounded-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={leftInView ? { opacity: 1, y: 0 } : {}}
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

        <div className="flex flex-col lg:flex-row px-5 lg:px-30 max-md:mt-10 gap-10 md:pt-30">
          <div className="w-full gap-5 text-center flex flex-col-reverse md:flex-col">
            <motion.div
              ref={videoLeftRef}
              className="relative w-full border-5 border-[#f7edf7] bg-[#f7edf7]/55 rounded-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={videoLeftInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <video
                autoPlay
                muted
                loop
                className="w-full h-[500px] md:h-[700px] rounded-4xl shadow-xl object-cover relative top-4 left-3"
              >
                <source src="/videos/copa01.mp4" type="video/mp4" />
              </video>
            </motion.div>
            <div className="text-xl md:text-4xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={videoLeftInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="font-[Montserrat] md:mr-10"
              >
                #MulheresNoEsporte
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={videoLeftInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="font-[Montserrat] text-[#690A6C]!"
              >
                #MulheresNoEsporte
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0 }}
                animate={
                  videoLeftInView ? { opacity: [0, 1, 0] } : { opacity: 0 }
                }
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                className="font-[Montserrat] md:ml-10 text-transparent! bg-clip-text bg-gradient-to-b from-[#cb6aaa]! to-transparent"
              >
                #MulheresNoEsporte
              </motion.h1>
            </div>
          </div>

          <div className="w-full space-y-5 text-center md:pt-15">
            <div className="text-xl md:text-4xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={videoLeftInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="font-[Montserrat] md:mr-10"
              >
                #FutebolFeminino
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={videoLeftInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="font-[Montserrat] text-[#690A6C]!"
              >
                #FutebolFeminino
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0 }}
                animate={
                  videoLeftInView ? { opacity: [0, 1, 0] } : { opacity: 0 }
                }
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                className="font-[Montserrat] md:ml-10 text-transparent! bg-clip-text bg-gradient-to-b from-[#cb6aaa]! to-transparent"
              >
                #FutebolFeminino
              </motion.h1>
            </div>
            <motion.div
              ref={videoRightRef}
              className="relative w-full border-5 border-[#fbf7fb] bg-[#fbf7fb]/55 rounded-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={videoRightInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <video
                autoPlay
                muted
                loop
                className="w-full h-[500px] md:h-[700px] rounded-4xl shadow-xl object-cover relative top-4 right-3"
              >
                <source src="/videos/copa02.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </div>
        </div>

        <div className="text-center mt-15">
          <ActionButton href="/copa/inscricao" title="Inscreva-se" />
        </div>

        <ScheduleCopa />
        <Footer />
      </Container>
    </section>
  );
}
