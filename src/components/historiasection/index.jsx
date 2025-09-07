export default function HistoriaSection(props) {
  return (
    <div>
      <h2 className="font-bold text-2xl text-center mb-5">{props.title}</h2>
      <p className="font-light text-justify text-xl">{props.children}</p>
    </div>
  );
}
