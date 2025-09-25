import Container from "../../components/container";
import BackgroundShapes from "../../components/backgroundshapes";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Input from "../../components/input";
import Field from "../../components/field";
import Button from "../../components/button";
import Checkbox from "../../components/checkbox";
import HeaderMobile from "../../components/headermobile";

export default function Register() {
  return (
    <section>
      <Container>
        <BackgroundShapes />
        <Header />
        <HeaderMobile />

        <div className="p-5 lg:p-10 flex flex-col gap-5 bg-[#D8D1D1] rounded-lg shadow-md max-w-[600px] mx-auto">
          <h1 className="text-center font-bold font-[League_Spartan] text-2xl text-[#690A6C]!">
            Cadastro
          </h1>

          <Field title="Nome Completo">
            <Input type="email" placeholder="Digite seu nome completo..." />
          </Field>

          <Field title="E-mail">
            <Input type="email" placeholder="Digite seu e-mail..." />
          </Field>

          <Field title="Data de Nascimento">
            <Input type="text" placeholder="Digite sua data de nascimento..." />
          </Field>

          <Field title="WhatsApp">
            <Input
              type="phone"
              placeholder="Digite seu número de whatsapp..."
            />
          </Field>

          <Field title="Senha">
            <Input type="password" placeholder="Digite sua senha..." />
          </Field>

          <Field title="Confirme a Senha">
            <Input
              type="password"
              placeholder="Digite sua senha novamente..."
            />
          </Field>

          <div className="text-center">
            <a className="text-[#690A6C]!" href="/login">
              Já tenho uma conta
            </a>
          </div>

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

          <div className="text-center">
            <Button>Cadastrar-me</Button>
          </div>
        </div>

        <Footer />
      </Container>
    </section>
  );
}
