import formationIcon from '../assets/roadmap/formation-icon.svg'
import accountPlaceholder from '../assets/account-placeholder.svg'
import alignLeft from '../assets/roadmap/align-left.svg'
import alignCenter from '../assets/roadmap/align-center.svg'
import alignRight from '../assets/roadmap/align-right.svg'
import learnFromScratch from '../assets/roadmap/learn-from-scratch.svg'
import fundamentalConcepts from '../assets/roadmap/fundamental-concepts.svg'
import glossariesAndSpecialMaterials from '../assets/roadmap/glossaries-and-special-materials.svg'
import { roadmapList } from '../data'
import { RoadmapListItem } from './integrate/RoadmapListItem'
import { useState } from 'react'

interface Props {}

// + Separar os dados do Roadmap em data.ts
// + data = [{begginer: [{}], intermediary: [{}], advance: [{}]}]
// + Fazer o grid layout com os items sendo passados via props
// + Alterar o estado e renderizar os elementos dinâmicamente de acordo com o estado
// + traçar as linhas no desktop

export const Roadmap = (props: Props) => {
  const [activeRoute, setActiveRoute] = useState<
    'beginner' | 'intermediary' | 'advanced'
  >('beginner')

  return (
    <section className="max-w-[100vw] overflow-hidden bg-black">
      <div className="pt-16 md:pt-28 pb-11 max-w-screen-xl w-full mx-auto px-4">
        <div className="flex items-center justify-center flex-col text-center">
          <img
            src={formationIcon}
            alt="formation/svg"
            className="w-8 h-8 mx-auto md:mx-0"
          />
          <h2 className="text-3xl md:text-4xl font-bold !leading-[120%] mt-3">
            <strong className="textGradient">O que </strong>
            você irá <br /> aprender na Finclass
          </h2>
          <span className="text-[#F5F5F5] mt-2 inline-block">
            Você evolui junto com a gente
          </span>
        </div>
        <div className="w-full relative">
          <div className="relative mx-auto h-fit w-fit">
            <img
              src={accountPlaceholder}
              alt="account-placeholder/svg"
              className="w-10 h-10 mx-auto mt-14"
            />
          </div>

          <div className="absolute z-0 grid border grid-cols-2 w-[75%] inset-0 mx-auto top-5 -left-3 h-[99px]">
            <div className="col-span-1 border-[2px] borderborder-[#949494]/80 w-full h-[96px]" />
            <div className="col-span-1 border-[2px] border-t-transparent border-x-transparent w-full h-[96px]" />
            <div className="col-span-1 border-[2px] w-full h-[96px]" />
            <div className="col-span-1 border-[2px] w-full h-[96px]" />
          </div>

          <div className="relative h-[75px] mt-10">
            <div className="flex absolute w-full z-10 items-center gap-x-4 justify-between">
              <button
                onClick={() => setActiveRoute('beginner')}
                className="border flex items-center justify-center gap-x-2 border-transparent rounded-md font-bold w-full max-w-[290px] py-6 bg-[#0F1116]"
              >
                <img src={alignLeft} alt="" />
                Iniciante
              </button>
              <button
                onClick={() => setActiveRoute('intermediary')}
                className="border flex items-center justify-center gap-x-2 border-transparent rounded-md font-bold w-full max-w-[290px] py-6 bg-[#0F1116]"
              >
                <img src={alignCenter} alt="" />
                Intermediário
              </button>
              <button
                onClick={() => setActiveRoute('advanced')}
                className="border flex items-center justify-center gap-x-2 border-transparent rounded-md font-bold w-full max-w-[290px] py-6 bg-[#0F1116]"
              >
                <img src={alignRight} alt="" />
                Avançado
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 mt-36">
            {roadmapList[activeRoute].map((item, index) => (
              <RoadmapListItem data={item} index={index} key={item.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
