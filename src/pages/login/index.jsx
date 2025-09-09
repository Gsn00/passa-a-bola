import Container from "../../components/container";
import BackgroundShapes from "../../components/backgroundshapes";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Input from "../../components/input";
import Field from "../../components/field";
import Button from "../../components/button";
import HeaderMobile from "../../components/headermobile";

export default function Login() {
  return (
    <section>
      <Container>
        <BackgroundShapes />
        <Header />
        <HeaderMobile />

        <div className="p-5 lg:p-10 flex flex-col gap-5 bg-[#D8D1D1] rounded-md shadow-md max-w-[500px] mx-auto">
          <h1 className="text-center font-bold font-[League_Spartan] text-2xl text-[#690A6C]!">
            Login
          </h1>

          <Field title="E-mail">
            <Input type="email" placeholder="Digite seu e-mail..." />
          </Field>

          <Field title="Senha">
            <Input type="password" placeholder="Digite sua senha..." />
          </Field>

          <div className="flex justify-between">
            <a className="text-[#690A6C]! max-lg:text-sm" href="">
              Esqueci minha senha
            </a>
            <a className="text-[#690A6C]! max-lg:text-sm" href="/register">
              Criar uma conta
            </a>
          </div>

          <div className="text-center">
            <Button>Entrar</Button>
          </div>
        </div>

        <Footer />
      </Container>
    </section>
  );
}
