import React from 'react'
import { isEven } from '../../utils/isEven'

interface Props {
  data: {
    icon: string
    title: string
    description: string
  }
  index: number
}

export const RoadmapListItem = ({
  index,
  data: { icon, title, description },
}: Props) => {
  console.log(!isEven(index))
  return (
    <>
      <div
        className={`${
          isEven(index)
            ? 'col-start-1 justify-start border'
            : 'col-start-2 justify-end border'
        } col-span-1 w-full h-full flex items-center`}
      >
        <img src={icon} className="w-10 h-10 mr-[30px]" />
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="font-light mt-2 inline-block w-[290px]">
            {description}
          </span>
        </div>
      </div>
      <div
        style={{ gridColumnStart: !isEven(index) ? 'hidden' : '2' }}
        className="col-span-1 h-[150px] bg-red-600"
      >
        {/* PLACEHOLDER */}
      </div>
    </>
  )
}
