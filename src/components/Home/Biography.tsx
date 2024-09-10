export default function Biography() {
  return (
    <div className="flex flex-col items-center max-w-[1320px] mx-auto  space-y-4 md:space-y-6 px-4 md:px-0 mt-10">
      <div className="flex flex-col normal-text justify-center items-center max-w-2xl">
        <h1 className="text-3xl font-light text-black text-center mb-3">
          Developer, Designer and Photographer.
        </h1>
        <div className="w-16 h-1 bg-[#696565] mb-4"></div>
        <div className="px-20">
          <p className="px-6 text-justify">
            I'm Emmanuel, I graduated from{" "}
            <span className="font-bold">McMaster University</span> with a
            bachelor degree in Software Engineering Technology. I’m currently a
            Security Engineer at{" "}
            <span className="font-bold text-[#9146FF]">Twitch</span> and based
            in Brooklyn, NY. I occasionally work on
            <a href="#" className="text-blue-500 underline ml-1">
              side projects
            </a>
            , with a focus on finance, product design and security.
          </p>
        </div>
      </div>
    </div>
  );
}
