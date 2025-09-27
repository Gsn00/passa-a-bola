export default function Polaroid(props) {
  return (
    <div
      className={`bg-white shadow-lg border-4 border-white hover:rotate-3 hover:scale-105 transition-all duration-300 cursor-pointer ${props.className}`}
    >
      <img src={props.img} alt="" className="object-cover w-full h-full" />
    </div>
  );
}
