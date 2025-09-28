export default function Field(props) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <p className="font-bold text-sm">{props.title}</p>
      {props.children}
    </div>
  );
}
