import React, { useState } from 'react'
import { Routes } from '../MinWidth768Roadmap'
import chevronDown from '../../assets/chevron-down.svg'
import { roadmapList } from '../../data'
import { MaxWidth768RoadmapListItem } from './MaxWidth768RoadmapListItem'

interface Props {
  activeRoute: Routes
  setActiveRoute: React.Dispatch<React.SetStateAction<Routes>>
  icon: string
  route: Routes
  title: string
}

export const MaxWidth768RoadmapAccordion = ({
  activeRoute,
  setActiveRoute,
  icon,
  route,
  title,
}: Props) => {
  const [showMore, setShowMore] = useState<boolean>(false)
  return (
    <>
      <div className="relative h-[78px] my-4">
        <button
          onClick={() => {
            setActiveRoute(route)
            setShowMore(!showMore)
          }}
          className={`${
            activeRoute === route && showMore === true
              ? 'border-[#00E7F9]'
              : 'border-[#949494]/20'
          } border absolute z-10 top-0 bg-[#0F1116] py-6 px-4 font-bold text-lg rounded-lg w-full text-center flex items-center justify-between`}
        >
          <img src={icon} className="w-5 h-5" /> {title}
          <img
            src={chevronDown}
            className={`${
              showMore && activeRoute === route && 'rotate-180'
            } transition-all duration-500 w-6 h-6`}
          />
        </button>
      </div>

      <div className="grid grid-cols-2 relative">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 h-[106%] z-0 !w-0 border-l-[#00E7F9] border-l-[2px]" />
        {roadmapList[route].map((item, index) => {
          if (activeRoute === route && showMore === true) {
            return (
              <MaxWidth768RoadmapListItem
                data={item}
                index={index}
                key={item.icon}
              />
            )
          }
        })}
      </div>
    </>
  )
}
