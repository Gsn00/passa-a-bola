export default function InfoBox(props) {
  return (
    <div className="flex gap-2">
      <h3 className="font-bold text-[#606060]!">{props.title}</h3>
      <p className="text-[#606060]!">{props.content}</p>
    </div>
  );
}
