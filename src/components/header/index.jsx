export default function Header() {
  return (
    <header className="h-[20vh] hidden lg:flex items-center justify-center font-[Open_Sans]">
      <div className="flex items-center gap-10 bg-[#D8D1D1] relative w-auto py-4 px-14 rounded-md font-bold tracking-wide ml-[60px]">
        <div className="absolute -left-18">
          <img src="/images/logo01.png" alt="" />
        </div>
        <a href="/">Início</a>
        <a href="/encontros">Encontros</a>
        <a href="/peneiras">Peneiras</a>
        <a href="/copa">Copa</a>
        <a href="/historia">História</a>
        <a href="/sobre">Sobre</a>
        <a href="/login">Minha Conta</a>
      </div>
    </header>
  );
}
