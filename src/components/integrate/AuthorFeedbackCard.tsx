import React from 'react'

interface Props {
  avatar: string
  name: string
  role: string
  index?: number
  selectedFeeback?: number
  setSelectedFeedback?: React.Dispatch<React.SetStateAction<number>>
}

export const AuthorFeedbackCard = ({
  selectedFeeback,
  setSelectedFeedback,
  index,
  avatar,
  name,
  role,
}: Props) => {
  return (
    <div
      onClick={() => {
        if (setSelectedFeedback) {
          setSelectedFeedback(index!)
        }
      }}
      className={`${
        selectedFeeback !== index && 'brightness-50'
      } bg-[#0F1116] cursor-pointer rounded-b-lg md:rounded-lg gap-x-4 py-8 md:py-4 lg:py-5 px-4 lg:px-8 flex items-center`}
    >
      <img src={avatar} className="w-[72px] h-[72px] rounded-full" />
      <div>
        <p className="textGradient text-lg font-bold">{name}</p>
        <span className="text-white/50">{role}</span>
      </div>
    </div>
  )
}
