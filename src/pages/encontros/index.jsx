import { useEffect, useState } from "react";
import { motion, stagger } from "motion/react"; // Importando Motion One
import BackgroundShapes from "../../components/backgroundshapes";
import BulletPoint from "../../components/bulletpoint";
import CardEncontros from "../../components/cardencontros";
import Container from "../../components/container";
import Field from "../../components/field";
import Footer from "../../components/footer";
import Header from "../../components/header";
import HeaderMobile from "../../components/headermobile";
import Input from "../../components/input";
import Pagination from "../../components/pagination";
import SectionTitle from "../../components/sectiontitle";
import Select from "../../components/select";
import CardQuestion from "../../components/cardquestion";
import { Calendar, Medal, Trophy, Users, Zap } from "lucide-react";
import CardBeneficio from "./cardbeneficio";
import Button from "../../components/button";

export default function Encontros() {
  const [encontros, setEncontros] = useState([]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
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

  useEffect(() => {
    const fetchTasks = async () => {
      fetch("seed.json")
        .then((res) => res.json())
        .then((data) => {
          setEncontros(data);
        });
    };
    fetchTasks();
  }, []);

  const estados = [
    { sigla: "AC", nome: "Acre" },
    { sigla: "AL", nome: "Alagoas" },
    { sigla: "AP", nome: "Amapá" },
    { sigla: "AM", nome: "Amazonas" },
    { sigla: "BA", nome: "Bahia" },
    { sigla: "CE", nome: "Ceará" },
    { sigla: "DF", nome: "Distrito Federal" },
    { sigla: "ES", nome: "Espírito Santo" },
    { sigla: "GO", nome: "Goiás" },
    { sigla: "MA", nome: "Maranhão" },
    { sigla: "MT", nome: "Mato Grosso" },
    { sigla: "MS", nome: "Mato Grosso do Sul" },
    { sigla: "MG", nome: "Minas Gerais" },
    { sigla: "PA", nome: "Pará" },
    { sigla: "PB", nome: "Paraíba" },
    { sigla: "PR", nome: "Paraná" },
    { sigla: "PE", nome: "Pernambuco" },
    { sigla: "PI", nome: "Piauí" },
    { sigla: "RJ", nome: "Rio de Janeiro" },
    { sigla: "RN", nome: "Rio Grande do Norte" },
    { sigla: "RS", nome: "Rio Grande do Sul" },
    { sigla: "RO", nome: "Rondônia" },
    { sigla: "RR", nome: "Roraima" },
    { sigla: "SC", nome: "Santa Catarina" },
    { sigla: "SP", nome: "São Paulo" },
    { sigla: "SE", nome: "Sergipe" },
    { sigla: "TO", nome: "Tocantins" },
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

        <div className="flex flex-col gap-5 py-10 border-5 border-[#690a6c]/5 bg-white/40 rounded-[40px] px-5 mb-20">
          <motion.div
            className="grid lg:grid-cols-3 gap-5 w-full p-5 bg-[#D8D1D1] rounded-2xl shadow-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Field title="Estado">
              <Select>
                <option key="todos" value="todos">
                  Todos os estados
                </option>
                {estados.map((estado) => (
                  <option key={estado.sigla} value={estado.sigla}>
                    {estado.nome}
                  </option>
                ))}
              </Select>
            </Field>

            <Field title="Data Mínima">
              <Input type="Date" />
            </Field>

            <Field title="Data Máxima">
              <Input type="Date" />
            </Field>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-5">
            {encontros.map((e, index) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="min-h-full flex flex-col"
              >
                <CardEncontros
                  title={e.title}
                  date={e.date}
                  location={e.location}
                  type={e.type}
                  vacancies={e.vacancies}
                  text={e.text}
                  href={e.href}
                />
              </motion.div>
            ))}
          </div>

          <Pagination>
            <BulletPoint selected={true}>1</BulletPoint>
            <BulletPoint>2</BulletPoint>
            <BulletPoint>3</BulletPoint>
            <BulletPoint>4</BulletPoint>
            <BulletPoint>5</BulletPoint>
          </Pagination>
        </div>

        <div className="flex flex-col gap-5 py-10 mb-20">
          <h1 className="text-4xl md:text-5xl font-bold w-full text-center">
            Por que participar?
          </h1>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
          >
            <motion.div variants={card}>
              <CardBeneficio
                title={"Conheça outras jogadoras"}
                description={
                  "Encontre novas amigas que compartilham sua paixão pelo futebol."
                }
                icon={Users}
              />
            </motion.div>

            <motion.div variants={card}>
              <CardBeneficio
                title={"Aprimore suas habilidades"}
                description={
                  "Treine e jogue regularmente para melhorar seu desempenho."
                }
                icon={Zap}
              />
            </motion.div>

            <motion.div variants={card}>
              <CardBeneficio
                title={"Jogos competitivos e casuais"}
                description={
                  "Participe de partidas que se adequam ao seu nível e estilo de jogo."
                }
                icon={Trophy}
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col gap-5 py-10 border-5 border-[#690a6c]/5 bg-white/40 rounded-[40px] px-5 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold w-full text-center text-[#690a6c]!"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Fique por dentro
          </motion.h1>

          <motion.p
            className="text-2xl text-center max-w-[800px] mx-auto"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Cadastre seu e-mail para receber atualizações sobre novos encontros
            e eventos especiais.
          </motion.p>

          <motion.div
            variants={card}
            className="flex flex-col w-full md:flex-row gap-5 max-w-[600px] mx-auto"
          >
            <Input placeholder="Digite seu melhor e-mail" type="email" />
            <Button>Cadastrar</Button>
          </motion.div>
        </motion.div>

        <div className="flex flex-col gap-5 rounded-[40px] px-5">
          <h1 className="text-4xl md:text-5xl font-bold w-full text-center">
            Perguntas Frequentes
          </h1>

          <div className="flex flex-col gap-5">
            <CardQuestion
              question={"Quem pode se inscrever nos encontros?"}
              answer={
                "Os encontros são voltados para mulheres e meninas de todos os níveis de habilidade, desde iniciantes até jogadoras mais experientes, que amam futebol e querem participar. A idade mínima pode variar de acordo com o evento, verifique a descrição de cada encontro."
              }
            />

            <CardQuestion
              question={"Como faço para me inscrever?"}
              answer={
                "Basta clicar no botão 'Quero Participar!' no card do encontro que você escolher. Você será redirecionada para a página de inscrição, onde poderá preencher seus dados e garantir sua vaga."
              }
            />

            <CardQuestion
              question={"As vagas são limitadas?"}
              answer={
                "Sim. Para garantir a melhor experiência para todas, cada encontro tem um número limitado de vagas. É bom se inscrever o quanto antes para não ficar de fora!"
              }
            />

            <CardQuestion
              question={"O que devo levar para o encontro?"}
              answer={
                "Recomendamos levar sua própria garrafa de água, protetor solar (se for ao ar livre), e, se possível, sua chuteira (se o local permitir) e meião."
              }
            />

            <CardQuestion
              question={
                "Tive um imprevisto e preciso cancelar minha inscrição. O que faço?"
              }
              answer={
                "Não tem problema! Para liberar a vaga para outra jogadora, acesse seu perfil de usuário. Lá, você encontrará a aba 'Minhas Inscrições'. Basta selecionar o evento e clicar em 'Cancelar Inscrição'."
              }
            />
          </div>
        </div>

        <Footer />
      </Container>
    </motion.section>
  );
}
