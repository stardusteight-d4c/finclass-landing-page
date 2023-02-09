import formationIcon from '../assets/roadmap/formation-icon.svg'
import accountPlaceholder from '../assets/account-placeholder.svg'
import alignLeft from '../assets/roadmap/align-left.svg'
import alignCenter from '../assets/roadmap/align-center.svg'
import alignRight from '../assets/roadmap/align-right.svg'
import circle from '../assets/roadmap/circle.svg'
import { roadmapList } from '../data'
import { RoadmapListItem } from './integrate/RoadmapListItem'
import { useState } from 'react'

interface Props {}

// + Separar os dados do Roadmap em data.ts
// + data = [{begginer: [{}], intermediary: [{}], advance: [{}]}]
// + Fazer o grid layout com os items sendo passados via props
// + Alterar o estado e renderizar os elementos dinâmicamente de acordo com o estado
// + traçar as linhas no desktop

type Routes = 'beginner' | 'intermediary' | 'advanced'

export const Roadmap = (props: Props) => {
  const [activeRoute, setActiveRoute] = useState<Routes>('beginner')

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
          <div className="relative mt-14 mx-auto w-10 h-10">
            <img
              src={accountPlaceholder}
              alt="account-placeholder/svg"
              className="w-10 h-10 mx-auto z-20 absolute top-0 rounded-full bg-black"
            />
          </div>

          <div className="absolute z-0 grid grid-cols-2 w-[77%] inset-0 mx-auto top-5 left-0 h-[99px]">
            <div className={style.ghostContainerTopLeft(activeRoute)} />
            <div className={style.ghostContainerTopRight(activeRoute)} />
            <div className={style.ghostContainerLeftBottom(activeRoute)} />
            <div className={style.ghostContainerRightBottom(activeRoute)} />
            <div className={style.ghostContainerConnect()} />
          </div>

          <div className="relative h-[75px] mt-10">
            <div className="flex absolute w-full z-10 items-center gap-x-16 lg:gap-x-4 justify-between">
              <button
                onClick={() => setActiveRoute('beginner')}
                className={`${
                  activeRoute === 'beginner'
                    ? 'border-[#00E7F9]'
                    : 'border-[#949494]/20'
                } border flex items-center transition-all duration-300 justify-center gap-x-2 rounded-full font-bold w-full max-w-[290px] py-6 bg-[#0F1116]`}
              >
                <img src={alignLeft} alt="" />
                Iniciante
              </button>
              <button
                onClick={() => setActiveRoute('intermediary')}
                className={`${
                  activeRoute === 'intermediary'
                    ? 'border-[#00E7F9]'
                    : 'border-[#949494]/20'
                } border flex items-center transition-all duration-300 justify-center gap-x-2 rounded-full font-bold w-full max-w-[290px] py-6 bg-[#0F1116]`}
              >
                <img src={alignCenter} alt="" />
                Intermediário
              </button>
              <button
                onClick={() => setActiveRoute('advanced')}
                className={`${
                  activeRoute === 'advanced'
                    ? 'border-[#00E7F9]'
                    : 'border-[#949494]/20'
                } border flex items-center transition-all duration-300 justify-center gap-x-2 rounded-full font-bold w-full max-w-[290px] py-6 bg-[#0F1116]`}
              >
                <img src={alignRight} alt="" />
                Avançado
              </button>
            </div>
          </div>

          <div className="relative grid grid-cols-2 mt-36">
            <div className="absolute z-0 top-16 left-1/2 -translate-x-1/2 h-[77%] !w-0 border-l border-l-[#00E7F9]" />
            <div className="absolute top-[51px] left-1/2 -translate-x-1/2 z-10">
              <div className="borderGradient absolute top-5 -translate-x-full left-5 h-0 border-t mmd:w-[65px] xxll:w-[150px] xl:w-[225px]" />
              <img
                src={circle}
                alt="trial-point/svg"
                className="animate-pings"
              />
              <img
                src={circle}
                alt="trial-point/svg"
                className="absolute top-0"
              />
            </div>
            <div className="absolute top-[200px] left-1/2 -translate-x-1/2 z-10">
              <div className="borderGradient absolute top-5 left-5 h-0 border-t mmd:w-[65px] xxll:w-[150px] xl:w-[225px]" />
              <img
                src={circle}
                alt="trial-point/svg"
                className="animate-pings"
              />
              <img
                src={circle}
                alt="trial-point/svg"
                className="absolute top-0"
              />
            </div>
            <div className="absolute top-[351px] left-1/2 -translate-x-1/2 z-10">
              <div className="borderGradient absolute top-5 -translate-x-full left-5 h-0 border-t mmd:w-[65px] xxll:w-[150px] xl:w-[225px]" />
              <img
                src={circle}
                alt="trial-point/svg"
                className="animate-pings"
              />
              <img
                src={circle}
                alt="trial-point/svg"
                className="absolute top-0"
              />
            </div>
            <div className="absolute top-[84.3%] left-1/2 -translate-x-1/2 z-10">
              <div className="borderGradient absolute top-5 left-5 h-0 border-t mmd:w-[65px] xxll:w-[150px] xl:w-[225px]" />
              <img
                src={circle}
                alt="trial-point/svg"
                className="animate-pings"
              />
              <img
                src={circle}
                alt="trial-point/svg"
                className="absolute top-0"
              />
            </div>
            {roadmapList[activeRoute].map((item, index) => (
              <RoadmapListItem data={item} index={index} key={item.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const style = {
  ghostContainerTopLeft: (activeRoute: Routes) => {
    const defaultStyle = 'col-span-1 w-full h-[96px] transition-all duration-300'
    if (activeRoute === 'beginner') {
      return `border-t border-l border-t-[#00E7F9] border-l-[#00E7F9] ${defaultStyle}`
    } else {
      return `border-t border-l border-t-[#949494]/20 border-l-[#949494]/20 ${defaultStyle}`
    }
  },
  ghostContainerTopRight: (activeRoute: Routes) => {
    const defaultStyle = 'col-span-1 w-full h-[96px] transition-all duration-300'
    if (activeRoute === 'intermediary') {
      return `border-l border-t border-r border-l-[#00E7F9] border-t-[#949494]/20 border-r-[#949494]/20 ${defaultStyle}`
    } else if (activeRoute === 'advanced') {
      return `border-l border-t border-r border-l-[#949494]/20 border-t-[#00E7F9] border-r-[#00E7F9] ${defaultStyle}`
    } else {
      return `border-l border-t border-r border-[#949494]/20`
    }
  },
  ghostContainerLeftBottom: (activeRoute: Routes) => {
    const defaultStyle = 'col-span-1 w-full h-[96px] transition-all duration-300'
    if (activeRoute === 'beginner') {
      return `border-l border-b border-l-[#00E7F9] border-b-[#00E7F9] ${defaultStyle}`
    } else {
      return `border-l border-b border-l- border-[#949494]/20 border-b- border-[#949494]/20  ${defaultStyle}`
    }
  },
  ghostContainerRightBottom: (activeRoute: Routes) => {
    const defaultStyle = 'col-span-1 w-full h-[96px] transition-all duration-300'
    if (activeRoute === 'advanced') {
      return `border-l border-b border-r border-r-[#00E7F9] border-b-[#00E7F9] border-l-[#949494]/20 ${defaultStyle}`
    } else if (activeRoute === 'intermediary') {
      return `border-l border-b border-r border-r-[#949494]/20 border-b-[#949494]/20 border-l-[#00E7F9] ${defaultStyle}`
    } else {
      return `border-l border-b border-r border-r-[#949494]/20 border-b-[#949494]/20 border-l-[#949494]/20 ${defaultStyle}`
    }
  },
  ghostContainerConnect: () => {
    const defaultStyle = 'col-span-1 col-start-2 w-full h-[150px]'
    return `border-l border-l-[#00E7F9] ${defaultStyle}`
  },
}
