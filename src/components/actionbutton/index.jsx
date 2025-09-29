export default function ActionButton(props) {
  return (
    <a
      href={props.href}
      className="
                inline-block px-8 md:px-12 pt-3 pb-1.5 text-xl md:text-3xl font-bold text-white!
                rounded-2xl shadow-lg cursor-pointer font-[League_Spartan]
                bg-[#690A6C] transition-all duration-300 w-full max-w-[400px] text-center
                hover:bg-[#860e8a] hover:scale-105 hover:shadow-[0_0_20px_rgba(105,10,108,0.7)]
              "
    >
      {props.title}
    </a>
  );
}
