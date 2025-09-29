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
import CardQuestion from "../../components/cardquestion";
import CardResumo from "./cardresumo";
import { GraduationCap, Handshake, Trophy } from "lucide-react";

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
          <div className="flex flex-col gap-5 p-2 border-5 border-[#690a6c]/20 rounded-[40px] mb-20">
            <img
              className="w-full object-cover max-lg:h-[50vh] rounded-[30px]"
              src="/images/copa_banner.jpg"
              alt=""
            />
          </div>
        </motion.div>

        <SectionTitle textgray="A Copa do" textpurple="Passa a Bola" />

        <div className="flex flex-col gap-5 py-10 border-5 border-[#690a6c]/5 bg-white/40 rounded-[40px] px-5 mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-[#690a6c]! w-full text-center pb-5">
            Muito mais que um torneio
          </h1>
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
            >
              <CardResumo
                title={"O que é"}
                description={
                  "Torneio que conecta jogadoras de todo o Brasil, fortalecendo o futebol feminino em todas as suas formas."
                }
                icon={Trophy}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <CardResumo
                title={"Como é o ambiente"}
                description={
                  "Espaço acolhedor e inclusivo, feito para desenvolver talentos e criar novas conexões."
                }
                icon={Handshake}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              <CardResumo
                title={"O diferencial"}
                description={
                  "Fair play, arbitragem qualificada e atividades educativas que valorizam o protagonismo feminino."
                }
                icon={GraduationCap}
              />
            </motion.div>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row px-5 lg:px-30 max-md:mt-10 gap-10">
          <div className="w-full gap-5 text-center flex flex-col-reverse lg:flex-col">
            <motion.div
              ref={videoLeftRef}
              className="relative w-full border-5 border-[#f7edf7] bg-[#f7edf7]/55 rounded-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={videoLeftInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <video
                autoPlay
                playsInline
                muted
                loop
                preload="metadata"
                className="w-full h-[500px] md:h-[700px] rounded-4xl shadow-xl object-cover relative top-4 left-3"
              >
                <source src="/videos/copa01.mp4" type="video/mp4" />
              </video>
            </motion.div>
            <div className="text-2xl md:text-4xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={videoLeftInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-[Montserrat] md:mr-10"
              >
                #MulheresNoEsporte
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={videoLeftInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
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
            <div className="text-2xl md:text-4xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={videoLeftInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-[Montserrat] md:mr-10"
              >
                #FutebolFeminino
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={videoLeftInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-[Montserrat] text-[#690A6C]!"
              >
                #FutebolFeminino
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0 }}
                animate={
                  videoLeftInView ? { opacity: [0, 1, 0] } : { opacity: 0 }
                }
                transition={{ duration: 3, repeat: Infinity, delay: 0.2 }}
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
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <video
                autoPlay
                playsInline
                muted
                loop
                preload="metadata"
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

        <div className="flex flex-col gap-5 rounded-[40px] px-5">
          <h1 className="text-4xl md:text-5xl font-bold w-full text-center">
            Perguntas Frequentes
          </h1>

          <div className="flex flex-col gap-5">
            <CardQuestion
              question={"Quem pode inscrever um time?"}
              answer={
                "A Copa é voltada para times e equipes femininas amadoras. Podem se inscrever times já formados ou grupos de amigas que queiram montar uma equipe. É necessário ter uma capitã ou responsável maior de idade para gerenciar a inscrição."
              }
            />

            <CardQuestion
              question={
                "Qual o valor da inscrição por time e o que está incluso?"
              }
              answer={
                "O valor da inscrição é uma taxa única por equipe, e ele cobre os custos com: arbitragem qualificada, hidratação (água/isotônicos), primeiros socorros no local, troféus e medalhas, e a organização geral do evento. O valor exato e os métodos de pagamento estão no Regulamento."
              }
            />

            <CardQuestion
              question={"Haverá premiação para os primeiros colocados?"}
              answer={
                "Sim! O time campeão e o vice-campeão recebem troféus e medalhas. Também pode haver prêmios individuais, como melhor jogadora, artilheira e goleira menos vazada. Os detalhes da premiação estarão no regulamento."
              }
            />

            <CardQuestion
              question={
                "Qual é o processo de inscrição e as datas importantes?"
              }
              answer={
                "O processo começa com a leitura completa do Regulamento Oficial (que será disponibilizado em breve). Depois, a Capitã preenche o formulário online, anexa a lista de atletas e efetua o pagamento da taxa de inscrição dentro do prazo estipulado."
              }
            />
          </div>
        </div>
        <Footer />
      </Container>
    </section>
  );
}
