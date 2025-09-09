import BackgroundShapes from "../../components/backgroundshapes";
import Header from "../../components/header";
import Container from "../../components/container";
import Footer from "../../components/footer";
import SectionTitle from "../../components/sectiontitle";
import ScheduleCopa from "../../components/schedulecopa";
import HeaderMobile from "../../components/headermobile";

export default function Copa() {
  return (
    <section>
      <Container>
        <BackgroundShapes />
        <Header />
        <HeaderMobile />

        <div className="w-full rounded-lg shadow-xl">
          <img
            className="w-full object-cover max-lg:h-[50vh] rounded-xl mb-15"
            src="/images/copa-01.png"
            alt=""
          />
        </div>

        <SectionTitle textgray="A Copa do" textpurple="Passa a Bola" />

        <div className="flex flex-col lg:flex-row gap-10 px-10 lg:px-30 mb-5">
          <p className="text-justify text-xl w-full lg:w-[50%] tracking-wide font-[League_Spartan]">
            A Copa Passa a Bola é o principal torneio organizado pela comunidade
            Passa a Bola, pensado para fortalecer o futebol feminino em todas as
            suas formas — do recreativo ao competitivo. Nascida como um encontro
            entre amigas e times locais, a Copa cresceu para reunir equipes de
            várias regiões do Brasil, promovendo esporte, respeito e trocas
            técnicas.
          </p>
          <p className="text-justify text-xl w-full lg:w-[50%] tracking-wide font-[League_Spartan]">
            Nossa missão é criar um ambiente seguro, inclusivo e de alto astral,
            onde jogadoras possam desenvolver habilidades, conhecer outras
            atletas e ganhar visibilidade. O evento prioriza fair play,
            arbitragem qualificada, e ações educativas (oficinas, palestras e
            rodas de conversa sobre saúde e protagonismo feminino).
          </p>
        </div>

        <ScheduleCopa />

        <div className="text-center">
          <a
            href="/copa/inscricao"
            className="px-15 py-3 text-4xl bg-transparent rounded-xl shadow-md cursor-pointer border-1 border-[#690A6C] text-[#690A6C]! font-[League_Spartan]"
          >
            Inscreva-se!
          </a>
        </div>

        <Footer />
      </Container>
    </section>
  );
}
