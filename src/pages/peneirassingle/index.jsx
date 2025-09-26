import { motion } from "motion/react";
import BackgroundShapes from "../../components/backgroundshapes";
import Container from "../../components/container";
import Field from "../../components/field";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Input from "../../components/input";
import SectionTitle from "../../components/sectiontitle";
import Select from "../../components/select";
import Textarea from "../../components/textearea";
import Button from "../../components/button";
import Checkbox from "../../components/checkbox";
import HeaderMobile from "../../components/headermobile";

export default function PeneirasSingle() {
  const formFields = [
    {
      title: "Nome Completo",
      component: (
        <Input type="text" placeholder="Digite seu nome completo..." />
      ),
    },
    {
      title: "Data de Nascimento",
      component: (
        <Input type="number" placeholder="Digite sua data de nascimento..." />
      ),
    },
    {
      title: "Cidade e Estado",
      component: (
        <Input type="text" placeholder="Digite sua cidade e estado..." />
      ),
    },
    {
      title: "E-mail",
      component: (
        <Input type="email" placeholder="Digite seu e-mail para contato..." />
      ),
    },
    {
      title: "Whatsapp",
      component: (
        <Input type="phone" placeholder="Digite seu número do whatsapp..." />
      ),
    },
    {
      title: "Posição em Campo",
      component: (
        <Select>
          <option value="" className="hidden">
            Selecione uma opção
          </option>
          <option value="">Goleira</option>
          <option value="">Defensora</option>
          <option value="">Meio-Campista</option>
          <option value="">Atacante</option>
        </Select>
      ),
    },
    {
      title: "Link do vídeo (YouTube, Drive, etc.)",
      component: (
        <Input type="text" placeholder="Digite o link de seu vídeo..." />
      ),
    },
    {
      title: "Altura",
      component: <Input type="text" placeholder="Digite sua altura..." />,
    },
    {
      title: "Peso",
      component: <Input type="text" placeholder="Digite seu peso..." />,
    },
    {
      title: "Link do Instagram ou Rede Social Esportiva",
      component: (
        <Input
          type="text"
          placeholder="Digite o link de sua rede social esportiva..."
        />
      ),
    },
    { title: "Observações", component: <Textarea /> },
  ];

  return (
    <section>
      <Container>
        <BackgroundShapes />
        <Header />
        <HeaderMobile />
        <SectionTitle textgray="Peneiras" textpurple="Online" />

        <motion.div
          className="flex flex-col gap-4 font-[League_Spartan] max-w-[700px] mx-auto"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mb-5"
          >
            <h1 className="font-bold text-2xl">Preencha o formulário</h1>
            <p className="text-xl">
              (algumas informações serão copiadas de seu perfil)
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
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Checkbox title="Aceito os termos de participação e uso do vídeo." />
          </motion.div>

          <motion.div
            className="text-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.05,
            }}
            transition={{ duration: 0.3 }}
          >
            <Button className="text-xl">Enviar para análise</Button>
          </motion.div>
        </motion.div>

        <Footer />
      </Container>
    </section>
  );
}
