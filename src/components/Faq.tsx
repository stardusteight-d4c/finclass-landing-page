import faqIcon from '../assets/faq.svg'
import generalIcon from '../assets/general.svg'
import mobileIcon from '../assets/mobile.svg'
import cardIcon from '../assets/card.svg'
import { useState } from 'react'
import { Accordion } from './integrate/Accordion'
import { faq } from '../data'
import { TabItem } from './integrate/TabItem'

interface Props {}

export const Faq = (props: Props) => {
  const [activeTab, setActiveTab] = useState<
    'general' | 'application' | 'subscriptions'
  >('general')

  const tabItemProps = [
    {
      activeTab,
      setActiveTab,
      tab: 'general' as 'general',
      title: 'Geral',
      icon: generalIcon,
    },
    {
      activeTab,
      setActiveTab,
      tab: 'application' as 'application',
      title: 'Aplicativo',
      icon: mobileIcon,
    },
    {
      activeTab,
      setActiveTab,
      tab: 'subscriptions' as 'subscriptions',
      extraTitle: 'Planos & ',
      title: 'Assinaturas',
      icon: cardIcon,
    },
  ]

  return (
    <section className={style.wrapper}>
      <div className={style.contentWrapper}>
        <div className={style.textCenterContainer}>
          <img src={faqIcon} alt="faq/svg" className={style.faqIcon} />
          <h2 className={style.heading}>
            <strong className={style.strong}>Perguntas</strong> frequentes
          </h2>
          <div className={style.gridContainer}>
            {tabItemProps.map((prop) => (
              <TabItem {...prop} />
            ))}
          </div>
          <div className={style.accordionsWrapper}>
            {faq[activeTab].map((item) => (
              <Accordion
                key={item.title}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const style = {
  wrapper: `max-w-[100vw] overflow-hidden bg-black`,
  contentWrapper: `pt-14 md:pt-44 max-w-screen-xl w-full mx-auto px-4 md:px-4`,
  textCenterContainer: `text-center`,
  faqIcon: `w-fit mx-auto`,
  heading: `text-3xl md:text-4xl font-bold mt-3 !leading-[140%]`,
  strong: `textGradient`,
  gridContainer: `grid grid-cols-tabFaqColumns w-full max-w-[741px] mx-auto mt-10`,
  accordionsWrapper: `mt-8`,
}
