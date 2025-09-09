export default function SectionTitle({ textgray, textpurple }) {
  return (
    <div className="max-lg:px-5 size-fit mx-auto mb-10">
      <h1 className="text-[#696969]! text-5xl font-bold font-[League_Spartan]">
        {textgray}
      </h1>
      <h1 className="text-[#690A6C]! text-5xl font-bold font-[League_Spartan]">
        {textpurple}
      </h1>
    </div>
  );
}
