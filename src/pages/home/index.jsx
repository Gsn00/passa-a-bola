import BulletPoint from "../../components/bulletpoint";
import Header from "../../components/header";

export default function Home() {
  return (
    <section className="relative">
      <Header />

      <div className="w-full h-[70vh] flex">
        <div className="w-[50%] h-full flex flex-col gap-15 justify-center px-30">
          <h1 className="font-bold font-[League_Spartan] text-7xl text-[#9D10A2]! relative tracking-wide">
            Passa a Bola
            <div className="absolute w-[300px] h-2 bg-[#5C0C5F] -bottom-5"></div>
          </h1>
          <p className="tracking-widest font-[Poppins] text-lg text-justify">
            O Passa a Bola nasceu com um propósito claro: fortalecer a presença
            das mulheres no futebol e abrir caminhos reais para quem sonha em ir
            além dos treinos. Aqui, o esporte é levado a sério — e o talento
            feminino, valorizado.
          </p>
          <div className="w-full text-center">
            <button className="bg-[#9D10A2] py-3 px-30 text-white! text-xl rounded-md shadow-md cursor-pointer font-[Open_Sans]">
              Saiba Mais
            </button>
          </div>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <img className="w-full" src="/images/home-img-01.png" alt="" />
        </div>
      </div>

      <div className="w-full h-[10vh] flex justify-center items-center gap-10">
        <div className="w-auto flex gap-10 bg-[#D8D1D1] py-5 px-10 rounded-md shadow-md">
          <BulletPoint selected={true} />
          <BulletPoint />
          <BulletPoint />
          <BulletPoint />
          <BulletPoint />
        </div>
      </div>

      <div className="w-full aspect-square bg-[#EBD4F2] rounded-[50%] fixed top-[35%] left-[50%] z-[-10]"></div>
      <div className="w-full aspect-square bg-[#EBD4F2] rounded-[50%] fixed bottom-[35%] left-[50%] z-[-10]"></div>
    </section>
  );
}
