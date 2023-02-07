import finclass from '../assets/finclass-logo.svg'
import chevronRight from '../assets/chevron-right.svg'
import accountPlaceholder from '../assets/account-placeholder.svg'

interface Props {}

export const Navbar = (props: Props) => {
  return (
    <header className="navGlassmorphism z-[500] fixed w-full max-w-screen py-7 mx-auto">
      <nav className="flex max-w-screen-xl mx-auto px-8 items-center justify-between">
        <img src={finclass} alt="logo/img" className="max-w-[144px] w-full" />
        <div className="flex items-center gap-x-11">
          <div className="flex hover:drop-shadow-md  hover:brightness-105 duration-300 transition-all ease-in-out items-center gap-x-[10px] cursor-pointer">
            <img src={chevronRight} alt="chevron-right/icon" />
            <span className="inline-block font-semibold">Blog</span>
          </div>
          <div className="flex items-center gap-x-[10px] cursor-pointer">
            <img src={chevronRight} alt="chevron-right/icon" />
            <span className="inline-block font-semibold">Assine agora</span>
          </div>
          <div className="flex items-center gap-x-[10px] cursor-pointer">
            <img src={accountPlaceholder} alt="account-placeholder/icon" />
            <span className="inline-block font-semibold">Já sou assinante</span>
          </div>
        </div>
      </nav>
    </header>
  )
}
