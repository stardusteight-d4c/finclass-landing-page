import appBannerDesktop from '../assets/subscribe-finclass.webp'
import appBannerMobile from '../assets/app-banner.png'
import plusPlayerIcon from '../assets/app/plus-player-icon.svg'

interface Props {}

export const Subscription = (props: Props) => {
  return (
    <section className="max-w-[100vw] relative overflow-visible bg-black pb-[70px] border-b border-b-[#ffffff2e]">
      <div className="pt-28 mdd:pt-60 max-w-screen-xl w-full mx-auto px-4 md:px-4">
        <div className="grid grid-cols-1 mdd:grid-cols-2">
          <div className="col-span-1">
            <img src={appBannerMobile} className="block mdd:hidden mx-auto w-full max-w-[500px]" />
            <img
              src={appBannerDesktop}
              alt="app-banner/png"
              className="w-full hidden mdd:block mdd:max-w-[500px] lg:max-w-[612px] z-10 absolute -bottom-[72px] lg:-bottom-[88px]"
            />
          </div>
          <div className="col-span-1 mt-10 mdd:mt-0 flex items-center justify-center">
            <div className="text-center mdd:ml-32 mdd:mb-11 mdd:text-left mdd:w-[310px] mmd:w-[410px] xl:w-[450px]">
              <img src={plusPlayerIcon} className="w-8 h-8 mx-auto mdd:mx-0" />
              <h2 className="text-3xl md:text-4xl font-bold !leading-[120%] mt-3">
                <strong className="textGradient">Aprenda finanças</strong>
                <br /> de verdade
              </h2>
              <span className="inline-block text-white/80 text-sm md:mb-0 mt-4 w-[90%] md:text-xl !leading-snug">
                Tudo sobre investimento, com os maiores especialistas do mercado
                na palma da sua mão.
              </span>
              <p className="mt-6 mb-4">
                <span className="inline-block text-white/80 font-light">
                  A partir de
                </span>
                <br />
                <span className="inline-block text-lg">
                  <strong className="text-2xl font-semibold">R$ 59,90</strong>{' '}
                  <span className="textGradient">/mês no plano anual</span>
                </span>
              </p>
              <a className="relative cursor-pointer hover:ring-1  active:scale-95 transition-all duration-300 hover:ring-[#00e7f9] w-full max-w-[280px] inline-flex items-center justify-center tracking-wider px-6 py-3 overflow-hidden font-semibold text-white rounded-md group shadow-lg shadow-white/10">
                <span className="absolute inset-0 w-full h-full opacity-1 group-hover:opacity-0 transition duration-300 ease-out opacity-1 bg-gradient-to-br from-[#0093dc] to-[#00bac7]"></span>
                <span className="relative group-hover:text-[#00E7F9]">
                  {' '}
                  Assine agora
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
