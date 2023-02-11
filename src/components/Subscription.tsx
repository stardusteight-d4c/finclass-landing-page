import appBannerDesktop from '../assets/subscribe-finclass.webp'
import appBannerMobile from '../assets/app-banner.png'
import plusPlayerIcon from '../assets/app/plus-player-icon.svg'

interface Props {}

export const Subscription = (props: Props) => {
  return (
    <section className={style.wrapper}>
      <div className={style.contentWrapper}>
        <div className={style.gridContainer}>
          <div className={style.firstColumn}>
            <img src={appBannerMobile} className={style.mobileImg} />
            <img src={appBannerDesktop} className={style.desktopImg} />
          </div>
          <div className={style.secondColumn}>
            <div className={style.contentContainer}>
              <img src={plusPlayerIcon} className={style.icon} />
              <h2 className={style.heading}>
                <strong className={style.txtGradient}>Aprenda finanças</strong>
                <br /> de verdade
              </h2>
              <p className={style.paragraph}>
                Tudo sobre investimento, com os maiores especialistas do mercado
                na palma da sua mão.
              </p>
              <span className={style.spanContainer}>
                <span className={style.from}>A partir de</span>
                <br />
                <span className={style.priceContainer}>
                  <strong className={style.price}>R$ 59,90</strong>{' '}
                  <span className={style.txtGradient}>/mês no plano anual</span>
                </span>
              </span>
              <a
                href="https://app.finclass.com/short-checkout"
                target="_blank"
                className={style.buttonContainer}
              >
                <span className={style.bgOverylay} />
                <span className={style.textContent}>Assine agora</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const style = {
  wrapper: `max-w-[100vw] relative overflow-visible bg-black pb-[70px] border-b border-b-[#ffffff2e]`,
  contentWrapper: `pt-28 mdd:pt-64 max-w-screen-xl w-full mx-auto px-4 md:px-4`,
  gridContainer: `grid grid-cols-1 mdd:grid-cols-2`,
  firstColumn: `col-span-1`,
  mobileImg: `block mdd:hidden mx-auto w-full max-w-[500px]`,
  desktopImg: `w-full hidden mdd:block mdd:max-w-[500px] lg:max-w-[612px] z-10 absolute -bottom-[72px] lg:-bottom-[88px]`,
  secondColumn: `col-span-1 mt-10 mdd:mt-0 flex items-center justify-center`,
  contentContainer: `text-center mdd:ml-32 mdd:mb-11 mdd:text-left mdd:w-[310px] mmd:w-[410px] xl:w-[450px]`,
  icon: `w-8 h-8 mx-auto mdd:mx-0`,
  heading: `text-3xl md:text-4xl font-bold !leading-[120%] mt-3`,
  txtGradient: `textGradient`,
  paragraph: `inline-block text-white/80 text-sm md:mb-0 mt-4 w-[90%] md:text-xl !leading-snug`,
  spanContainer: `mt-6 mb-4 inline-block`,
  from: `inline-block text-white/80 font-light`,
  priceContainer: `inline-block text-lg`,
  price: `text-2xl font-semibold`,
  buttonContainer: `relative cursor-pointer hover:ring-1  active:scale-95 transition-all duration-300 hover:ring-[#00e7f9] w-full max-w-[280px] inline-flex items-center justify-center tracking-wider px-6 py-3 overflow-hidden font-semibold text-white rounded-md group shadow-lg shadow-white/10`,
  bgOverylay: `absolute inset-0 w-full h-full opacity-1 group-hover:opacity-0 transition duration-300 ease-out opacity-1 bg-gradient-to-br from-[#0093dc] to-[#00bac7]`,
  textContent: `relative group-hover:text-[#00E7F9]`,
}
