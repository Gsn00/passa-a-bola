export default function Header() {
  return (
    <header className="h-[20vh] flex items-center justify-center font-[Open_Sans]">
      <div className="flex items-center gap-10 bg-[#D8D1D1] relative w-auto py-4 px-14 rounded-md">
        <div className="absolute -left-18">
          <img src="/images/logo01.png" alt="" />
        </div>
        <a href="/">Início</a>
        <a href="">Encontros</a>
        <a href="">Peneiras</a>
        <a href="">Copa</a>
        <a href="/historia">História</a>
        <a href="/sobre">Sobre</a>
        <a href="">Minha Conta</a>
      </div>
    </header>
  );
}
