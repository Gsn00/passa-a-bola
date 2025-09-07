export default function Input(props) {
  return (
    <input
      {...props}
      type={props.type}
      placeholder={props.placeholder}
      className="bg-white outline-0 border-0 rounded-md px-5 py-2 w-full shadow-md"
    />
  );
}
