export default function BulletPoint({ selected, children, onClick }) {
  return (
    <span
      onClick={onClick}
      className={`rounded-[50%] cursor-pointer border border-[#9D10A2] flex items-center justify-center text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl ${
        selected == true ? "bg-[#9D10A2] text-white!" : "bg-transparent"
      } ${children != undefined ? "min-w-6 min-h-6" : "min-w-5 min-h-5"}`}
    >
      {children}
    </span>
  );
}
