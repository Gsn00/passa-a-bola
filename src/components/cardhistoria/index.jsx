export default function CardHistoria(props) {
  return (
    <a href={props.href} className="rounded-2xl shadow-md cursor-pointer">
      <img src={props.src} alt={props.alt} className="rounded-2xl" />
    </a>
  );
}
