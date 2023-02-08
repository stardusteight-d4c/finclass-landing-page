import ReactDOM from 'react-dom'
import closeIcon from '../../assets/close-menu-icon.svg'

interface Props {
  setShowPlayer: React.Dispatch<React.SetStateAction<boolean>>
  videoID: string
}

export const PlayerModal = ({ setShowPlayer, videoID }: Props) => {
  return ReactDOM.createPortal(
    <div className="w-screen h-screen z-[1000] fixed inset-0 bg-black/60">
      <div className="fixed top-[55%] w-[365px] sm:w-[700px] lg:w-[850px] -translate-y-1/2 left-1/2 -translate-x-1/2">
        <div className="youtubePlayer w-full relative">
          <div
            onClick={() => setShowPlayer(false)}
            className="cursor-pointer absolute -right-4 -top-14 flex items-center gap-x-1"
          >
            <span className="text-lg font-bold">Fechar</span>
            <img src={closeIcon} className="w-14" />
          </div>
          <iframe
            src={`https://www.youtube.com/embed/${videoID}?controls=0&color=white&theme=dark&fs=0&modestbranding=0&autoplay=1`}
            className="outline-none border border-[#FFFFFF2E] w-full"
          />
        </div>
      </div>
    </div>,
    document.body
  )
}
