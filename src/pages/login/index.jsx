import Container from "../../components/container";
import BackgroundShapes from "../../components/backgroundshapes";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Input from "../../components/input";
import Field from "../../components/field";
import Button from "../../components/button";
import HeaderMobile from "../../components/headermobile";
import { useEffect, useState } from "react";

export default function Login() {
  const [usuarios, setUsuarios] = useState([]);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  //Consumo de API
  useEffect(() => {
    const fetchTasks = async () => {
      fetch("usuarios.json")
        .then((res) => res.json())
        .then((data) => {
          setUsuarios(data);
        });
    };
    fetchTasks();
  }, []);


  //Tratamento de erros
  function validarCampos(email, password) {
    if (email.trim() == "" || password.trim() == "") {
      return false;
    }
    return true;
  }

  //Teste unitário
  function emailValido(email) {
    if (email.includes("@") && email.includes(".")) {
      return true;
    }
    return false;
  }

  //Autenticação
  function efetuarLogin(login, password) {
    if (!validarCampos(login, password)) {
      alert("Preencha os campos vazios.");
      return;
    }

    if (!emailValido(login)) {
      alert("Digite um e-mail válido");
      return;
    }

    let usuarioEncontrado = false;
    usuarios.map((usuario) => {
      if (usuario.login == login && usuario.password == password) {
        usuarioEncontrado = true;
        alert("Logado com sucesso!");
        return;
      }
    });
    if (!usuarioEncontrado) {
      alert("Usuário não encontrado");
    }
  }
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
            <Input
              onChange={(event) => setLogin(event.target.value)}
              type="email"
              placeholder="Digite seu e-mail..."
            />
          </Field>

          <Field title="Senha">
            <Input
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Digite sua senha..."
            />
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
            <Button
              onClick={() => {
                efetuarLogin(login, password);
              }}
            >
              Entrar
            </Button>
          </div>
        </div>

        <Footer />
      </Container>
    </section>
  );
}
