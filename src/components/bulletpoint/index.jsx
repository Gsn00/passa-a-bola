export default function BulletPoint({ selected, children }) {
  return (
    <span
      className={`rounded-[50%] cursor-pointer border border-[#9D10A2] flex items-center justify-center text-sm ${
        selected == true ? "bg-[#9D10A2] text-white!" : "bg-transparent"
      } ${children != undefined ? "min-w-5 min-h-5" : "min-w-4 min-h-4"}`}
    >
      {children}
    </span>
  );
}
