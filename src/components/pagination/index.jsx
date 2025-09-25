import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination(props) {
  return (
    <div className="max-w-xl w-full p-5 flex justify-center items-center gap-5 bg-[#D8D1D1] rounded-md shadow-md mx-auto">
      <button className="p-1 rounded-full bg-[#c1bcbc] transition-all duration-300 hover:bg-[#a7a3a3] hover:scale-110 cursor-pointer">
        <ChevronLeft size={18} />
      </button>
      {props.children}
      <button className="p-1 rounded-full bg-[#c1bcbc] transition-all duration-300 hover:bg-[#a7a3a3] hover:scale-110 cursor-pointer">
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
