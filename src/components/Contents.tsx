import classesIcon from '../assets/contents/classes.svg'
import chevronDown from '../assets/chevron-down.svg'
import { contentsList, contentsSquareList } from '../data'
import { ContentSquareListItem } from './integrate/ContentSquareListItem'
import { useState } from 'react'
import { ContentListItem } from './integrate/ContentListItem'

interface Props {}

export const Contents = (props: Props) => {
  const [seeMore, setSeeMore] = useState<boolean>(false)

  return (
    <section className={style.wrapper}>
      <div className={style.contentWrapper}>
        <div className={style.gridContainer}>
          <div className={style.firstColumnContainer}>
            <img src={classesIcon} className={style.classesIcon} />
            <h2 className={style.heading}>
              <strong className={style.strong}>Conheça</strong> <br />
              nossos conteúdos
            </h2>
            <ul>
              {contentsList.map((item) => (
                <ContentListItem {...item} />
              ))}
            </ul>
          </div>
          <div className={style.secondColumnContainer}>
            <ul className={style.squareListWrapper}>
              {contentsSquareList.map((content, index) => (
                <ContentSquareListItem
                  key={content.title}
                  index={index}
                  seeMore={seeMore}
                  itemData={content}
                />
              ))}
            </ul>
            <span
              onClick={() => setSeeMore(!seeMore)}
              className={style.showMore}
            >
              {seeMore ? 'Mostrar menos' : 'Mostrar mais'}{' '}
              <img
                src={chevronDown}
                alt="chevron-down/svg"
                className={`${seeMore && 'rotate-180'}`}
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

const style = {
  wrapper: `max-w-[100vw] overflow-hidden bg-black`,
  contentWrapper: `pt-24 md:pt-44 pb-11 max-w-screen-xl w-full mx-auto px-4`,
  gridContainer: `grid md:grid-cols-2`,
  firstColumnContainer: `text-center md:text-left col-span-1 md:w-[310px] mmd:w-[410px] xl:w-[510px]`,
  classesIcon: `w-8 h-8 mx-auto md:mx-0`,
  heading: `text-3xl md:text-4xl font-bold mb-[44px] !leading-[120%] mt-3`,
  strong: `textGradient`,
  secondColumnContainer: `h-fit my-auto col-span-1`,
  squareListWrapper: `gap-1 mt-8 md:rounded-lg md:overflow-hidden md:grid h-[80%] grid-cols-3 grid-rows-4`,
  showMore: `flex items-center py-1 justify-center gap-x-2 cursor-pointer md:hidden`,
}
