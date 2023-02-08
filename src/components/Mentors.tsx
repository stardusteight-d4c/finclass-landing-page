import graduationHat from '../assets/graduation-hat.svg'
import thiagoNigro from '../assets/mentors/thiago-nigro.png'
import guilhermeBenchimol from '../assets/mentors/guilherme-benchimol.png'
import howardMarks from '../assets/mentors/howard-marks.png'
import samirKerbage from '../assets/mentors/samir-kerbage.png'
import fernandoFerreira from '../assets/mentors/fernando-ferreira.png'
import mariliaFontes from '../assets/mentors/marilia-fontes.png'
import floriamBartunek from '../assets/mentors/floriam-bartunek.png'
import brunoPerini from '../assets/mentors/bruno-perini.png'
import fabioGiambiagi from '../assets/mentors/fabio-giambiagi.png'

interface Props {}

export const Mentors = (props: Props) => {
  return (
    <section className="max-w-[100vw] overflow-x-hidden bg-black">
      <div className="pt-16 max-w-screen-xl w-full mx-auto px-4 md:px-4">
        <div className="text-center">
          <img
            src={graduationHat}
            alt="graduation-hat/svg"
            className="w-fit mx-auto"
          />
          <h2 className="text-4xl font-bold mt-2 !leading-[140%]">
            Conheça os seus mentores
          </h2>
          <span className="font-openSans text-[#F5F5F5] mt-2 inline-block">
            Os professores da Finclass são os maiores especialistas do mercado
            financeiro mundial
          </span>
        </div>
        <div className="w-fit relative">
          <div className="absolute z-10 -left-16 inset-y-0 h-full w-[150px] bg-gradient-to-r from-black via-black to-transparent" />
          <div className="absolute z-10 -right-16 inset-y-0 h-full w-[150px] bg-gradient-to-l from-black via-black to-transparent" />
          <div className="my-10 mx-auto flex gap-x-1 items-center overflow-x-scroll relative">
            <div className="relative">
              <img src={thiagoNigro} className="min-w-[260px] max-w-[260px] h-[480px] hover:brightness-110 transition-all" />
              <span className="absolute text-2xl font-bold bottom-0 right-0 ">Thiago Nigro</span>
            </div>
            <img src={guilhermeBenchimol} className="w-[260px] h-[480px]" />
            <img src={howardMarks} className="w-[260px] h-[480px]" />
            <img src={mariliaFontes} className="w-[260px] h-[480px]" />
            <img src={brunoPerini} className="w-[260px] h-[480px]" />
            <img src={samirKerbage} className="w-[260px] h-[480px]" />
            <img src={floriamBartunek} className="w-[260px] h-[480px]" />
            <img src={fernandoFerreira} className="w-[260px] h-[480px]" />
            <img src={fabioGiambiagi} className="w-[260px] h-[480px]" />
          </div>
        </div>
      </div>
    </section>
  )
}
