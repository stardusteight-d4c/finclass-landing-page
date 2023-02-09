import thunderLightning from '../assets/thunder-lightning.svg'

interface Props {}

export const Finseries = (props: Props) => {
  return (
    <section className="max-w-[100vw] overflow-hidden bg-black">
      <div className="pt-16 md:pt-28 pb-11 max-w-screen-xl w-full mx-auto px-4">
        <div className="text-center">
          <span className="textGradient tracking-widest text-sm md:text-xl mx-auto w-fit mb-2 flex flex-col-reverse md:flex-row items-center gap-x-2 uppercase font-semibold">
            Aprenda na prática com os melhores do mercado
            <img
              src={thunderLightning}
              alt="thunder-lightning/icon"
              className="w-5 -mt-[2px] mb-2 md:mb-0"
            />
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-[44px] !leading-[140%]">
            Na Prática <strong className="textGradient">|</strong> Finseries
          </h2>
        </div>
        <div>
          <div className="youtubePlayer w-full relative">
            <div className="cursor-pointer absolute -right-4 -top-14 flex items-center gap-x-1"></div>
            <iframe
              src="https://www.youtube.com/embed/8yXVOCHafYI?color=white&theme=dark&fs=0&modestbranding=0"
              className="outline-none border border-[#FFFFFF2E] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
