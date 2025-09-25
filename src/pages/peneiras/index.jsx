import BackgroundShapes from "../../components/backgroundshapes";
import Container from "../../components/container";
import Header from "../../components/header";
import Footer from "../../components/footer";
import SectionTitle from "../../components/sectiontitle";
import HeaderMobile from "../../components/headermobile";

export default function Peneiras() {
  return (
    <section className="font-[League_Spartan]">
      <Container>
        <BackgroundShapes />
        <Header />
        <HeaderMobile />
        <SectionTitle textgray="Peneiras" textpurple="Online" />

        <div className="flex flex-col gap-5 max-w-[700px] mx-auto bg-[#690a6c]/10 p-10 rounded-xl shadow-lg">
          <h3 className="font-bold text-3xl mx-auto">
            Como Funciona a Peneira Online
          </h3>
          <p className="text-justify text-xl">
            Se você sonha em jogar futebol profissionalmente ou quer mostrar o
            seu talento, essa é a sua chance! A peneira online do Passa a Bola
            foi criada para dar visibilidade a jogadoras de todo o Brasil —
            independente de onde você mora.
          </p>

          <h3 className="font-bold text-2xl mt-5 mx-auto">Etapas da Peneira</h3>
          <ol className="list-decimal marker:font-bold flex flex-col gap-4 px-10 mx-auto text-justify">
            <li>
              <h3 className="text-xl font-[300]">Preencha o formulário</h3>
              <p className="text-lg">
                Nos conte mais sobre você: nome, idade, posição em campo,
                altura, peso, tempo de experiência e outros dados importantes.
              </p>
            </li>

            <li>
              <h3 className="text-xl font-[300]">Envie um vídeo seu jogando</h3>
              <p className="text-lg">
                Pode ser um trecho de um jogo, treino ou até uma apresentação
                individual. O importante é mostrar suas habilidades com a bola
                no pé.
              </p>
            </li>

            <li>
              <h3 className="text-xl font-[300]">
                Nossa equipe vai avaliar seu perfil
              </h3>
              <p className="text-lg">
                Pode ser um trecho de um jogo, treino ou até uma apresentação
                individual. O importante é mostrar suas habilidades com a bola
                no pé.
              </p>
            </li>

            <li>
              <h3 className="text-xl font-[300]">
                Se for selecionada, entramos em contato!
              </h3>
              <p className="text-lg">
                Você poderá ser convidada para uma próxima fase presencial,
                recomendada para clubes ou destaque em nossas redes.
              </p>
            </li>
          </ol>

          <h3 className="font-bold text-2xl mt-5 mx-auto">
            Dicas para seu vídeo:
          </h3>
          <ul className="list-disc flex flex-col gap-4 px-10 text-justify text-xl">
            <li>
              Mostre domínio de bola, passes, finalizações e movimentação em
              campo.
            </li>

            <li>
              Use roupas esportivas adequadas e, se possível, grave com boa
              iluminação.
            </li>

            <li>O vídeo pode ter entre 1 a 5 minutos.</li>

            <li>
              Seja autêntica! O que importa é mostrar sua paixão pelo futebol.
            </li>
          </ul>
        </div>

        <div className="text-center">
          <div className="text-center my-15">
            <a
              href="/peneiras/inscricao"
              className="
      inline-block px-12 py-4 text-3xl font-bold text-white!
      rounded-2xl shadow-lg cursor-pointer font-[League_Spartan]
      bg-[#690A6C] transition-all duration-300
      hover:bg-[#860e8a] hover:scale-105 hover:shadow-[0_0_20px_rgba(105,10,108,0.7)]
    "
            >
              Quero Participar
            </a>
          </div>
        </div>

        <Footer />
      </Container>
    </section>
  );
}
