import ReactDOM from 'react-dom'
import closeMenu from '../../assets/close-menu-icon.svg'
import finclass from '../../assets/finclass-logo.svg'
import appStore from '../../assets/app-store.png'
import googlePlay from '../../assets/google-play.png'

interface Props {
  openMenu: boolean
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export const MobileMenu = ({ openMenu, setOpenMenu }: Props) => {
  // menu will be rendered in the body, being a direct child of the body.
  // not some relative of the #root div
  return ReactDOM.createPortal(
    <div
      className={`${
        openMenu
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 sr-only translate-x-full'
      }
    p-4 inset-0 absolute h-full transition-all duration-1000 z-[900] bg-black`}
    >
      <div className="flex items-center justify-between">
        <img
          src={finclass}
          alt="logo/img"
          className="max-w-[100px] xs:max-w-[144px] w-full"
        />
        <img
          src={closeMenu}
          alt="close-menu-hamburguer/icon"
          onClick={() => setOpenMenu(!openMenu)}
          className="block md:hidden cursor-pointer"
        />
      </div>
      <div className="mt-10">
        <span>Baixe nosso app</span>
        <div className="grid grid-cols-2">
          <div className="flex flex-col items-center col-span-1">
            <img src={appStore} alt="App Store" className="w-10" />
            <span>via App Store</span>
          </div>
          <div className="flex flex-col items-center col-span-1">
            <img src={googlePlay} alt="Google Play" className="w-11" />
            <span>via Google Play</span>
          </div>
        </div>
          <button>Assine agora</button>
          <button>Entrar</button>
          <button>Blog</button>
      </div>
    </div>,
    document.body
  )
}
