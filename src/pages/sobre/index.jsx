import { motion } from "framer-motion";
import Header from "../../components/header";
import Container from "../../components/container";
import SectionTitle from "../../components/sectiontitle";
import Footer from "../../components/footer";
import BackgroundShapes from "../../components/backgroundshapes";
import HeaderMobile from "../../components/headermobile";

export default function Sobre() {
  // Variantes para o efeito "stagger"
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // delay entre elementos
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section>
      <BackgroundShapes />
      <Header />
      <HeaderMobile />
      <Container>
        <SectionTitle textgray="Sobre o" textpurple="Passa a Bola" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-5 py-10 border-5 border-[#690a6c]/5 bg-[#690a6c]/5 rounded-[40px] px-5 mb-20"
        >
          <motion.p
            variants={itemVariants}
            className="font-normal text-[#323232]! text-lg text-justify tracking-wide font-[Sora]"
          >
            O Passa a Bola nasceu com a missão de transformar o cenário do
            futebol feminino no Brasil, oferecendo visibilidade, oportunidades e
            apoio a mulheres que vivem a paixão pelo esporte. Mais do que um
            projeto, somos uma comunidade que acredita no poder do futebol como
            ferramenta de inclusão, empoderamento e transformação social.
            <br />
            <br />
            Nosso objetivo é criar pontes entre atletas, treinadoras, torcedoras
            e profissionais do meio esportivo, promovendo o crescimento e a
            valorização do futebol feminino em todas as suas dimensões. Atuamos
            com foco na informação, na formação e no incentivo à prática
            esportiva, sempre colocando a mulher como protagonista dentro e fora
            das quatro linhas.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex max-lg:flex-col justify-evenly"
          >
            <img
              className="w-full lg:w-[32%]"
              src="/images/sobre-01.png"
              alt=""
            />
            <img
              className="w-full lg:w-[32%]"
              src="/images/sobre-02.png"
              alt=""
            />
            <img
              className="w-full lg:w-[32%]"
              src="/images/sobre-03.png"
              alt=""
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="font-normal text-[#323232]! text-lg text-justify tracking-wide font-[Sora]"
          >
            Por meio de conteúdo digital, encontros presenciais, peneiras e
            parcerias, buscamos ampliar o acesso das mulheres ao futebol de
            maneira democrática e acolhedora. O Passa a Bola é também um espaço
            para compartilhar histórias inspiradoras, conquistas, desafios e
            iniciativas que constroem um futuro mais justo e diverso para o
            esporte.
            <br />
            <br />
            Se você joga, treina, torce ou apenas acredita no potencial
            transformador do futebol, o Passa a Bola é para você. Junte-se a nós
            nessa rede que não para de crescer e ajude a dar o próximo passo
            rumo a um futebol mais feminino, mais forte e mais livre.
          </motion.p>

          <motion.div variants={itemVariants}>
            <h1 className="font-[Montserrat] text-5xl text-transparent! [-webkit-text-stroke-color:#690A6C] [-webkit-text-stroke-width:1px] text-center">
              JOIN US
            </h1>
          </motion.div>
        </motion.div>

        <Footer />
      </Container>
    </section>
  );
}
