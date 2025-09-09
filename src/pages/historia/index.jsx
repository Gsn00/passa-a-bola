import Header from "../../components/header";
import Footer from "../../components/footer";
import SectionTitle from "../../components/sectiontitle";
import Container from "../../components/container";
import BackgroundShapes from "../../components/backgroundshapes";
import Input from "../../components/input";
import { Search, ChevronsLeft, ChevronsRight } from "lucide-react";
import CardHistoria from "../../components/cardhistoria";
import BulletPoint from "../../components/bulletpoint";
import Pagination from "../../components/pagination";
import HeaderMobile from "../../components/headermobile";

export default function Historia() {
  return (
    <section>
      <Container>
        <BackgroundShapes />
        <Header />
        <HeaderMobile />
        <SectionTitle textgray="História do" textpurple="Futebol Feminino" />

        <div className="max-w-xl w-full p-5 flex gap-5 bg-[#D8D1D1] rounded-md shadow-md mx-auto mb-15">
          <Input type="text" placeholder="Pesquise aqui..." className="" />
          <button className="bg-white w-[40px] h-[40px] flex items-center justify-center cursor-pointer rounded-md shadow-md">
            <Search />
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mb-15">
          <CardHistoria
            href="/historia/historia01"
            src="/images/historia-01.jpg"
            alt=""
          />
          <CardHistoria
            href="/historia/historia02"
            src="/images/historia-02.jpg"
            alt=""
          />
          <CardHistoria
            href="/historia/historia03"
            src="/images/historia-03.jpg"
            alt=""
          />
          <CardHistoria
            href="/historia/historia04"
            src="/images/historia-04.jpg"
            alt=""
          />
          <CardHistoria
            href="/historia/historia05"
            src="/images/historia-05.jpg"
            alt=""
          />
          <CardHistoria
            href="/historia/historia06"
            src="/images/historia-06.jpg"
            alt=""
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
