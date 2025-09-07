export default function BulletPoint({ selected, children }) {
  return (
    <span
      className={`rounded-[50%] cursor-pointer border border-[#9D10A2] flex items-center justify-center text-sm ${
        selected == true ? "bg-[#9D10A2] text-white!" : "bg-transparent"
      } ${children != undefined ? "w-5 h-5" : "w-4 h-4"}`}
    >
      {children}
    </span>
  );
}
