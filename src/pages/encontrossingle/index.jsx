import BackgroundShapes from "../../components/backgroundshapes";
import Button from "../../components/button";
import CardEncontros from "../../components/cardencontros";
import Container from "../../components/container";
import Field from "../../components/field";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Input from "../../components/input";
import SectionTitle from "../../components/sectiontitle";
import Select from "../../components/select";

export default function EncontrosSingle() {
  return (
    <section>
      <Container>
        <BackgroundShapes />
        <Header />
        <SectionTitle textgray="Encontros" textpurple="Semanais" />

        <CardEncontros
          title="Treino Técnico - Zona Norte (SP)"
          date="15/06/2025 — 15h00"
          location="Arena Bela Vista, Rua Major Diogo, 350 — Bela Vista, SP"
          type="Recreativo"
          vacancies="6"
          text="Vem bater bola com a gente em um ambiente leve, divertido e seguro! Nível livre, só chegar."
          href="/encontros/encontro01"
          hidebutton={true}
          className="max-w-[700px] mx-auto"
        />

        <div className="max-w-[700px] mx-auto mt-10 flex flex-col gap-5">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Preencha o formulário</h1>
            <p className="text-xl">
              (Algumas informações serão extraídas do seu perfil)
            </p>
          </div>

          <Field title="Nome Completo">
            <Input type="text" placeholder="Digite seu nome completo..." />
          </Field>

          <Field title="Idade">
            <Input type="idade" placeholder="Digite sua idade..." />
          </Field>

          <Field title="Cidade e Estado">
            <Input type="idade" placeholder="Digite sua cidade e estado..." />
          </Field>

          <Field title="WhatsApp">
            <Input
              type="idade"
              placeholder="Digite seu número do whatsapp..."
            />
          </Field>

          <Field title="Posição em Campo">
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
          </Field>

          <div className="text-center">
            <Button>Confirmar Inscrição</Button>
          </div>
        </div>

        <Footer />
      </Container>
    </section>
  );
}
