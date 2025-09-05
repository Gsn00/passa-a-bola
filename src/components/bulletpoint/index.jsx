export default function BulletPoint({ selected }) {
  return (
    <span
      className={`w-4 h-4 rounded-[50%] cursor-pointer border border-[#9D10A2] ${
        selected == true ? "bg-[#9D10A2]" : "bg-transparent"
      }`}
    ></span>
  );
}
