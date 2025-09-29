import { motion } from "framer-motion";
import Header from "../../components/header";
import Footer from "../../components/footer";
import SectionTitle from "../../components/sectiontitle";
import Container from "../../components/container";
import BackgroundShapes from "../../components/backgroundshapes";
import { Search } from "lucide-react";
import CardHistoria from "../../components/cardhistoria";
import BulletPoint from "../../components/bulletpoint";
import Pagination from "../../components/pagination";
import HeaderMobile from "../../components/headermobile";
import SearchBar from "../../components/searchbar";

export default function Historia() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section>
      <Container>
        <BackgroundShapes />
        <Header />
        <HeaderMobile />
        <SectionTitle textgray="História do" textpurple="Futebol Feminino" />

        <div className="flex flex-col gap-5 py-10 border-5 border-[#690a6c]/5 bg-white/40 rounded-[40px] px-5 mb-20">
          <motion.div
            className="w-full max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SearchBar placeholder="Buscar por título, data..." />
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-5"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={cardVariants}>
              <CardHistoria
                href="/historia/historia01"
                src="/images/historia-01.png"
                alt=""
                year="1920"
                title="O começo"
                description="As primeiras referências de partidas de futebol disputadas por mulheres surgiram nos anos 20. Os registros de jornais mostram a prática, ainda de forma muito tímida, no Rio de Janeiro, São Paulo e Rio Grande do Norte."
              />
            </motion.div>
            <motion.div variants={cardVariants}>
              <CardHistoria
                href="/historia/historia02"
                src="/images/historia-02.png"
                alt=""
                year="1941"
                title="A proibição"
                description="A primeira proibição ocorreu através de um processo de regulamentação do esporte no Brasil. Criou-se o CND (Conselho Nacional de Desportos). Na época, sob a alçada do Ministério da Educação."
              />
            </motion.div>
            <motion.div variants={cardVariants}>
              <CardHistoria
                href="/historia/historia03"
                src="/images/historia-03.png"
                alt=""
                year="1979"
                title="Fim da proibição"
                description="Apenas no fim da década de 70 foi revogada a lei que proibia as mulheres de jogarem futebol. É o início de uma nova jornada para a modalidade entre as mulheres."
              />
            </motion.div>
            <motion.div variants={cardVariants}>
              <CardHistoria
                href="/historia/historia04"
                src="/images/historia-04.png"
                alt=""
                year="1983"
                title="Regulamentação"
                description="Apenas em 1983 a modalidade foi regulamentada. Com isso, foi permitido que se pudesse competir, criar calendários, utilizar estádios, ensinar nas escolas. Clubes como o Radar e Saad surgem como pioneiros no profissionalismo. Eram alguns dos times competitivos da época."
              />
            </motion.div>
            <motion.div variants={cardVariants}>
              <CardHistoria
                href="/historia/historia05"
                src="/images/historia-05.png"
                alt=""
                year="1988"
                title="Torneio experimental"
                description="Em 1988, a Fifa realizou, na China, um Mundial de caráter experimental. Em inglês, foi chamado de Women's Invitational Tournament. A seleção montada para a competição tinha como bases o Radar, do Rio, e o Juventus (SP) - que tinha talvez o time mais forte feminino do país naquele momento. Não houve nenhuma confecção especial de roupas para as jogadoras. Viajaram para o Mundial com as sobras das roupas dos homens."
              />
            </motion.div>
            <motion.div variants={cardVariants}>
              <CardHistoria
                href="/historia/historia06"
                src="/images/historia-06.png"
                alt=""
                year="1991"
                title="Primeira Copa FIFA"
                description="É o ano da primeira Copa do Mundo Fifa de Futebol Feminino. A CBF assumiu o time oficialmente, mas o tratamento ainda era muito amador. O Brasil viajou com boa parte das atletas que disputaram o torneio experimental. Pretinha, ainda muito jovem, também fez parte da seleção comandada pelo técnico Fernando Pires."
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <Pagination>
              <BulletPoint selected={true}>1</BulletPoint>
            </Pagination>
          </motion.div>
        </div>

        <Footer />
      </Container>
    </section>
  );
}
