import { useEffect, useState } from 'react'
import playCircleFill from '../../assets/play-circle-fill.svg'
import { PlayerModal } from './PlayerModal'

interface Props {
  name: string
  img: string
  description: string
  videoID: string
}

export const MentorCard = ({ name, img, description, videoID }: Props) => {
  const [showPlayer, setShowPlayer] = useState<boolean>(false)

  return (
    <div className="relative group cursor-pointer">
      {showPlayer && (
        <PlayerModal videoID={videoID} setShowPlayer={setShowPlayer} />
      )}
      <img
        onDragStart={(event) => event.preventDefault()}
        src={img}
        className="min-w-[260px] group-hover:brightness-125 max-w-[260px] h-[580px] select-none duration-1000 transition-all"
      />
      <div className="bg-gradient-to-t from-black to-transparent absolute md:opacity-0 group-hover:opacity-100 transition-all duration-1000 inset-0 flex items-center flex-col justify-center">
        <div className="flex flex-col mt-80 text-right items-end pl-16 pr-2">
          <h3 className="text-2xl font-bold pb-2 select-none ">{name}</h3>
          <span className="text-base font-light text-white select-none ">
            {description}
          </span>
          <div
            onClick={() => setShowPlayer(true)}
            className="flex items-center transition-all duration-300 ease-linear group/play gap-x-2 mt-3"
          >
            <span className="opacity-0 select-none group-hover/play:scale-105 group-hover/play:opacity-100 transition-all duration-1000">
              Assista ao vídeo
            </span>
            <img
              src={playCircleFill}
              alt="Assistir ao vídeo"
              className="w-12 select-none transition-all duration-1000"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
