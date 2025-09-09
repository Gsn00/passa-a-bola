import BackgroundShapes from "../../components/backgroundshapes";
import Container from "../../components/container";
import Footer from "../../components/footer";
import Header from "../../components/header";
import SectionTitle from "../../components/sectiontitle";
import Field from "../../components/field";
import Input from "../../components/input";
import Select from "../../components/select";
import Checkbox from "../../components/checkbox";
import Button from "../../components/button";

export default function CopaInscricao() {
  return (
    <section>
      <Container>
        <BackgroundShapes />
        <Header />
        <SectionTitle textgray="A Copa do" textpurple="Passa a Bola" />

        <div className="text-center mb-15">
          <h1 className="text-4xl font-[League_Spartan]">
            Preencha o formulário de inscrição.
          </h1>
        </div>

        <div className="flex flex-col gap-3 max-w-[700px] mx-auto font-[League_Spartan]">
          <h1 className="text-center text-xl font-bold">Dados do Time</h1>
          <Field title="Nome do Time">
            <Input type="text" placeholder="Digite o nome do time..." />
          </Field>

          <Field title="Cidade e Estado">
            <Input type="text" placeholder="Digite a cidade e o estado..." />
          </Field>

          <Field title="Número Estimado de Jogadoras">
            <Input
              type="number"
              placeholder="Digite o número estimado de jogadoras..."
            />
          </Field>

          <h1 className="text-center text-xl font-bold mt-10">
            Dados da Capitã/Responsável
          </h1>
          <Field title="Nome Completo">
            <Input
              type="text"
              placeholder="Digite o nome completo da capitã/responsável..."
            />
          </Field>
          <Field title="E-mail de Contato">
            <Input type="email" placeholder="Digite o e-mail para contato..." />
          </Field>
          <Field title="WhatsApp de Contato">
            <Input
              type="text"
              placeholder="Digite seu número de whatsapp para contato..."
            />
          </Field>

          <div className="flex flex-col gap-3">
            <Checkbox title="Li e aceito integralmente o regulamento oficial da Copa Passa a Bola 2025." />
            <Checkbox title="Concordo em respeitar as regras de conduta, a arbitragem e os princípios de fair play durante toda a competição." />
            <Checkbox title="Autorizo o uso da imagem da minha equipe e jogadoras em fotos e vídeos oficiais do evento para fins de divulgação." />
          </div>

          <div className="text-center mt-5">
            <Button>Confirmar Inscrição</Button>
          </div>
        </div>

        <Footer />
      </Container>
    </section>
  );
}
