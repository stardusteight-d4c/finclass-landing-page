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
      <hr className="bg-gradient-to-r border-0 inline-block my-8 md:my-4 from-[#00E7F9] to-transparent min-h-[2px] max-h-[2px] w-full" />
    </>
  )
}
