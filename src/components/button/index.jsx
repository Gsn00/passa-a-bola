export default function Button(props) {
  return (
    <button
      {...props}
      className={`px-5 pt-2 pb-1 bg-transparent rounded-xl cursor-pointer shadow-lg border-1 border-[#690A6C] text-[#690A6C]! font-[League_Spartan] transition-colors hover:bg-[#690A6C] hover:text-white! ${props.className}`}
    >
      {props.children}
    </button>
  );
}
