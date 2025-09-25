import CardChaveamento from "../cardchaveamento";

export default function ScheduleCopa() {
  return (
    <section className="py-12 px-4 md:px-8">
      <div className="flex flex-col sm:grid sm:grid-cols-4 gap-5">
        <div className="flex flex-col gap-3 bg-[#690a6c]/10 p-3 rounded-xl shadow-lg">
          <h2 className="font-bold text-3xl text-[#854d97]! mx-auto mb-5">
            Oitavas de Final
          </h2>

          <CardChaveamento
            date="10/06/2025 - 16h00"
            first="Flamengo"
            firstgoals={3}
            second="Palmeiras"
            secondgoals={1}
          />
          <CardChaveamento
            date="10/06/2025 - 19h00"
            first="Santos"
            firstgoals={0}
            second="Corinthians"
            secondgoals={2}
          />
          <CardChaveamento
            date="11/06/2025 - 16h00"
            first="Grêmio"
            firstgoals={2}
            second="Internacional"
            secondgoals={1}
          />
          <CardChaveamento
            date="11/06/2025 - 19h00"
            first="Athletico-PR"
            firstgoals={1}
            second="Fluminense"
            secondgoals={3}
          />
          <CardChaveamento
            date="12/06/2025 - 16h00"
            first="São Paulo"
            firstgoals={2}
            second="Vasco"
            secondgoals={0}
          />
          <CardChaveamento
            date="12/06/2025 - 19h00"
            first="Cruzeiro"
            firstgoals={2}
            second="Botafogo"
            secondgoals={1}
          />
          <CardChaveamento
            date="13/06/2025 - 16h00"
            first="Atlético-MG"
            firstgoals={3}
            second="Bahia"
            secondgoals={0}
          />
          <CardChaveamento
            date="13/06/2025 - 19h00"
            first="Fortaleza"
            firstgoals={1}
            second="Ceará"
            secondgoals={2}
          />
        </div>

        <div className="flex flex-col gap-3 bg-[#690a6c]/15 p-3 rounded-xl shadow-lg">
          <h2 className="font-bold text-3xl text-[#854d97]! mx-auto mb-5">
            Quartas de Final
          </h2>
          <CardChaveamento
            date="14/06/2025 - 16h00"
            first="Flamengo"
            firstgoals={2}
            second="Corinthians"
            secondgoals={1}
            quartas={true}
          />
          <CardChaveamento
            date="14/06/2025 - 19h00"
            first="Grêmio"
            firstgoals={0}
            second="Fluminense"
            secondgoals={1}
            quartas={true}
          />
          <CardChaveamento
            date="15/06/2025 - 16h00"
            first="São Paulo"
            firstgoals={3}
            second="Cruzeiro"
            secondgoals={2}
            quartas={true}
          />
          <CardChaveamento
            date="15/06/2025 - 19h00"
            first="Atlético-MG"
            firstgoals={3}
            second="Ceará"
            secondgoals={0}
            quartas={true}
          />
        </div>

        <div className="flex flex-col gap-3 bg-[#690a6c]/20 p-3 rounded-xl shadow-lg">
          <h2 className="font-bold text-3xl text-[#854d97]! mx-auto mb-5">
            Semifinais
          </h2>

          <CardChaveamento
            date="16/06/2025 - 16h00"
            first="Flamengo"
            firstgoals={1}
            second="Fluminense"
            secondgoals={2}
            semi={true}
          />
          <CardChaveamento
            date="16/06/2025 - 19h00"
            first="São Paulo"
            firstgoals={2}
            second="Atlético-MG"
            secondgoals={0}
            semi={true}
          />
        </div>

        <div className="flex flex-col gap-3 bg-[#690a6c]/25 p-3 rounded-xl shadow-lg relative">
          <h2 className="font-bold text-[150px] italic text-[#690a6c]/50! mx-auto mb-5 rotate-90 absolute top-[10%] left-[-20px]">
            Final
          </h2>
          <h2 className="font-bold text-[150px] italic text-[#690a6c]/50! mx-auto mb-5 rotate-90 absolute bottom-[10%] left-[-20px]">
            Final
          </h2>
          <CardChaveamento
            date="17/06/2025 - 16h00"
            first="Fluminense"
            firstgoals={1}
            second="São Paulo"
            secondgoals={2}
            final={true}
          />
        </div>
      </div>
    </section>
  );
}
