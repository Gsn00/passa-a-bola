export default function CardDepoimento({ name, testimony, image }) {
  return (
    <div className="flex flex-col h-full gap-2 bg-white p-10 rounded-3xl shadow-lg text-center transition-transform hover:scale-105">
      <img
        src={image}
        alt=""
        className="mx-auto w-[80px] h-[80px] rounded-full object-cover"
      />
      <h2 className="text-lg font-semibold text-[#404040]!">{name}</h2>
      <p className=" text-[#690a6c]! font-semibold text-sm">“{testimony}”</p>
    </div>
  );
}
