import BulletPoint from "../../components/bulletpoint";
import Header from "../../components/header";
import HeaderMobile from "../../components/headermobile";
import Pagination from "../../components/pagination";

export default function Home() {
  return (
    <section className="max-lg:px-5 relative select-none max-lg:flex max-lg:flex-col max-lg:justify-between max-lg:min-h-screen">
      <Header />
      <HeaderMobile />

      <div className="w-full lg:h-[70vh] flex flex-col lg:flex-row">
        <div className="w-full lg:w-[50%] h-full flex flex-col gap-10 justify-center px-10 lg:px-30">
          <h1 className="font-bold font-[League_Spartan] text-4xl lg:text-5xl text-[#9D10A2]! relative tracking-wide">
            Passa a Bola
            <div className="absolute w-[140px] lg:w-[200px] h-1.5 lg:h-2 bg-[#5C0C5F] -bottom-5"></div>
          </h1>
          <p className="tracking-widest font-[Poppins] text-sm lg:text-lg text-justify">
            O Passa a Bola nasceu com um propósito claro: fortalecer a presença
            das mulheres no futebol e abrir caminhos reais para quem sonha em ir
            além dos treinos. Aqui, o esporte é levado a sério — e o talento
            feminino, valorizado.
          </p>
          <div className="w-full text-center">
            <button className="bg-[#9D10A2] py-3 w-[250px] max-lg:w-[70%] text-white! text-xl rounded-md shadow-md cursor-pointer font-[League_Spartan]">
              Saiba Mais
            </button>
          </div>
        </div>
        <div className="w-[90%] mx-auto lg:w-[50%] flex justify-center items-center">
          <img className="w-full" src="/images/home-img-01.png" alt="" />
        </div>
      </div>

      <Pagination>
        <BulletPoint selected={true} />
        <BulletPoint />
        <BulletPoint />
        <BulletPoint />
        <BulletPoint />
      </Pagination>

      <div className="relative hidden lg:flex">
        <div className="w-full aspect-square bg-[#EBD4F2] rounded-[50%] fixed top-[35%] left-[50%] z-[-10]"></div>
        <div className="w-full aspect-square bg-[#EBD4F2] rounded-[50%] fixed bottom-[35%] left-[50%] z-[-10]"></div>
      </div>

      <div className="relative flex lg:hidden">
        <div className="w-[140%] aspect-square bg-[#EBD4F2] rounded-[50%] fixed top-[80%] left-[-20%] z-[-10]"></div>
        <div className="w-[140%] aspect-square bg-[#EBD4F2] rounded-[50%] fixed bottom-[80%] left-[-20%] z-[-10]"></div>
      </div>
    </section>
  );
}
