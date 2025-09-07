export default function Select(props) {
  return (
    <select className="bg-white outline-0 border-0 rounded-md px-5 py-2 w-full shadow-md">
      {props.children}
    </select>
  );
}
