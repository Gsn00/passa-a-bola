export default function CardAprovada({ name, position, age, video }) {
  return (
    <div className="flex flex-col h-full gap-2 bg-white rounded-3xl shadow-lg text-center transition-transform hover:scale-105 overflow-hidden">
      <video
        autoPlay
        playsInline
        muted
        loop
        preload="metadata"
        className="w-full h-[450px] object-cover rounded-3xl shadow-lg"
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="p-5 pb-10 text-left">
        <h2 className="text-2xl font-semibold text-[#404040]!">{name}</h2>
        <p className=" text-[#404040]! text-xl">
          {position} | {age} anos
        </p>
      </div>
    </div>
  );
}
