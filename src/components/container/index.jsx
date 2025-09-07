export default function Container(props) {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-5">{props.children}</div>
  );
}
