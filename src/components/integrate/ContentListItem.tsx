import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

type List = {
  icon: string
  title: string
}

interface Props {
  itemData: List
  index: number
  seeMore: boolean
}

export const ContentListItem = ({
  seeMore,
  index,
  itemData: { icon, title },
}: Props) => {
  const minWith768px = useMediaQuery({
    query: '(min-width: 768px)',
  })
  return (
    <li className={style.wrapper(minWith768px, index, seeMore)}>
      <img src={icon} className="w-6 h-6 md:w-7 md:h-7" />
      {title}
    </li>
  )
}

const style = {
  wrapper: (minWith768px: boolean, index: number, seeMore: boolean) => {
    if (minWith768px) {
      return `col-span-1 items-center rounded-md md:rounded-none w-full my-4 gap-x-3 md:gap-x-0 md:my-0 text-left md:text-center py-4 px-5 md:px-2 md:py-8 text-sm font-medium bg-[#0F1116] flex md:flex-col md:justify-center gap-y-2`
    } else {
      return `${
        index <= 3 || seeMore ? 'flex' : 'hidden'
      } col-span-1 items-center rounded-md md:rounded-none w-full my-4 gap-x-3 md:gap-x-0 md:my-0 text-left md:text-center py-4 px-5 md:px-2 md:py-8 text-sm font-medium bg-[#0F1116]  md:flex-col md:justify-center gap-y-2`
    }
  },
}
