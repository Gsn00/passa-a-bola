export default function Button(props) {
  return (
    <button
      className={`px-5 py-1 bg-transparent rounded-md cursor-pointer border-1 border-[#690A6C] text-[#690A6C]! font-[League_Spartan] ${props.className}`}
    >
      {props.children}
    </button>
  );
}
