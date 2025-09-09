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
  return (
    <section>
      <Container>
        <BackgroundShapes />
        <Header />
        <HeaderMobile />
        <SectionTitle textgray="Peneiras" textpurple="Online" />

        <div className="flex flex-col gap-4 font-[League_Spartan] max-w-[700px] mx-auto">
          <div className="mb-5">
            <h1 className="font-bold text-2xl">Preencha o formulário</h1>
            <p className="text-xl">
              (algumas informações serão copiadas de seu perfil)
            </p>
          </div>

          <Field title="Nome Completo">
            <Input type="text" placeholder="Digite seu nome completo..." />
          </Field>

          <Field title="Data de Nascimento">
            <Input
              type="number"
              placeholder="Digite sua data de nascimento..."
            />
          </Field>

          <Field title="Cidade e Estado">
            <Input type="text" placeholder="Digite sua cidade e estado..." />
          </Field>

          <Field title="E-mail">
            <Input
              type="email"
              placeholder="Digite seu e-mail para contato..."
            />
          </Field>

          <Field title="Whatsapp">
            <Input
              type="phone"
              placeholder="Digite seu número do whatsapp..."
            />
          </Field>

          <Field title="Posição em Campo">
            <Select>
              <option value="" className="hidden">
                Selecione uma opção
              </option>
              <option value="">Goleira</option>
              <option value="">Defensora</option>
              <option value="">Meio-Campista</option>
              <option value="">Atacante</option>
            </Select>
          </Field>

          <Field title="Link do vídeo (YouTube, Drive, etc.)">
            <Input type="text" placeholder="Digite o link de seu vídeo..." />
          </Field>

          <Field title="Altura">
            <Input type="text" placeholder="Digite sua altura..." />
          </Field>

          <Field title="Peso">
            <Input type="text" placeholder="Digite seu peso..." />
          </Field>

          <Field title="Link do Instagram ou Rede Social Esportiva">
            <Input
              type="text"
              placeholder="Digite o link de sua rede social esportiva..."
            />
          </Field>

          <Field title="Observações">
            <Textarea />
          </Field>

          <div>
            <Checkbox title="Aceito os termos de participação e uso do vídeo. " />
          </div>

          <div className="text-center">
            <Button className="text-xl">Enviar para análise</Button>
          </div>
        </div>

        <Footer />
      </Container>
    </section>
  );
}
