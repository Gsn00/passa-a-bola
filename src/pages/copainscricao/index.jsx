"use client";

import { motion } from "framer-motion";
import BackgroundShapes from "../../components/backgroundshapes";
import Container from "../../components/container";
import Footer from "../../components/footer";
import Header from "../../components/header";
import SectionTitle from "../../components/sectiontitle";
import Field from "../../components/field";
import Input from "../../components/input";
import Checkbox from "../../components/checkbox";
import Button from "../../components/button";
import HeaderMobile from "../../components/headermobile";

export default function CopaInscricao() {
  return (
    <section>
      <Container>
        <BackgroundShapes />
        <Header />
        <HeaderMobile />

        {/* título principal */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle textgray="A Copa do" textpurple="Passa a Bola" />
        </motion.div>

        {/* subtítulo */}
        <motion.div
          className="text-center mb-15"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl font-[League_Spartan]">
            Preencha o formulário de inscrição.
          </h1>
        </motion.div>

        {/* container dos campos */}
        <motion.div
          className="flex flex-col gap-3 max-w-[700px] mx-auto font-[League_Spartan]"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15, // atraso entre os elementos
              },
            },
          }}
        >
          {/* título seção */}
          <motion.h1
            className="text-center text-xl font-bold"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            Dados do Time
          </motion.h1>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <Field title="Nome do Time">
              <Input type="text" placeholder="Digite o nome do time..." />
            </Field>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <Field title="Cidade e Estado">
              <Input type="text" placeholder="Digite a cidade e o estado..." />
            </Field>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <Field title="Número Estimado de Jogadoras">
              <Input
                type="number"
                placeholder="Digite o número estimado de jogadoras..."
              />
            </Field>
          </motion.div>

          {/* segunda seção */}
          <motion.h1
            className="text-center text-xl font-bold mt-10"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            Dados da Capitã/Responsável
          </motion.h1>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <Field title="Nome Completo">
              <Input type="text" placeholder="Digite o nome completo..." />
            </Field>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <Field title="E-mail de Contato">
              <Input
                type="email"
                placeholder="Digite o e-mail para contato..."
              />
            </Field>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <Field title="WhatsApp de Contato">
              <Input
                type="text"
                placeholder="Digite seu número de whatsapp..."
              />
            </Field>
          </motion.div>

          {/* checkboxes */}
          <motion.div
            className="flex flex-col gap-3"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <Checkbox title="Li e aceito integralmente o regulamento oficial da Copa Passa a Bola 2025." />
            <Checkbox title="Concordo em respeitar as regras de conduta, a arbitragem e os princípios de fair play." />
            <Checkbox title="Autorizo o uso da imagem da minha equipe em fotos e vídeos oficiais do evento." />
          </motion.div>

          {/* botão */}
          <motion.div
            className="text-center mt-5"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              show: { opacity: 1, scale: 1 },
            }}
            whileHover={{
              scale: 1.05,
            }}
          >
            <Button>Confirmar Inscrição</Button>
          </motion.div>
        </motion.div>

        <Footer />
      </Container>
    </section>
  );
}
