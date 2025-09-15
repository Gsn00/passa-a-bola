import { useEffect, useState } from "react";
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

export default function Encontros() {
  const [encontros, setEncontros] = useState([]);

  //Script de seed
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
    <section>
      <Container>
        <BackgroundShapes />
        <Header />
        <HeaderMobile />
        <SectionTitle textgray="Encontros" textpurple="Semanais" />

        <div className="grid lg:grid-cols-3 gap-5 w-full p-5 bg-[#D8D1D1] rounded-md shadow-md mx-auto mb-15">
          <Field title="Estado">
            <Select>
              <option key="todos" value="todos">
                Todos os estados
              </option>
              {estados.map((estado) => {
                return (
                  <option key={estado.sigla} value={estado.sigla}>
                    {estado.nome}
                  </option>
                );
              })}
            </Select>
          </Field>

          <Field title="Data Mínima">
            <Input type="Date" />
          </Field>

          <Field title="Data Máxima">
            <Input type="Date" />
          </Field>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 mb-15">
          {encontros.map((e) => (
            <CardEncontros
              key={e.title}
              title={e.title}
              date={e.date}
              location={e.location}
              type={e.type}
              vacancies={e.vacancies}
              text={e.text}
              href={e.href}
            />
          ))}
        </div>

        <Pagination>
          <BulletPoint selected={true}>1</BulletPoint>
          <BulletPoint>2</BulletPoint>
          <BulletPoint>3</BulletPoint>
          <BulletPoint>4</BulletPoint>
          <BulletPoint>5</BulletPoint>
        </Pagination>

        <Footer />
      </Container>
    </section>
  );
}
