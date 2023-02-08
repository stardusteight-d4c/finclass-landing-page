import finclass from '../../assets/finclass-logo.svg'
import chevronRight from '../../assets/chevron-right.svg'
import accountPlaceholder from '../../assets/account-placeholder.svg'
import menu from '../../assets/menu-hamburguer.svg'
import { useMediaQuery } from 'react-responsive'
import { useEffect, useRef, useState } from 'react'
import { MobileMenu } from './MobileMenu'

interface Props {}

export const Navbar = (props: Props) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const headerRefElement = useRef<HTMLElement>(null)
  const minWith768px = useMediaQuery({
    query: '(min-width: 768px)',
  })

  useEffect(() => {
    if (minWith768px) {
      setOpenMenu(false)
    }
  }, [minWith768px])

  useEffect(() => {
    if (openMenu) {
      document.body.classList.add('no-scroll')
      headerRefElement.current!.classList.remove('navGlassmorphism')
    } else {
      document.body.classList.remove('no-scroll')
      headerRefElement.current!.classList.add('navGlassmorphism')
    }
  }, [openMenu, headerRefElement])

  return (
    <>
      {/* In Firefox there are conflicts in rendering the menu because of the
    backdrop-filter property of navGlassmorphism */}
      <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <header
        ref={headerRefElement}
        className="z-[500] fixed w-full max-w-screen py-4 md:py-7 mx-auto"
      >
        <nav className="flex max-w-screen-xl mx-auto px-4 md:px-8 items-center justify-between">
          <img
            src={finclass}
            alt="logo/img"
            className="max-w-[100px] xs:max-w-[144px] w-full"
          />
          <div className="flex text-sm items-center gap-x-6 md:gap-x-11">
            <div className="hidden md:flex hover:drop-shadow-md  hover:brightness-105 duration-300 transition-all ease-in-out items-center gap-x-[10px] cursor-pointer">
              <img src={chevronRight} alt="chevron-right/icon" />
              <span className="inline-block font-semibold">Blog</span>
            </div>
            <div className="hidden md:flex items-center gap-x-[10px] cursor-pointer">
              <img src={chevronRight} alt="chevron-right/icon" />
              <span className="inline-block font-semibold">Assine agora</span>
            </div>
            <div className="flex items-center gap-x-[10px] cursor-pointer">
              <img src={accountPlaceholder} alt="account-placeholder/icon" />
              <span className="inline-block font-semibold">
                {!minWith768px ? 'Entrar' : 'Já sou assinante'}
              </span>
            </div>
            <img
              src={menu}
              alt="open-menu-hamburguer"
              onClick={() => setOpenMenu(true)}
              className="block md:hidden cursor-pointer"
            />
          </div>
        </nav>
      </header>
    </>
  )
}
