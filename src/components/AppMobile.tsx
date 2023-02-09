import appIcon from '../assets/app/app-icon.svg'
import finclassCommunity from '../assets/app/finclass-community.png'
import googlePlayDownload from '../assets/google-play-download.png'
import appStoreDownload from '../assets/app-store-download.png'
import { appList } from '../data'
import { AppListItem } from './integrate/AppListItem'

interface Props {}

export const AppMobile = (props: Props) => {
  return (
    <section className="max-w-[100vw] overflow-hidden bg-black">
      <div className="pt-16 md:pt-28 pb-11 max-w-screen-xl w-full mx-auto px-4">
        <div className="grid md:grid-cols-2">
          <div className="text-center md:text-left col-span-1 md:w-[310px] mmd:w-[410px] xl:w-[510px]">
            <img src={appIcon} className="w-8 h-8 mx-auto md:mx-0" />
            <h2 className="text-3xl md:text-4xl font-bold !leading-[120%] mt-3">
            <strong className='textGradient'>Conheça</strong> nosso <br className="md:hidden" /> app
            </h2>
            <p className="inline-block mb-14 md:mb-0 mt-2 w-[70%] font-light md:text-xl !leading-snug">
              Aprenda com os melhores do mundo, onde e quando você quiser.
            </p>
          </div>
          <div className='h-fit text-center mx-auto md:mx-0 w-full max-w-[400px] md:max-w-none md:my-auto'>
            <ul>
              {appList.map((item) => (
                <AppListItem {...item} />
              ))}
            </ul>
            <div className='flex flex-col md:flex-row items-center gap-y-8 gap-x-4 mt-10'>
              <img
                src={appStoreDownload}
                alt="download via App Store"
                className="w-[180px] cursor-pointer"
              />
              <img
                src={googlePlayDownload}
                alt="download via Google Play"
                className="w-[180px] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
