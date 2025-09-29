import { Search } from "lucide-react";

export default function SearchBar(props) {
  return (
    <div className="flex bg-white rounded-2xl w-full shadow-lg">
      <div className="p-4 ">
        <Search color="#757575" />
      </div>
      <input
        className="w-full py-4 pr-4 outline-0 font-semibold"
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
}
