import circle from '../../assets/roadmap/circle.svg'

interface Props {}

export const MinWidth768SkeletonRoadmap = (props: Props) => {
  return (
    <>
      <div className={style.verticalDivider} />
      <div className={style.firstLineContainer}>
        <div className={style.horizontalLineLeft} />
        <img src={circle} alt="trial-point/svg" className={style.animateIcon} />
        <img src={circle} alt="trial-point/svg" className={style.icon} />
      </div>
      <div className={style.secondLineContainer}>
        <div className={style.horizontalLineRight} />
        <img src={circle} alt="trial-point/svg" className={style.animateIcon} />
        <img src={circle} alt="trial-point/svg" className={style.icon} />
      </div>
      <div className={style.thirdLineContainer}>
        <div className={style.horizontalLineLeft} />
        <img src={circle} alt="trial-point/svg" className={style.animateIcon} />
        <img src={circle} alt="trial-point/svg" className={style.icon} />
      </div>
      <div className={style.fourthLineContainer}>
        <div className={style.horizontalLineRight} />
        <img src={circle} alt="trial-point/svg" className={style.animateIcon} />
        <img src={circle} alt="trial-point/svg" className={style.icon} />
      </div>
    </>
  )
}

const style = {
  verticalDivider: `absolute z-0 top-16 left-1/2 -translate-x-1/2 h-[77%] !w-0 border-l border-l-[#00E7F9]`,
  horizontalLineLeft: `borderGradient absolute top-5 -translate-x-full left-5 h-0 border-t mmd:w-[65px] xxll:w-[150px] xl:w-[225px]`,
  horizontalLineRight: `borderGradient absolute top-5 left-5 h-0 border-t mmd:w-[65px] xxll:w-[150px] xl:w-[225px]`,
  firstLineContainer: `absolute top-[51px] left-1/2 -translate-x-1/2 z-10`,
  secondLineContainer: `absolute top-[200px] left-1/2 -translate-x-1/2 z-10`,
  thirdLineContainer: `absolute top-[351px] left-1/2 -translate-x-1/2 z-10`,
  fourthLineContainer: `absolute top-[84.3%] left-1/2 -translate-x-1/2 z-10`,
  animateIcon: `animate-pings`,
  icon: `absolute top-0`,
}
