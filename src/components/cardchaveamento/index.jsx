import { ChevronRight } from "lucide-react";

export default function CardChaveamento(props) {
  const firstgoals = parseInt(props.firstgoals);
  const secondgoals = parseInt(props.secondgoals);

  const winner = firstgoals > secondgoals ? props.first : props.second;

  return (
    <div
      className={`flex flex-col gap-2 bg-white rounded-xl pt-3 pb-5 px-3 shadow-lg relative ${
        props.quartas ? "sm:my-[66px]" : ""
      } ${props.semi ? "sm:my-[197px]" : ""} ${
        props.final
          ? "my-auto bg-[linear-gradient(141deg,rgba(235,227,225,1)_0%,rgba(226,212,221,1)_75%,rgba(217,198,218,1)_100%)]! border-1 border-[#a1769c]"
          : ""
      }`}
    >
      <div
        className={`absolute w-[15px] h-[1px] bg-[#bd9ac9] top-1/2 right-[-15px] ${
          props.final ? "hidden" : "hidden sm:flex"
        }`}
      >
        <ChevronRight
          className="absolute top-[-9px] right-[-9px]"
          size={19}
          strokeWidth={2.5}
          color="#bd9ac9"
        />
      </div>
      <p className="text-[#854d97]!">{props.date}</p>
      <div
        className={`flex items-center gap-3 ${
          winner == props.first && !props.final ? "bg-[#f8f6f9]  font-bold" : ""
        } ${
          winner == props.first && props.final ? "bg-[#dccbdc]  font-bold" : ""
        }`}
      >
        <div className="w-[20px] h-[20px] rounded-full bg-[#f2e3f8]"></div>
        <p>{props.first}</p>
        <h3 className="ml-auto text-[#854d97]! font-bold">{firstgoals}</h3>
      </div>
      <div
        className={`flex items-center gap-3 ${
          winner == props.second && !props.final ? "bg-[#f8f6f9] font-bold" : ""
        } ${
          winner == props.second && props.final ? "bg-[#dccbdc] font-bold" : ""
        }`}
      >
        <div className="w-[20px] h-[20px] rounded-full bg-[#f2e3f8]"></div>
        <p>{props.second}</p>
        <h3 className="ml-auto text-[#854d97]! font-bold">{secondgoals}</h3>
      </div>
    </div>
  );
}
