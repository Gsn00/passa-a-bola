import BackgroundShapes from "../../components/backgroundshapes";
import Header from "../../components/header";
import Container from "../../components/container";
import Footer from "../../components/footer";
import SectionTitle from "../../components/sectiontitle";
import ScheduleCopa from "../../components/schedulecopa";
import HeaderMobile from "../../components/headermobile";
import Pagination from "../../components/pagination";
import BulletPoint from "../../components/bulletpoint";

export default function Copa() {
  return (
    <section>
      <Container>
        <BackgroundShapes />
        <Header />
        <HeaderMobile />

        <div className="w-full rounded-[40px] shadow-xl">
          <img
            className="w-full object-cover max-lg:h-[50vh] rounded-[40px] mb-15"
            src="/images/copa-01.png"
            alt=""
          />
        </div>

        <div className="mb-15">
          <Pagination>
            <BulletPoint selected={true} />
            <BulletPoint />
            <BulletPoint />
          </Pagination>
        </div>

        <SectionTitle textgray="A Copa do" textpurple="Passa a Bola" />

        <div className="flex flex-col lg:flex-row px-10 lg:px-30 mb-5 gap-10">
          <div className="relative w-full lg:w-[50%] border-5 border-[#f7edf7] bg-[#f7edf7]/55 rounded-4xl">
            <p className="text-justify w-full text-xl tracking-wide font-[League_Spartan] bg-[#fbf7fb] p-8 rounded-4xl shadow-lg relative top-4 left-3">
              A Copa Passa a Bola é o principal torneio organizado pela
              comunidade Passa a Bola, pensado para fortalecer o futebol
              feminino em todas as suas formas — do recreativo ao competitivo.
              Nascida como um encontro entre amigas e times locais, a Copa
              cresceu para reunir equipes de várias regiões do Brasil,
              promovendo esporte, respeito e trocas técnicas.
            </p>
          </div>

          <div className="relative w-full lg:w-[50%] border-5 border-[#fbf7fb] bg-[#fbf7fb]/55 rounded-4xl top-[85px]">
            <p className="text-justify text-xl w-full tracking-wide font-[League_Spartan] bg-[#f7edf7] p-8 rounded-4xl shadow-lg relative top-4 right-3">
              Nossa missão é criar um ambiente seguro, inclusivo e de alto
              astral, onde jogadoras possam desenvolver habilidades, conhecer
              outras atletas e ganhar visibilidade. O evento prioriza fair play,
              arbitragem qualificada, e ações educativas (oficinas, palestras e
              rodas de conversa sobre saúde e protagonismo feminino).
            </p>
          </div>
        </div>

        <div className="text-center mt-40 mb-15">
          <a
            href="/copa/inscricao"
            className="
      inline-block px-12 py-4 text-3xl font-bold text-white!
      rounded-2xl shadow-lg cursor-pointer font-[League_Spartan]
      bg-[#690A6C] transition-all duration-300
      hover:bg-[#860e8a] hover:scale-105 hover:shadow-[0_0_20px_rgba(105,10,108,0.7)]
    "
          >
            Inscreva-se!
          </a>
        </div>

        <ScheduleCopa />
        <Footer />
      </Container>
    </section>
  );
}
