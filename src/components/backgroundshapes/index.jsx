export default function BackgroundShapes() {
  return (
    <>
      <div className="relative hidden lg:flex">
        <div className="w-[800px] 2xl:w-[1500px] aspect-square rounded-full border border-gray-500 opacity-20 fixed -top-90 -right-60 2xl:-top-250 2xl:-right-120 z-[-20]" />
        <div className="w-[600px] 2xl:w-[1300px] aspect-square rounded-full border border-gray-500 opacity-20 fixed -bottom-70 -left-30 2xl:-bottom-190 2xl:-left-120 z-[-20]" />
      </div>

      <div className="relative flex lg:hidden">
        <div className="w-[140%] aspect-square rounded-full border border-gray-500 opacity-20 fixed top-[80%] left-[-20%] z-[-20]" />
        <div className="w-[140%] aspect-square rounded-full border border-gray-500 opacity-20 fixed bottom-[80%] left-[-20%] z-[-20]" />
      </div>
    </>
  );
}
