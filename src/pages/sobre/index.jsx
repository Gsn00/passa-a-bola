import Header from "../../components/header";
import Container from "../../components/container";
import SectionTitle from "../../components/sectiontitle";
import Footer from "../../components/footer";
import BackgroundShapes from "../../components/backgroundshapes";

export default function Sobre() {
  return (
    <section>
      <BackgroundShapes />
      <Header />
      <Container>
        <SectionTitle textgray="Sobre o" textpurple="Passa a Bola" />

        <div className="px-20 flex flex-col gap-10">
          <p className="font-bold text-[#323232]! text-lg text-justify tracking-wide font-[Sora]">
            O Passa a Bola nasceu com a missão de transformar o cenário do
            futebol feminino no Brasil, oferecendo visibilidade, oportunidades e
            apoio a mulheres que vivem a paixão pelo esporte. Mais do que um
            projeto, somos uma comunidade que acredita no poder do futebol como
            ferramenta de inclusão, empoderamento e transformação social.
            <br />
            <br />
            Nosso objetivo é criar pontes entre atletas, treinadoras, torcedoras
            e profissionais do meio esportivo, promovendo o crescimento e a
            valorização do futebol feminino em todas as suas dimensões. Atuamos
            com foco na informação, na formação e no incentivo à prática
            esportiva, sempre colocando a mulher como protagonista dentro e fora
            das quatro linhas.
          </p>

          <div className="flex justify-evenly">
            <img src="/images/sobre-01.png" alt="" />
            <img src="/images/sobre-02.png" alt="" />
            <img src="/images/sobre-03.png" alt="" />
          </div>

          <p className="font-bold text-[#323232]! text-lg text-justify tracking-wide font-[Sora]">
            Por meio de conteúdo digital, encontros presenciais, peneiras e
            parcerias, buscamos ampliar o acesso das mulheres ao futebol de
            maneira democrática e acolhedora. O Passa a Bola é também um espaço
            para compartilhar histórias inspiradoras, conquistas, desafios e
            iniciativas que constroem um futuro mais justo e diverso para o
            esporte.
            <br />
            <br />
            Se você joga, treina, torce ou apenas acredita no potencial
            transformador do futebol, o Passa a Bola é para você. Junte-se a nós
            nessa rede que não para de crescer e ajude a dar o próximo passo
            rumo a um futebol mais feminino, mais forte e mais livre.
          </p>

          <div>
            <h1 className="font-[Montserrat] text-5xl text-transparent! [-webkit-text-stroke-color:#690A6C] [-webkit-text-stroke-width:1px] text-center">
              JOIN US
            </h1>
          </div>
        </div>

        <Footer />
      </Container>
    </section>
  );
}
