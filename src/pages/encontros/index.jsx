import BackgroundShapes from "../../components/backgroundshapes";
import BulletPoint from "../../components/bulletpoint";
import CardEncontros from "../../components/cardencontros";
import Container from "../../components/container";
import Field from "../../components/field";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Input from "../../components/input";
import Pagination from "../../components/pagination";
import SectionTitle from "../../components/sectiontitle";
import Select from "../../components/select";

export default function Encontros() {
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
        <SectionTitle textgray="Encontros" textpurple="Semanais" />

        <div className="grid grid-cols-3 gap-5 w-full p-5 bg-[#D8D1D1] rounded-md shadow-md mx-auto mb-15">
          <Field title="Estado">
            {" "}
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

        <div className="grid grid-cols-3 gap-5 mb-15">
          <CardEncontros
            title="Treino Técnico - Zona Norte (SP)"
            date="15/06/2025 — 15h00"
            location="Arena Bela Vista, Rua Major Diogo, 350 — Bela Vista, SP"
            type="Recreativo"
            vacancies="6"
            text="Vem bater bola com a gente em um ambiente leve, divertido e seguro! Nível livre, só chegar."
            href="/encontros/encontro01"
          />

          <CardEncontros
            title="Amistoso — Belo Horizonte (MG)"
            date="22/06/2025 — 16h30"
            location="Campo Santa Tereza, Rua Hermilo Alves, 75 — Santa Tereza, Belo Horizonte, MG"
            type="Competitivo"
            vacancies="10"
            text="Partida amistosa para reunir as meninas de BH! Clima de jogo sério, mas sempre com diversão e respeito."
            href="/encontros/encontro01"
          />

          <CardEncontros
            title="Treino de Finalização — Curitiba (PR)"
            date="29/06/2025 — 14h00"
            location="Centro Esportivo Cajuru, Rua da Cidadania, 800 — Cajuru, Curitiba, PR"
            type="Treino Técnico"
            vacancies="8"
            text="Sessão especial para treinar chutes, finalizações e posicionamento ofensivo. Todas são bem-vindas!"
            href="/encontros/encontro01"
          />

          <CardEncontros
            title="Futebol de Areia — Fortaleza (CE)"
            date="06/07/2025 — 09h30"
            location="Praia do Futuro, Av. Zezé Diogo, 5000 — Fortaleza, CE"
            type="Recreativo"
            vacancies="12"
            text="Bora jogar na areia da Praia do Futuro? Encontro descontraído, perfeito para quem curte sol, mar e futebol!"
            href="/encontros/encontro01"
          />

          <CardEncontros
            title="Treino Coletivo — Porto Alegre (RS)"
            date="13/07/2025 — 18h00"
            location="Parque Marinha do Brasil, Av. Borges de Medeiros, 2035 — Porto Alegre, RS"
            type="Treino Coletivo"
            vacancies="15"
            text="Treino focado em entrosamento, jogadas rápidas e coletivas. Excelente para quem quer melhorar o trabalho em equipe."
            href="/encontros/encontro01"
          />

          <CardEncontros
            title="Jogo das Estrelas Passa a Bola — Salvador (BA)"
            date="20/07/2025 — 17h00"
            location="Arena Pituaçu, Av. Paralela, s/n — Salvador, BA"
            type="Especial"
            vacancies="20"
            text="Evento especial para celebrar o futebol feminino em Salvador! Venha participar e mostrar sua paixão pelo esporte."
            href="/encontros/encontro01"
          />
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
