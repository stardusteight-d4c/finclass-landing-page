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
    <div className="max-h-screen overflow-hidden">
      <div
        className={`${
          openMenu ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
        }
    p-4 inset-0 fixed transition-all duration-1000 z-[900] bg-black`}
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
            onClick={() => setOpenMenu(false)}
            className="block md:hidden cursor-pointer"
          />
        </div>
        <div className="mt-10">
          <div className="flex mt-8 flex-col gap-y-8 items-center">
            <span className="pb-2 cursor-pointer w-full inline-block border-b border-[#00e7f9] text-xl font-bold text-white">
              Assinar
            </span>
            <span className="pb-2 cursor-pointer w-full inline-block border-b border-[#00e7f9] text-xl font-bold text-white">
              Entrar
            </span>
            <span className="pb-2 cursor-pointer w-full inline-block border-b border-[#00e7f9] text-xl font-bold text-white">
              Blog
            </span>
          </div>
          <span className="text-lg inline-block font-semibold mt-10">
            Baixe nosso app
          </span>
          <div className="space-y-4 mt-4">
            <div className="flex cursor-pointer gap-x-6 items-center">
              <img src={appStore} alt="App Store" className="w-10" />
              <span className="font-openSans text-[#B4B4B4]">
                via{' '}
                <strong className="ml-1 text-white font-roboto font-medium">
                  App Store
                </strong>
              </span>
            </div>
            <div className="flex cursor-pointer gap-x-6 items-center">
              <img src={googlePlay} alt="Google Play" className="w-11" />
              <span className="font-openSans text-[#B4B4B4] -ml-[2.3px]">
                via{' '}
                <strong className="ml-1 text-white font-roboto font-medium">
                  Google Play
                </strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
