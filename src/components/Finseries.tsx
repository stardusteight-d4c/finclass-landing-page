import thunderLightning from '../assets/thunder-lightning.svg'

interface Props {}

export const Finseries = (props: Props) => {
  return (
    <section className={style.wrapper}>
      <div className={style.contentWrapper}>
        <div className={style.textCenterHeading}>
          <span className={style.spanFloat}>
            Aprenda na prática com os melhores do mercado
            <img
              src={thunderLightning}
              alt="thunder-lightning/icon"
              className={style.thunderIcon}
            />
          </span>
          <h2 className={style.heading}>
            Na Prática <strong className={style.strong}>|</strong> Finseries
          </h2>
        </div>
        <div>
          <div className={style.playerContainer}>
            <iframe
              src="https://www.youtube.com/embed/8yXVOCHafYI?color=white&theme=dark&fs=0&modestbranding=0"
              className={style.youtubePlayer}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const style = {
  wrapper: `max-w-[100vw] overflow-hidden bg-black`,
  contentWrapper: `pt-20 md:pt-44 pb-11 max-w-screen-xl w-full mx-auto px-4`,
  textCenterHeading: `text-center`,
  spanFloat: `textGradient tracking-widest text-sm md:text-lg mx-auto w-fit mb-2 flex flex-col-reverse md:flex-row items-center gap-x-2 uppercase font-semibold`,
  thunderIcon: `w-5 -mt-[2px] mb-2 md:mb-0`,
  heading: `text-3xl md:text-4xl font-bold mb-[44px] !leading-[140%]`,
  strong: `textGradient`,
  playerContainer: `youtubePlayer w-full relative`,
  youtubePlayer: `outline-none border border-[#FFFFFF2E] w-full`,
}
