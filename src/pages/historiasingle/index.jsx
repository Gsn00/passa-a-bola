import BackgroundShapes from "../../components/backgroundshapes";
import Container from "../../components/container";
import Footer from "../../components/footer";
import Header from "../../components/header";
import HistoriaSection from "../../components/historiasection";
import SectionTitle from "../../components/sectiontitle";

export default function HistoriaSingle() {
  return (
    <section>
      <Container>
        <BackgroundShapes />
        <Header />
        <SectionTitle textgray="História do" textpurple="Futebol Feminino" />

        <div className="flex flex-col gap-10 font-[League_Spartan] px-30">
          <HistoriaSection title="A Primeira Partida de Futebol Feminino no Brasil">
            O futebol é, sem dúvida, uma das maiores paixões nacionais. No
            entanto, sua história no Brasil não foi marcada apenas por vitórias
            e glórias dentro de campo, mas também por lutas sociais —
            especialmente quando se trata do futebol feminino. A trajetória das
            mulheres no esporte é repleta de desafios, sendo a primeira partida
            de futebol feminino no Brasil um marco simbólico de resistência e
            pioneirismo.
          </HistoriaSection>

          <HistoriaSection title="Década de 1920">
            A primeira partida de futebol feminino oficialmente registrada no
            Brasil aconteceu no ano de 1921, em São Paulo. O jogo foi promovido
            como uma atração diferente e contou com duas equipes: "Senhoritas de
            Tremembé" e "Senhoritas de Cantareira", nomes inspirados em bairros
            da cidade. A partida foi realizada no Campo da Associação Atlética
            São Paulo Alpargatas, com um bom público presente, curioso para ver
            mulheres jogando um esporte até então considerado "inadequado" para
            elas.
          </HistoriaSection>

          <div>
            <img src="/images/historiasingle-01.png" alt="" />
          </div>

          <HistoriaSection title="O Preconceito e a Repressão">
            Apesar da popularidade inicial do evento, a sociedade da época ainda
            era marcada por forte machismo e conservadorismo. Muitos viam o
            futebol como uma prática "masculina", incompatível com o papel que
            esperavam das mulheres. Como reflexo disso, em 1941, durante o
            governo de Getúlio Vargas, foi decretada a proibição da prática de
            esportes considerados "incompatíveis com a natureza feminina",
            incluindo o futebol. Esse veto perdurou por quase 40 anos e só foi
            oficialmente revogado em 1979.
          </HistoriaSection>

          <div>
            <img src="/images/historiasingle-02.png" alt="" />
          </div>

          <HistoriaSection title="Seleção Brasileira Feminina">
            A primeira partida de futebol feminino foi mais do que um jogo — foi
            um ato de coragem. As jogadoras desafiaram os padrões da época,
            abrindo caminho para as futuras gerações. Ainda que a repressão
            institucional tenha dificultado o desenvolvimento da modalidade, a
            paixão e a determinação das mulheres pelo esporte resistiram ao
            tempo.
          </HistoriaSection>

          <div>
            <img src="/images/historiasingle-03.png" alt="" />
          </div>
        </div>
        <Footer />
      </Container>
    </section>
  );
}
