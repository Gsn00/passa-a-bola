export default function CardHistoria(props) {
  return (
    <a
      href={props.href}
      className="rounded-2xl shadow-md cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-xl"
    >
      <img src={props.src} alt={props.alt} className="rounded-2xl" />
    </a>
  );
}
