import { motion } from "motion/react";
import BackgroundShapes from "../../components/backgroundshapes";
import Button from "../../components/button";
import CardEncontros from "../../components/cardencontros";
import Container from "../../components/container";
import Field from "../../components/field";
import Footer from "../../components/footer";
import Header from "../../components/header";
import HeaderMobile from "../../components/headermobile";
import Input from "../../components/input";
import SectionTitle from "../../components/sectiontitle";
import Select from "../../components/select";

export default function EncontrosSingle() {
  const formFields = [
    {
      title: "Nome Completo",
      component: (
        <Input type="text" placeholder="Digite seu nome completo..." />
      ),
    },
    {
      title: "Idade",
      component: <Input type="text" placeholder="Digite sua idade..." />,
    },
    {
      title: "Cidade e Estado",
      component: (
        <Input type="text" placeholder="Digite sua cidade e estado..." />
      ),
    },
    {
      title: "WhatsApp",
      component: (
        <Input type="text" placeholder="Digite seu número do whatsapp..." />
      ),
    },
    {
      title: "Posição em Campo",
      component: (
        <Select>
          <option value="" className="hidden">
            Selecione uma opção
          </option>
          <option value="">Qualquer uma</option>
          <option value="">Goleira</option>
          <option value="">Defensora</option>
          <option value="">Meio-Campista</option>
          <option value="">Atacante</option>
        </Select>
      ),
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <BackgroundShapes />
        <Header />
        <HeaderMobile />

        <SectionTitle textgray="Encontros" textpurple="Semanais" />

        <motion.div
          className="max-w-[700px] mx-auto mt-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <CardEncontros
            title="Treino Técnico - Zona Norte (SP)"
            date="15/06/2025 — 15h00"
            location="Arena Bela Vista, Rua Major Diogo, 350 — Bela Vista, SP"
            type="Recreativo"
            vacancies="6"
            text="Vem bater bola com a gente em um ambiente leve, divertido e seguro! Nível livre, só chegar."
            href="/encontros/encontro01"
            hidebutton={true}
          />
        </motion.div>

        <motion.div
          className="max-w-[700px] mx-auto mt-10 flex flex-col gap-5"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-center"
          >
            <h1 className="text-2xl font-bold">Preencha o formulário</h1>
            <p className="text-xl">
              (Algumas informações serão extraídas do seu perfil)
            </p>
          </motion.div>

          {formFields.map((field, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Field title={field.title}>{field.component}</Field>
            </motion.div>
          ))}

          <motion.div
            className="text-center mt-5"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.05,
            }}
            transition={{ duration: 0.3 }}
          >
            <Button>Confirmar Inscrição</Button>
          </motion.div>
        </motion.div>

        <Footer />
      </Container>
    </motion.section>
  );
}
