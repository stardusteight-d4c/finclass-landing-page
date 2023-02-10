import faqIcon from '../assets/faq.svg'
import generalIcon from '../assets/general.svg'
import mobileIcon from '../assets/mobile.svg'
import cardIcon from '../assets/card.svg'
import { useState } from 'react'
import { Accordion } from './integrate/Accordion'
import { faq } from '../data'

interface Props {}

export const Faq = (props: Props) => {
  const [activeTab, setActiveTab] = useState<
    'general' | 'application' | 'subscriptions'
  >('general')

  return (
    <section id="mentors" className="max-w-[100vw] overflow-hidden bg-black">
      <div className="md:pt-44 max-w-screen-xl w-full mx-auto px-4 md:px-4     pb-12">
        <div className="text-center">
          <img src={faqIcon} alt="faq/svg" className="w-fit mx-auto" />
          <h2 className="text-3xl md:text-4xl font-bold mt-3 !leading-[140%]">
            <strong className="textGradient">Perguntas</strong> frequentes
          </h2>
          <div className="grid grid-cols-tabFaqColumns w-full max-w-[741px] mx-auto mt-10">
            <div
              onClick={() => setActiveTab('general')}
              className={`${
                activeTab === 'general'
                  ? 'border-b-[#00E7F9]'
                  : 'border-b-white/25'
              } col-span-1 cursor-pointer flex flex-col md:flex-row items-center py-6 justify-center border-b gap-x-2`}
            >
              <img src={generalIcon} alt="general/svg" className="" />
              <span>Geral</span>
            </div>
            <div
              onClick={() => setActiveTab('application')}
              className={`${
                activeTab === 'application'
                  ? 'border-b-[#00E7F9]'
                  : 'border-b-white/25'
              } col-span-1 cursor-pointer flex flex-col md:flex-row items-center py-6 justify-center border-b gap-x-2`}
            >
              <img src={mobileIcon} alt="application/svg" className="" />
              <span>Aplicativo</span>
            </div>
            <div
              onClick={() => setActiveTab('subscriptions')}
              className={`${
                activeTab === 'subscriptions'
                  ? 'border-b-[#00E7F9]'
                  : 'border-b-white/25'
              } col-span-1 cursor-pointer flex flex-col md:flex-row items-center py-6 justify-center border-b gap-x-2`}
            >
              <img src={cardIcon} alt="subscriptions/svg" className="" />
              <span>
                <span className="hidden lg:inline-block">Planos &</span>{' '}Assinaturas
              </span>
            </div>
          </div>
          <div className="mt-8">
            {faq[activeTab].map((item) => (
              <Accordion title={item.title} content={item.content} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
