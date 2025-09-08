import BackgroundShapes from "../../components/backgroundshapes";
import Container from "../../components/container";
import Header from "../../components/header";
import Footer from "../../components/footer";
import SectionTitle from "../../components/sectiontitle";

export default function Peneiras() {
  return (
    <section>
      <Container>
        <BackgroundShapes />
        <Header />
        <SectionTitle textgray="Peneiras" textpurple="Online" />

        <div className="flex flex-col gap-3 max-w-[700px] mx-auto">
          <h3 className="font-bold text-xl">Como Funciona a Peneira Online</h3>
          <p className="text-justify">
            Se você sonha em jogar futebol profissionalmente ou quer mostrar o
            seu talento, essa é a sua chance! A peneira online do Passa a Bola
            foi criada para dar visibilidade a jogadoras de todo o Brasil —
            independente de onde você mora.
          </p>

          <h3 className="font-bold text-xl mt-5">Etapas da Peneira</h3>
          <ol>
            <li>
              <p>Preencha o formulário</p>
            </li>
          </ol>
        </div>

        <Footer />
      </Container>
    </section>
  );
}
