import { Navbar } from '../integrate/Navbar'
import heroImg from '../assets/hero-img.png'
import thunderLightning from '../assets/thunder-lightning.svg'
import arrowCircleDown from '../assets/arrow-circle-down.svg'
import bgWorldsBest from '../assets/bg-worlds-best.png'

interface Props {}

export const Hero = (props: Props) => {
  return (
    <section className=" w-screen bg-black">
      <Navbar />
      <div className="pt-16 max-w-screen-xl w-full mx-auto px-4 md:px-8">
        <div className="pt-24 lg:pt-32 pb-52 relative flex flex-col lg:flex-row items-center justify-between">
        <img src={bgWorldsBest} className="absolute top-4 md:top-8 z-0  right-0 lg:-right-0 w-full md:max-w-[680px] xl:max-w-[780px]" />

          <div className="lg:w-[50%] text-center md:text-left mt-20 md:mt-0 z-10">
            <span className="textGradient mx-auto md:mx-0 w-fit mb-3 flex items-center gap-x-2 uppercase font-medium">
              Conhecimento como um ativo
              <img
                src={thunderLightning}
                alt="thunder-lightning/icon"
                className="w-5 -mt-[2px]"
              />
            </span>
            <h1 className="text-3xl md:text-5xl w-full lg:max-w-[510px] mb-2 !leading-[110%] tracking-wide font-bold">
              Aprenda a investir do zero com os melhores
            </h1>
            <p className="!leading-[23.2px] mx-auto md:mx-0 w-full md:max-w-[510px] mb-4 font-light text-[#B4B4B4]">
              Conquiste sua liberdade financeira e entre para o mundo dos
              investimentos com os maiores especialistas do mercado.{' '}
            </p>

            <a className="relative cursor-pointer hover:ring-1  active:scale-95 transition-all duration-300 hover:ring-[#00e7f9] w-[311px] inline-flex items-center justify-center tracking-wider px-6 py-3 overflow-hidden font-semibold text-white rounded-full group shadow-lg shadow-white/10">
              <span className="absolute inset-0 w-full h-full opacity-1 group-hover:opacity-0 transition duration-300 ease-out opacity-1 bg-gradient-to-br from-[#0093dc] to-[#00e7f9]"></span>
              <span className="relative group-hover:text-[#00e7f9]">
                {' '}
                Assine agora
              </span>
            </a>
            <span className="block mt-4 text-[#86888D] font-semibold">
              Assine a partir de <br className='md:hidden' />
              <strong className="text-white">
                R$ 59,90/mês no plano anual.
              </strong>
            </span>
            <span className="text-sm w-fit mx-auto md:mx-0 text-[#86888D] flex items-center gap-x-2 mt-8">
              Descubra como <img src={arrowCircleDown} alt="" />
            </span>
          </div>
          <div className="w-[50%] flex items-center relative z-10">
            <img src={heroImg} className="w-[250px] hidden md:block absolute -top-40 lg:-top-32 md:ml-[250px] lg:ml-[100px] xxl:ml-[130px]" />
          </div>
        </div>
      </div>
    </section>
  )
}