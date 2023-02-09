import { isEven } from '../../utils/isEven'
import circle from '../../assets/roadmap/circle.svg'

interface Props {
  data: {
    icon: string
    title: string
    description: string
  }
  index: number
}

export const MaxWidth768RoadmapListItem = ({
  index,
  data: { icon, title, description },
}: Props) => {
  return (
    <div
      className={`${
        isEven(index)
          ? 'col-start-1 w-[50%] columns-1 pr-6 text-right'
          : 'col-start-2 ml-6'
      } col-span-2 h-full flex items-center my-10`}
    >
      <div>
        <div className={`${isEven(index) && 'ml-auto'} relative h-fit w-fit`}>
          <img src={icon} />
          <div
            className={`${
              isEven(index) ? '-right-[43px]' : '-left-[43px]'
            } -top-2 absolute `}
          >
            <img src={circle} alt="trial-point/svg" className="animate-pings" />
            <img
              src={circle}
              alt="trial-point/svg"
              className="absolute top-0"
            />
          </div>
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
        <span className="font-light text-base mt-2 !leading-snug inline-block">
          {description}
        </span>
      </div>
    </div>
  )
}
