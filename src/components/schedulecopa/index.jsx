import SectionTitle from "../sectiontitle";

export default function ScheduleCopa() {
  const events = [
    {
      id: 1,
      date: "04/10/2025",
      time: "15:00",
      cityState: "São Paulo (SP)",
      venue: "Arena Bela Vista — Rua Major Diogo, 350",
      match: "Passa a Bola SP x Fortaleza FC",
      stage: "Fase de Grupos",
    },
    {
      id: 2,
      date: "05/10/2025",
      time: "16:30",
      cityState: "Belo Horizonte (MG)",
      venue: "Campo Santa Tereza — Rua Hermilo Alves, 75",
      match: "BH United x Salvador FC",
      stage: "Fase de Grupos",
    },
    {
      id: 3,
      date: "06/10/2025",
      time: "09:30",
      cityState: "Fortaleza (CE)",
      venue: "Praia do Futuro — Av. Zezé Diogo",
      match: "Fortaleza FC x Time Litoral",
      stage: "Fase de Grupos",
    },
    {
      id: 4,
      date: "11/10/2025",
      time: "18:00",
      cityState: "Curitiba (PR)",
      venue: "Centro Esportivo Cajuru — Rua da Cidadania, 800",
      match: "Curitiba Ladies x Passa a Bola SP",
      stage: "Fase de Grupos",
    },
    {
      id: 5,
      date: "18/10/2025",
      time: "14:00",
      cityState: "Porto Alegre (RS)",
      venue: "Parque Marinha do Brasil — Av. Borges de Medeiros, 2035",
      match: "Porto Alegre FC x Time Sul",
      stage: "Quartas de Final",
    },
    {
      id: 6,
      date: "19/10/2025",
      time: "16:00",
      cityState: "Salvador (BA)",
      venue: "Arena Pituaçu — Av. Paralela",
      match: "Salvador FC x BH United",
      stage: "Quartas de Final",
    },
    {
      id: 7,
      date: "25/10/2025",
      time: "17:00",
      cityState: "Brasília (DF)",
      venue: "Estádio Nacional (campo auxiliar)",
      match: "Semifinal A",
      stage: "Semifinais",
    },
    {
      id: 8,
      date: "01/11/2025",
      time: "19:00",
      cityState: "Rio de Janeiro (RJ)",
      venue: "Estádio (final) — local a confirmar",
      match: "Final — Campeão vs Vice",
      stage: "Final",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-8">
      <SectionTitle textgray="Cronograma" textpurple="da Copa" />
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((e) => (
          <article
            key={e.id}
            className="bg-white backdrop-blur-sm p-4 rounded-md shadow-md"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold">{e.stage}</span>
              <span className="text-xs">
                {e.date} • {e.time}
              </span>
            </div>
            <h3 className="font-bold text-lg mb-1">{e.match}</h3>
            <p className="text-sm text-gray-200">{e.venue}</p>
            <p className="text-xs mt-2 text-gray-300">{e.cityState}</p>
          </article>
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-300">
        Cronograma sujeito a alterações — confirme horários e locais antes do
        jogo.
      </p>
    </section>
  );
}
