import Container from "../../components/container";
import BackgroundShapes from "../../components/backgroundshapes";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Input from "../../components/input";
import Field from "../../components/field";
import Button from "../../components/button";
import Checkbox from "../../components/checkbox";
import HeaderMobile from "../../components/headermobile";
import { motion } from "framer-motion";

export default function Register() {
  return (
    <section>
      <Container>
        <BackgroundShapes />
        <Header />
        <HeaderMobile />

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="p-5 lg:p-10 flex flex-col gap-5 bg-[#D8D1D1] rounded-2xl shadow-md max-w-[600px] mx-auto"
        >
          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center font-bold font-[League_Spartan] text-2xl text-[#690A6C]!"
          >
            Cadastro
          </motion.h1>

          {[
            {
              title: "Nome Completo",
              type: "text",
              placeholder: "Digite seu nome completo...",
            },
            {
              title: "E-mail",
              type: "email",
              placeholder: "Digite seu e-mail...",
            },
            {
              title: "Data de Nascimento",
              type: "text",
              placeholder: "Digite sua data de nascimento...",
            },
            {
              title: "WhatsApp",
              type: "phone",
              placeholder: "Digite seu número de whatsapp...",
            },
            {
              title: "Senha",
              type: "password",
              placeholder: "Digite sua senha...",
            },
            {
              title: "Confirme a Senha",
              type: "password",
              placeholder: "Digite sua senha novamente...",
            },
          ].map((field, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              <Field title={field.title}>
                <Input type={field.type} placeholder={field.placeholder} />
              </Field>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-center"
          >
            <a className="text-[#690A6C]!" href="/login">
              Já tenho uma conta
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <Checkbox
              title={
                <div className="mt-[-2px]">
                  Li e concordo com os{" "}
                  <a href="" className="text-[#690A6C]!">
                    termos de uso
                  </a>
                </div>
              }
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="text-center"
          >
            <Button>Cadastrar-me</Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <Footer />
        </motion.div>
      </Container>
    </section>
  );
}
