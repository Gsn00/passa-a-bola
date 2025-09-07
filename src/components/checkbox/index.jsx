export default function Checkbox(props) {
  return (
    <label className="flex items-start space-x-2 cursor-pointer">
      <input type="checkbox" className="hidden peer" />
      <span className="min-h-4 h-4 min-w-4 w-4 rounded border-1 border-gray-400 peer-checked:bg-[#690A6C] peer-checked:border-[#690A6C] transition"></span>
      <span className="text-sm">{props.title}</span>
    </label>
  );
}
