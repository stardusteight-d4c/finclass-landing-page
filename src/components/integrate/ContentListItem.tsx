import React from 'react'

interface Props {
  img: string
  content: string
}

export const ContentListItem = ({ img, content }: Props) => {
  return (
    <>
      <li>
        <img src={img} className="h-7 mx-auto md:mx-0" />
        <p className="mt-[22px] text-lg font-light">{content}</p>
      </li>
      <div className="borderGradient inline-block my-8 md:my-4 border-t border-t-[#00E7F9] h-0 w-[50%] md:w-full" />
    </>
  )
}
