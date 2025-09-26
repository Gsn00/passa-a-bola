import { motion } from "framer-motion";
import Header from "../../components/header";
import Footer from "../../components/footer";
import SectionTitle from "../../components/sectiontitle";
import Container from "../../components/container";
import BackgroundShapes from "../../components/backgroundshapes";
import Input from "../../components/input";
import { Search } from "lucide-react";
import CardHistoria from "../../components/cardhistoria";
import BulletPoint from "../../components/bulletpoint";
import Pagination from "../../components/pagination";
import HeaderMobile from "../../components/headermobile";

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

        <motion.div
          className="max-w-xl w-full p-5 flex gap-5 bg-[#D8D1D1] rounded-lg shadow-md mx-auto mb-15"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Input type="text" placeholder="Pesquise aqui..." />
          <button className="bg-white w-[40px] h-[40px] flex items-center justify-center cursor-pointer rounded-md shadow-md hover:scale-105 transition">
            <Search />
          </button>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-10 mb-15"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={cardVariants}>
            <CardHistoria
              href="/historia/historia01"
              src="/images/historia-01.jpg"
              alt=""
            />
          </motion.div>
          <motion.div variants={cardVariants}>
            <CardHistoria
              href="/historia/historia02"
              src="/images/historia-02.jpg"
              alt=""
            />
          </motion.div>
          <motion.div variants={cardVariants}>
            <CardHistoria
              href="/historia/historia03"
              src="/images/historia-03.jpg"
              alt=""
            />
          </motion.div>
          <motion.div variants={cardVariants}>
            <CardHistoria
              href="/historia/historia04"
              src="/images/historia-04.jpg"
              alt=""
            />
          </motion.div>
          <motion.div variants={cardVariants}>
            <CardHistoria
              href="/historia/historia05"
              src="/images/historia-05.jpg"
              alt=""
            />
          </motion.div>
          <motion.div variants={cardVariants}>
            <CardHistoria
              href="/historia/historia06"
              src="/images/historia-06.jpg"
              alt=""
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
            <BulletPoint>2</BulletPoint>
            <BulletPoint>3</BulletPoint>
            <BulletPoint>4</BulletPoint>
            <BulletPoint>5</BulletPoint>
          </Pagination>
        </motion.div>

        <Footer />
      </Container>
    </section>
  );
}
