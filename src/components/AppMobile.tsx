import appIcon from '../assets/app/app-icon.svg'
import googlePlayDownload from '../assets/google-play-download.png'
import appStoreDownload from '../assets/app-store-download.png'
import { appList } from '../data'
import { AppListItem } from './integrate/AppListItem'

interface Props {}

export const AppMobile = (props: Props) => {
  return (
    <section className={style.wrapper}>
      <div className={style.contentWrapper}>
        <div className={style.gridContainer}>
          <div className={style.headingContainer}>
            <img src={appIcon} className={style.appIcon} />
            <h2 className={style.heading}>
              <strong className={style.strong}>Conheça</strong> nosso{' '}
              <br className="md:hidden" /> app
            </h2>
            <span className={style.span}>
              Aprenda com os melhores do mundo, onde e quando você quiser.
            </span>
          </div>
          <div className={style.appListWrapper}>
            <ul>
              {appList.map((item) => (
                <AppListItem key={item.title} {...item} />
              ))}
            </ul>
            <div className={style.downloadsContainer}>
              <img
                src={appStoreDownload}
                alt="download via App Store"
                className={style.downloadImg}
              />
              <img
                src={googlePlayDownload}
                alt="download via Google Play"
                className={style.downloadImg}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const style = {
  wrapper: `max-w-[100vw] overflow-hidden bg-black`,
  contentWrapper: `pt-20 md:pt-44 pb-11 max-w-screen-xl w-full mx-auto px-4`,
  gridContainer: `grid md:grid-cols-2`,
  headingContainer: `text-center md:text-left col-span-1 md:w-[310px] mmd:w-[410px] xl:w-[510px]`,
  appIcon: `w-8 h-8 mx-auto md:mx-0`,
  heading: `text-3xl md:text-4xl font-bold !leading-[120%] mt-3`,
  strong: `textGradient`,
  span: `inline-block text-white/80 text-sm mb-14 md:mb-0 mt-2 w-[70%] md:text-xl !leading-snug`,
  appListWrapper: `h-fit text-center mx-auto md:mx-0 w-full max-w-[400px] md:max-w-none md:my-auto`,
  downloadsContainer: `flex mdd:-ml-5 flex-col md:flex-row items-center gap-y-8 gap-x-4 mt-10`,
  downloadImg: `w-[190px] hover:brightness-110 cursor-pointer`,
}
