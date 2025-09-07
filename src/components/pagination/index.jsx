import { ChevronsLeft, ChevronsRight } from "lucide-react";

export default function Pagination(props) {
  return (
    <div className="max-w-xl w-full p-5 flex justify-center items-center gap-5 bg-[#D8D1D1] rounded-md shadow-md mx-auto">
      <button className="cursor-pointer">
        <ChevronsLeft />
      </button>
      {props.children}
      <button className="cursor-pointer">
        <ChevronsRight />
      </button>
    </div>
  );
}
