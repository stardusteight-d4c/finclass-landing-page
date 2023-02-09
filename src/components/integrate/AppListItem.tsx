import React from 'react'

interface Props {
  icon: string
  title: string
  description: string
}

export const AppListItem = ({ icon, title, description }: Props) => {
  return (
    <>
      <li className="flex flex-col md:flex-row text-center md:text-left items-center">
        <img src={icon} className="w-8 h-8 ml-2 mr-7" />
        <div>
          <h3 className="text-xl font-semibold mt-2 md:mt-0 mb-3">{title}</h3>
          <p className="md:w-[90%] font-light">{description}</p>
        </div>
      </li>
      <div className="inline-block borderGradient my-8 md:my-4 border-t border-t-[#00E7F9] h-0 w-full" />
    </>
  )
}
