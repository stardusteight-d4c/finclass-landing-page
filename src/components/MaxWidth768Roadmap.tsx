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
import { MaxWidth768RoadmapAccordion } from './integrate/MaxWidth768RoadmapAccordion'

interface Props {}

export const MaxWidth768Roadmap = (props: Props) => {
  const [activeRoute, setActiveRoute] = useState<Routes>('beginner')

  const routeAccordionProps = [
    {
      activeRoute,
      setActiveRoute,
      icon: alignLeft,
      title: 'Iniciante',
      route: 'beginner' as 'beginner',
    },
    {
      activeRoute,
      setActiveRoute,
      icon: alignCenter,
      title: 'Intermediário',
      route: 'intermediary' as 'intermediary',
    },
    {
      activeRoute,
      setActiveRoute,
      icon: alignRight,
      title: 'Avançado',
      route: 'advanced' as 'advanced',
    },
  ]

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
        <div className="flex flex-col items-center">
          <img
            src={accountPlaceholder}
            alt="account-placeholder/svg"
            className="w-[50px] h-50px"
          />
        </div>
        <div className="w-full h-fit relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 h-[100%] z-0 !w-0 border-l-[2px] border-l-[#00E7F9]" />
          <div>
            {routeAccordionProps.map((button) => (
              <MaxWidth768RoadmapAccordion {...button} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
