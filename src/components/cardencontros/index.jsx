import InfoBox from "./InfoBox";

export default function CardEncontros(props) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-md p-5 flex flex-col min-h-[100%] transition-transform duration-300 hover:scale-105 hover:shadow-xl ${props.className}`}
    >
      <h3 className="font-bold mb-3 mx-auto">{props.title}</h3>

      <InfoBox title="Data:" content={props.date} />
      <InfoBox title="Local:" content={props.location} />
      <InfoBox title="Tipo:" content={props.type} />
      <InfoBox title="Vagas Restantes:" content={props.vacancies} />

      <p className="mt-3 mb-3">{props.text}</p>

      {props.hidebutton == true ? (
        ""
      ) : (
        <div className="text-center mt-auto">
          <a
            href={props.href}
            className="px-5 py-2 bg-transparent rounded-lg shadow-md cursor-pointer border-1 border-[#690A6C] text-[#690A6C]! font-[League_Spartan] transition-colors hover:bg-[#690A6C] hover:text-white!"
          >
            Quero Participar!
          </a>
        </div>
      )}
    </div>
  );
}
