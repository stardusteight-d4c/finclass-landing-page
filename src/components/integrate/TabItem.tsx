import React from 'react'

interface Props {
  activeTab: 'general' | 'application' | 'subscriptions'
  setActiveTab: React.Dispatch<
    React.SetStateAction<'general' | 'application' | 'subscriptions'>
  >
  tab: 'general' | 'application' | 'subscriptions'
  extraTitle?: string
  title: string
  icon: string
}

export const TabItem = ({
  activeTab,
  setActiveTab,
  tab,
  extraTitle,
  title,
  icon,
}: Props) => {
  return (
    <div
      onClick={() => setActiveTab(tab)}
      className={`${
        activeTab === tab ? 'border-b-[#00E7F9]' : 'border-b-white/25'
      } col-span-1 cursor-pointer flex flex-col md:flex-row items-center py-6 justify-center border-b gap-x-2`}
    >
      <img src={icon} />
      <span>
        <span className="hidden lg:inline-block">{extraTitle}</span>{' '}
        {title}
      </span>
    </div>
  )
}
