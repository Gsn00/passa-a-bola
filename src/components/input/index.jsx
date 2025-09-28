export default function Input(props) {
  return (
    <input
      {...props}
      type={props.type}
      placeholder={props.placeholder}
      className="bg-white outline-0 border-0 rounded-xl px-5 py-3 w-full shadow-md"
    />
  );
}
