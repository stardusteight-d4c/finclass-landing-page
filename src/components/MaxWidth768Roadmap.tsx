import formationIcon from '../assets/roadmap/formation-icon.svg'
import accountPlaceholder from '../assets/account-placeholder.svg'
import alignLeft from '../assets/roadmap/align-left.svg'
import alignCenter from '../assets/roadmap/align-center.svg'
import alignRight from '../assets/roadmap/align-right.svg'
import chevronDown from '../assets/chevron-down.svg'
import { roadmapList } from '../data'
import { MaxWidth768RoadmapListItem } from './integrate/MaxWidth768RoadmapListItem'
import { useState } from 'react'
import { Routes } from './MinWidth768Roadmap'

interface Props {}

export const MaxWidth768Roadmap = (props: Props) => {
  const [activeRoute, setActiveRoute] = useState<Routes>('beginner')

  return (
    <section className="block md:hidden max-w-[100vw] overflow-hidden bg-black">
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
          <span className="text-[#F5F5F5] mb-8 text-lg mt-2 inline-block">
            Você evolui junto com a gente
          </span>
        </div>
        <div className="w-full h-fit">
          <div className="flex flex-col items-center">
            <img
              src={accountPlaceholder}
              alt="account-placeholder/svg"
              className="w-[50px] h-50px"
            />
          </div>
          <div>
            <button
              onClick={() => setActiveRoute('beginner')}
              className={`${
                activeRoute === 'beginner'
                  ? 'border-[#00E7F9]'
                  : 'border-[#949494]/20'
              } border bg-[#0F1116] mt-10 py-4 px-4 font-bold text-lg rounded-md w-full text-center flex items-center justify-between`}
            >
              <img src={alignLeft} className="w-5 h-5" /> Iniciante
              <img src={chevronDown} className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-2 relative">
              <div className="absolute z-0 left-1/2 -translate-x-1/2 h-full !w-0 border-l border-l-[#00E7F9]" />
              {roadmapList.beginner.map((item, index) => (
                <MaxWidth768RoadmapListItem
                  data={item}
                  index={index}
                  key={item.icon}
                />
              ))}
            </div>
          </div>

          {/* <button className="bg-[#0F1116] mt-10 py-4 px-4 font-bold text-lg rounded-md w-full text-center flex items-center justify-between">
            <img src={alignLeft} className="w-5 h-5" /> Intermediário
            <img src={chevronDown} className="w-5 h-5" />
          </button>
          <button className="bg-[#0F1116] mt-10 py-4 px-4 font-bold text-lg rounded-md w-full text-center flex items-center justify-between">
            <img src={alignLeft} className="w-5 h-5" /> Avançado
            <img src={chevronDown} className="w-5 h-5" />
          </button> */}
        </div>
      </div>
    </section>
  )
}
