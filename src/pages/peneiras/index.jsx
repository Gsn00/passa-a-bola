import BackgroundShapes from "../../components/backgroundshapes";
import Container from "../../components/container";
import Header from "../../components/header";
import Footer from "../../components/footer";
import SectionTitle from "../../components/sectiontitle";
import HeaderMobile from "../../components/headermobile";
import { motion } from "motion/react";
import ActionButton from "../../components/actionbutton";

export default function Peneiras() {
  return (
    <motion.section
      className="font-[League_Spartan]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <BackgroundShapes />
        <Header />
        <HeaderMobile />
        <SectionTitle textgray="Peneiras" textpurple="Online" />

        <motion.div
          className="flex flex-col gap-5 max-w-[700px] mx-auto bg-[#690a6c]/10 p-10 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.h3
            className="font-bold text-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Como Funciona a Peneira Online
          </motion.h3>

          <motion.p
            className="text-justify text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Se você sonha em jogar futebol profissionalmente ou quer mostrar o
            seu talento, essa é a sua chance! A peneira online do Passa a Bola
            foi criada para dar visibilidade a jogadoras de todo o Brasil —
            independente de onde você mora.
          </motion.p>

          <motion.h3
            className="font-bold text-2xl mt-5 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Etapas da Peneira
          </motion.h3>

          <motion.ol
            className="list-decimal marker:font-bold flex flex-col gap-4 px-10 mx-auto text-justify"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
          >
            {[
              {
                title: "Preencha o formulário",
                text: "Nos conte mais sobre você: nome, idade, posição em campo, altura, peso, tempo de experiência e outros dados importantes.",
              },
              {
                title: "Envie um vídeo seu jogando",
                text: "Pode ser um trecho de um jogo, treino ou até uma apresentação individual. O importante é mostrar suas habilidades com a bola no pé.",
              },
              {
                title: "Nossa equipe vai avaliar seu perfil",
                text: "Pode ser um trecho de um jogo, treino ou até uma apresentação individual. O importante é mostrar suas habilidades com a bola no pé.",
              },
              {
                title: "Se for selecionada, entramos em contato!",
                text: "Você poderá ser convidada para uma próxima fase presencial, recomendada para clubes ou destaque em nossas redes.",
              },
            ].map((item, idx) => (
              <motion.li
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <h3 className="text-xl font-[300]">{item.title}</h3>
                <p className="text-lg">{item.text}</p>
              </motion.li>
            ))}
          </motion.ol>

          <motion.h3
            className="font-bold text-2xl mt-5 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Dicas para seu vídeo:
          </motion.h3>

          <motion.ul
            className="list-disc flex flex-col gap-4 px-10 text-justify text-xl"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
          >
            {[
              "Mostre domínio de bola, passes, finalizações e movimentação em campo.",
              "Use roupas esportivas adequadas e, se possível, grave com boa iluminação.",
              "O vídeo pode ter entre 1 a 5 minutos.",
              "Seja autêntica! O que importa é mostrar sua paixão pelo futebol.",
            ].map((text, idx) => (
              <motion.li
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {text}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <div className="text-center">
          <div className="text-center my-15">
            <ActionButton href="/peneiras/inscricao" title="Quero Participar" />
          </div>
        </div>

        <Footer />
      </Container>
    </motion.section>
  );
}
