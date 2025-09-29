import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function HeaderMobile() {
  const [opened, setOpened] = useState(false);

  const menuItems = [
    { label: "Início", href: "/" },
    { label: "Encontros", href: "/encontros" },
    { label: "Peneiras", href: "/peneiras" },
    { label: "Copa", href: "/copa" },
    { label: "História", href: "/historia" },
    { label: "Sobre", href: "/sobre" },
    { label: "Minha Conta", href: "/login" },
  ];

  function toggleMenu() {
    setOpened(!opened);
  }

  return (
    <header className="h-fit flex lg:hidden items-center justify-between px-8 font-[Open_Sans] py-10">
      <div>
        <img src="/images/logo_mobile.png" alt="" />
      </div>
      <button onClick={() => toggleMenu()}>
        <Menu size={34} />
      </button>

      <div
        onClick={() => toggleMenu()}
        className={`bg-black opacity-60 w-[100vw] h-[100vh] fixed z-19 top-0 left-0 ${
          opened ? "flex" : "hidden"
        }`}
      ></div>
      <div
        className={`w-[75vw] pb-40 h-screen overflow-y-auto bg-white fixed z-30 top-0 right-0 shadow-xl flex flex-col transform transition-transform duration-300 ${
          opened ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-gray-200">
          <span className="text-xl font-semibold text-gray-800">Menu</span>
          <button onClick={toggleMenu}>
            <X size={28} className="text-gray-600 hover:text-gray-900" />
          </button>
        </div>

        <nav className="flex flex-col px-6 mt-4 space-y-2">
          {menuItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="py-4 text-lg text-gray-700 border-b border-gray-100 hover:text-purple-700 active:pl-2 transition-all"
              onClick={(e) => {
                e.preventDefault();
                const url = e.currentTarget.getAttribute("href");
                setTimeout(() => {
                  window.location.href = url;
                }, 400);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
