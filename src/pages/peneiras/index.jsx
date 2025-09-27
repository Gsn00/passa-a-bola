import BackgroundShapes from "../../components/backgroundshapes";
import Container from "../../components/container";
import Header from "../../components/header";
import Footer from "../../components/footer";
import SectionTitle from "../../components/sectiontitle";
import HeaderMobile from "../../components/headermobile";
import { motion } from "motion/react";
import ActionButton from "../../components/actionbutton";
import {
  Calendar,
  Eye,
  Medal,
  Shirt,
  Star,
  Timer,
  Users,
  Video,
  Zap,
} from "lucide-react";
import CardBeneficio from "./cardbeneficio";
import CardDepoimento from "./carddepoimento";
import CardDica from "./carddica";
import CardQuestion from "../../components/cardquestion";

export default function Peneiras() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // delay entre cada card
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

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

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-[Montserrat] text-2xl text-center mb-5 max-w-3xl mx-auto"
        >
          Mostre seu talento para o Brasil inteiro — participe da nossa Peneira
          Online!
        </motion.h1>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <ActionButton href="/peneiras/inscricao" title="Quero Participar" />
        </motion.div>

        <div className="flex flex-col gap-5 py-10 border-5 border-[#690a6c]/5 bg-white/40 rounded-[40px] px-5 mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-[#690a6c]! w-full text-center">
            Por que participar?
          </h1>

          <p className="text-2xl text-center max-w-[800px] mx-auto">
            Descubra os benefícios de se juntar à nossa peneira online e dar o
            próximo passo na sua carreira no futebol feminino.
          </p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-5"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={card}>
              <CardBeneficio
                title={"Maior visibilidade"}
                description={
                  "Seja vista por olheiros e clubes de todo o Brasil."
                }
                icon={Eye}
              />
            </motion.div>

            <motion.div variants={card}>
              <CardBeneficio
                title={"Treine com profissionais"}
                description={
                  "Aprenda com os melhores treinadores e preparadores físicos."
                }
                icon={Users}
              />
            </motion.div>

            <motion.div variants={card}>
              <CardBeneficio
                title={"Eventos presenciais"}
                description={"Participe de jogos e treinos exclusivos."}
                icon={Calendar}
              />
            </motion.div>

            <motion.div variants={card}>
              <CardBeneficio
                title={"Vídeos avaliados"}
                description={"Receba feedback personalizado de especialistas."}
                icon={Video}
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col gap-5 py-10 rounded-[40px] px-5 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold w-full text-center">
            Histórias de Sucesso
          </h1>

          <p className="text-2xl text-center max-w-[800px] mx-auto">
            Veja como nossa plataforma transformou a carreira de diversas
            jogadoras, abrindo portas para oportunidades incríveis.
          </p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
            variants={container}
          >
            <motion.div variants={card} className="h-full">
              <CardDepoimento
                name={"Ana Silva"}
                testimony={
                  "O Passa a Bola me conectou com um clube profissional e hoje vivo o meu sonho!"
                }
                image={"/images/portrait1.png"}
              />
            </motion.div>

            <motion.div variants={card} className="h-full">
              <CardDepoimento
                name={"Beatriz Costa"}
                testimony={
                  "A peneira do Passa a Bola abriu portas que eu nem imaginava — hoje faço parte de um time que sempre admirei!"
                }
                image={"/images/portrait2.png"}
              />
            </motion.div>

            <motion.div variants={card} className="h-full">
              <CardDepoimento
                name={"Camila Santos"}
                testimony={
                  "A visibilidade que o Passa a Bola me proporcionou foi essencial para minha carreira como jogadora."
                }
                image={"/images/portrait3.png"}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-5 py-10 border-5 border-[#690a6c]/5 bg-white/40 rounded-[40px] px-5 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // espera 50% da seção aparecer
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold w-full text-center text-[#690a6c]!"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Dicas para o seu vídeo
          </motion.h1>

          <motion.p
            className="text-2xl text-center max-w-[800px] mx-auto"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Siga estas recomendações para criar um vídeo de destaque e aumentar
            suas chances.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="h-full"
              viewport={{ once: true }}
            >
              <CardDica
                title={"Mostre domínio de bola"}
                description={"Dribles, passes e chutes precisos."}
                icon={Medal}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="h-full"
              viewport={{ once: true }}
            >
              <CardDica
                title={"Vídeo entre 1 e 5 minutos"}
                description={"Seja concisa e mostre seu melhor."}
                icon={Timer}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="h-full"
              viewport={{ once: true }}
            >
              <CardDica
                title={"Use roupas esportivas"}
                description={"Uniforme completo, chuteiras e caneleiras."}
                icon={Shirt}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="h-full"
              viewport={{ once: true }}
            >
              <CardDica
                title={"Seja autêntica"}
                description={"Mostre sua paixão e personalidade."}
                icon={Star}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="text-center mb-10">
          <ActionButton href="/peneiras/inscricao" title="Quero Participar" />
        </div>

        <div className="flex flex-col gap-5 py-10 rounded-[40px] px-5">
          <h1 className="text-4xl md:text-5xl font-bold w-full text-center">
            Perguntas Frequentes
          </h1>

          <div className="flex flex-col gap-5">
            <CardQuestion
              question={"Preciso de equipamentos profissionais?"}
              answer={
                "Não é necessário ter equipamentos profissionais para participar da peneira online. Recomendamos o uso de roupas esportivas confortáveis e chuteiras adequadas para o tipo de campo (grama natural ou sintética)."
              }
            />

            <CardQuestion
              question={"Quanto tempo demora para receber o feedback?"}
              answer={
                "O feedback será fornecido em até 7 dias úteis após a conclusão da peneira. Nossa equipe de avaliadores analisará cuidadosamente o desempenho de cada jogadora e fornecerá um relatório detalhado."
              }
            />

            <CardQuestion
              question={"Qual é a idade mínima?"}
              answer={
                "A idade mínima para participar da peneira online é de 14 anos. Jogadoras menores de idade devem ter a autorização de seus responsáveis legais para se inscreverem e participarem."
              }
            />

            <CardQuestion
              question={"Preciso pagar alguma taxa para participar?"}
              answer={
                "Não há cobrança de taxa para participar da peneira online. O processo de inscrição e envio dos materiais é totalmente gratuito."
              }
            />

            <CardQuestion
              question={"O que acontece depois da peneira se eu for aprovada?"}
              answer={
                "As jogadoras aprovadas serão contatadas pela nossa equipe e poderão ser encaminhadas para oportunidades em clubes parceiros ou receber convites para etapas presenciais de avaliação."
              }
            />
          </div>
        </div>

        <Footer />
      </Container>
    </motion.section>
  );
}
