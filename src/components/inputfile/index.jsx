export default function InputFile() {
  return (
    <div className="flex flex-col gap-2">
      <input
        type="file"
        accept=".xls,.xlsx,.ods,.csv"
        className="flex flex-col w-full transform transition-transform duration-300
                   hover:scale-102
                   file:mr-4 file:py-3 file:px-4 file:w-full
                   file:border file:border-[#690A6C]
                   file:rounded-xl file:font-[League_Spartan] file:text-lg
                   file:text-[#690A6C]
                   hover:file:bg-[#690A6C] hover:file:text-white
                   file:cursor-pointer"
      />

      <p className="text-xs text-gray-500">
        Formatos aceitos: XLS, XLSX, ODS ou CSV
      </p>
    </div>
  );
}
