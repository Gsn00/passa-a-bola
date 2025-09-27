export default function CardDica({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col h-full gap-2 bg-white p-10 rounded-3xl shadow-lg text-center transition-transform hover:scale-105">
      <span className="bg-[#f4e8fa] w-[80px] h-[80px] rounded-full flex items-center justify-center mx-auto">
        <Icon size={30} color="#bf5af0" />
      </span>
      <h2 className="text-lg font-semibold text-[#bf5af0]!">{title}</h2>
      <p className="text-[#656565]!">{description}</p>
    </div>
  );
}
