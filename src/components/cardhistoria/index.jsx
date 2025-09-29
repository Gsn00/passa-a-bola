import { Book, BookText } from "lucide-react";

export default function CardHistoria(props) {
  return (
    <a
      href={props.href}
      className="h-auto lg:h-[220px] rounded-2xl mx-auto overflow-hidden bg-white flex flex-col lg:flex-row w-full max-w-2xl shadow-md cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-xl"
    >
      <img
        src={props.src}
        alt={props.alt}
        className="w-auto lg:w-[300px] h-auto lg:h-[220px] object-cover"
      />
      <div className="p-5 gap-2 flex flex-col">
        <span className="text-[#690A6C]! font-bold text-lg flex items-center gap-2">
          <BookText size={20} /> {props.year}
        </span>
        <h2 className="font-bold text-lg">{props.title}</h2>
        <p className="text-gray-600! line-clamp-4 w-full">
          {props.description}
        </p>
      </div>
    </a>
  );
}
