import formationIcon from '../assets/roadmap/formation-icon.svg'
import accountPlaceholder from '../assets/account-placeholder.svg'
import alignLeft from '../assets/roadmap/align-left.svg'
import alignCenter from '../assets/roadmap/align-center.svg'
import alignRight from '../assets/roadmap/align-right.svg'
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
    <section className={style.wrapper}>
      <div className={style.contentWrapper}>
        <div className={style.headingFlexContainer}>
          <img
            src={formationIcon}
            alt="formation/svg"
            className={style.formationIcon}
          />
          <h2 className={style.heading}>
            <strong className={style.strong}>O que </strong>
            você irá <br /> aprender na Finclass
          </h2>
          <span className={style.span}>Você evolui junto com a gente</span>
        </div>
        <div className={style.flexColContainer}>
          <img
            src={accountPlaceholder}
            alt="account-placeholder/svg"
            className={style.accountIcon}
          />
        </div>
        <div className={style.accordionsWrapper}>
          <div className={style.verticalLine} />
          <div>
            {routeAccordionProps.map((button) => (
              <MaxWidth768RoadmapAccordion key={button.title} {...button} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const style = {
  wrapper: `block md:hidden max-w-[100vw] overflow-hidden bg-black`,
  contentWrapper: `pt-16 md:pt-28 pb-11 max-w-screen-xl w-full mx-auto px-4`,
  headingFlexContainer: `flex items-center justify-center flex-col text-center`,
  formationIcon: `w-8 h-8 mx-auto md:mx-0`,
  heading: `text-3xl md:text-4xl font-bold !leading-[120%] mt-3`,
  strong: `textGradient`,
  span: `text-[#F5F5F5] mb-8 text-lg mt-2 inline-block`,
  flexColContainer: `flex flex-col items-center`,
  accountIcon: `w-[50px] h-50px`,
  accordionsWrapper: `w-full h-fit relative`,
  verticalLine: `absolute -top-6 left-1/2 -translate-x-1/2 h-[100%] z-0 !w-0 border-l-[2px] border-l-[#00E7F9]`,
}
