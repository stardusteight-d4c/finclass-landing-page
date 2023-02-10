import finclassLogo from '../assets/finclass-logo.svg'
import instagram from '../assets/socials/instagram.svg'
import twitter from '../assets/socials/twitter.svg'
import linkedin from '../assets/socials/linkedin.svg'
import pinterest from '../assets/socials/pinterest.svg'
import tiktok from '../assets/socials/tiktok.svg'
import telegram from '../assets/socials/telegram.svg'
import youtube from '../assets/socials/youtube.svg'
import googlePlay from '../assets/google-play.png'
import appStore from '../assets/app-store.png'

import arrowCircleDown from '../assets/arrow-circle-down.svg'

interface Props {}

export const Footer = (props: Props) => {
  return (
    <footer className="max-w-[100vw] bg-black">
      <div className="pt-14 md:pt-44 pb-14 md:pb-20 max-w-screen-xl w-full mx-auto px-4 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-footerColumns gap-x-4 md:h-[366px]">
          <div className="col-span-1 h-full flex flex-col items-start justify-between">
            <div>
              <img
                src={finclassLogo}
                alt="finclass-logo/svg"
                className="w-[167px] pb-3 md:pb-0"
              />
            </div>
            <div>
              <div className="borderGradient h-0 border-t w-[80%]" />
              <span className="inline-block mt-2 md:mt-4 mr-4 text-white/60">
                Aprenda finanças com os melhores do mundo.
              </span>
            </div>
          </div>
          <div className="col-span-1 mt-8 md:mt-0">
            <h3 className="text-xl font-semibold mb-8">Transparência</h3>
            <ul className="space-y-4">
              <li className="text-white/60 cursor-pointer hover:underline transition-all duration-300 tracking-wide">
                Termos de uso
              </li>
              <li className="text-white/60 cursor-pointer hover:underline transition-all duration-300 tracking-wide">
                Política de Privacidade
              </li>
              <li className="text-white/60 cursor-pointer hover:underline transition-all duration-300 tracking-wide">
                Proteja sua privacidade
              </li>
              <li className="text-white/60 cursor-pointer hover:underline transition-all duration-300 tracking-wide">
                Gerenciamento de cookies
              </li>
            </ul>
          </div>
          <div className="col-span-1 mt-8 md:mt-0">
            <h3 className="text-xl font-semibold mb-8">Fale conosco</h3>
            <ul className="space-y-4">
              <li className="text-white/60 cursor-pointer hover:underline transition-all duration-300 tracking-wide">
                <a href="">Contato</a>
              </li>
              <li className="text-white/60 cursor-pointer hover:underline transition-all duration-300 tracking-wide">
                <a href="">Blog</a>
              </li>
            </ul>
          </div>
          <div className="col-span-1 mt-8 md:mt-0">
            <h3 className="text-xl font-semibold mb-8">Redes sociais</h3>
            <ul className="space-y-4">
              <li className="text-white/60 cursor-pointer hover:underline transition-all duration-300 tracking-wide">
                <a
                  href="https://www.instagram.com/finclass_grupoprimo"
                  target="_blank"
                  className="flex items-center gap-x-3"
                >
                  <img
                    src={instagram}
                    alt="instagram-icon/svg"
                    className="w-6 h-6"
                  />
                  <span className="inline-block">Instagram</span>
                </a>
              </li>
              <li className="text-white/60 cursor-pointer hover:underline transition-all duration-300 tracking-wide">
                <a
                  href="https://twitter.com/finclass_br"
                  target="_blank"
                  className="flex items-center gap-x-3"
                >
                  <img
                    src={twitter}
                    alt="twitter-icon/svg"
                    className="w-6 h-6"
                  />
                  <span className="inline-block">Twitter</span>
                </a>
              </li>
              <li className="text-white/60 cursor-pointer hover:underline transition-all duration-300 tracking-wide">
                <a
                  href="https://www.linkedin.com/company/finclass/"
                  target="_blank"
                  className="flex items-center gap-x-3"
                >
                  <img
                    src={linkedin}
                    alt="linkedin-icon/svg"
                    className="w-6 h-6"
                  />
                  <span className="inline-block">Linkedin</span>
                </a>
              </li>
              <li className="text-white/60 cursor-pointer hover:underline transition-all duration-300 tracking-wide">
                <a
                  href="https://www.pinterest.com/finclass/?invite_code=f3dc513d556842ffbc992c0ea2e167d9&sender=618119255015192321"
                  target="_blank"
                  className="flex items-center gap-x-3"
                >
                  <img
                    src={pinterest}
                    alt="pinterest-icon/svg"
                    className="w-6 h-6"
                  />
                  <span className="inline-block">Pinterest</span>
                </a>
              </li>
              <li className="text-white/60 cursor-pointer hover:underline transition-all duration-300 tracking-wide">
                <a
                  href="https://www.tiktok.com/@finclass_br"
                  target="_blank"
                  className="flex items-center gap-x-3"
                >
                  <img src={tiktok} alt="tiktok-icon/svg" className="w-6 h-6" />
                  <span className="inline-block">Tiktok</span>
                </a>
              </li>
              <li className="text-white/60 cursor-pointer hover:underline transition-all duration-300 tracking-wide">
                <a
                  href="https://t.me/finclassgrupoprimo"
                  target="_blank"
                  className="flex items-center gap-x-3"
                >
                  <img
                    src={telegram}
                    alt="telegram-icon/svg"
                    className="w-6 h-6"
                  />
                  <span className="inline-block">Telegram</span>
                </a>
              </li>
              <li className="text-white/60 cursor-pointer hover:underline transition-all duration-300 tracking-wide">
                <a
                  href="https://www.youtube.com/channel/UCeOEK9nZbdAw65WxPbXOZ0w"
                  target="_blank"
                  className="flex items-center gap-x-3"
                >
                  <img
                    src={youtube}
                    alt="youtube-icon/svg"
                    className="w-6 h-6"
                  />
                  <span className="inline-block">Youtube</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1 mt-8 md:mt-0">
            <h3 className="text-xl font-semibold mb-8">Baixe nosso app</h3>
            <ul className="flex items-center gap-x-10">
              <li className="text-white/60 cursor-pointer hover:underline transition-all duration-300 tracking-wide">
                <a
                  href="https://play.google.com/store/apps/details?id=com.finclass.app&pmp=FIN-VEX-HFIN-FINA-BFIN-20220316-ORG-X-PGT-ORG_HOME&pli=1"
                  target="_blank"
                >
                  <img src={googlePlay} className="w-12 h-12" />
                </a>
              </li>
              <li className="text-white/60 cursor-pointer hover:underline transition-all duration-300 tracking-wide">
                <a
                  href="https://apps.apple.com/us/app/finclass/id1575280028"
                  target="_blank"
                >
                  <img src={appStore} className="w-12 h-12" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-8 border-t border-t-[#ffffff2e] h-0 w-full" />
      <div className="pb-14 max-w-screen-xl w-full mx-auto px-4 md:px-4">
        <span className="text-white/50">
          {new Date().getFullYear()} © Todos os direitos reservados. Finclass
        </span>
        <div className="flex items-center gap-x-3 mt-3">
          <img
            onClick={() => window.scrollTo(0, 0)}
            src={arrowCircleDown}
            alt="backToTop"
            className="rotate-180 cursor-pointer"
          />
          <span className="text-white/50 font-light">Voltar para o topo</span>
        </div>
      </div>
    </footer>
  )
}
