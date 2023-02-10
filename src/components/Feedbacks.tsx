import feedbackIcon from '../assets/feedback-icon.svg'
import arrowCircleDown from '../assets/arrow-circle-down.svg'
import { feedbacks } from '../data'
import { AuthorFeedbackCard } from './integrate/AuthorFeedbackCard'
import { Feedback } from './integrate/Feedback'
import { useState } from 'react'

interface Props {}

export const Feedbacks = (props: Props) => {
  const [selectedFeeback, setSelectedFeedback] = useState<number>(0)

  const incrementSelectedFeedback = () => {
    if (selectedFeeback === 2) {
      setSelectedFeedback(0)
    } else {
      setSelectedFeedback(selectedFeeback + 1)
    }
  }

  const decrementSelectedFeedback = () => {
    if (selectedFeeback === 0) {
      setSelectedFeedback(2)
    } else {
      setSelectedFeedback(selectedFeeback - 1)
    }
  }

  return (
    <section className={style.wrapper}>
      <div className={style.contentWrapper}>
        <div className={style.headingWrapper}>
          <div className={style.headingContainer}>
            <img src={feedbackIcon} className={style.feedbackIcon} />
            <h2 className={style.heading}>
              <strong className={style.strong}>O que </strong> estão dizendo{' '}
              <br /> sobre a Finclass
            </h2>
          </div>
        </div>
        <div className={style.feedbacksWrapper}>
          <div className={style.minWidth768FeedbackAuthorWrapper}>
            {feedbacks.map((feedback, index) => (
              <AuthorFeedbackCard
                key={feedback.user.name}
                index={index}
                selectedFeeback={selectedFeeback}
                setSelectedFeedback={setSelectedFeedback}
                {...feedback.user}
              />
            ))}
          </div>
          <div className={style.arrowsWrapper}>
            <div className={style.arrowsContainer}>
              <img
                onClick={decrementSelectedFeedback}
                src={arrowCircleDown}
                className={style.decrementArrow}
              />
              <img
                onClick={incrementSelectedFeedback}
                src={arrowCircleDown}
                className={style.incrementArrow}
              />
            </div>
          </div>
          <Feedback {...feedbacks[selectedFeeback].feedback} />
          <div className={style.maxWidth768FeedbackAuthorWrapper}>
            <AuthorFeedbackCard {...feedbacks[selectedFeeback].user} />
          </div>
        </div>
      </div>
    </section>
  )
}

const style = {
  wrapper: `max-w-[100vw] overflow-hidden bg-black`,
  contentWrapper: `pt-16 md:pt-28 pb-11 max-w-screen-xl w-full mx-auto px-4`,
  headingWrapper: `flex flex-col`,
  headingContainer: `text-center md:text-left md:w-[310px] mmd:w-[410px] xl:w-[510px]`,
  feedbackIcon: `w-8 h-8 mx-auto md:mx-0`,
  heading: `text-3xl md:text-4xl font-bold !leading-[120%] mt-3`,
  strong: `textGradient`,
  feedbacksWrapper: `grid grid-cols-1 grid-rows-smallRows md:grid-cols-mediumFeedbackColumns md:grid-rows-mediumRows lg:grid-rows-none lg:grid-cols-feedbackColumns items-center md:gap-x-4 lg:gap-x-[100px] mt-14`,
  minWidth768FeedbackAuthorWrapper: `hidden md:flex flex-col gap-y-6 col-span-1 col-start-1 row-span-1 row-start-2 lg:row-start-auto`,
  arrowsWrapper: `col-span-1 row-span-1 row-start-3 md:col-start-2 md:row-span-1 md:row-start-1 lg:row-start-auto w-full lg:w-fit lg:my-auto`,
  arrowsContainer: `flex mt-4 md:mt-0 flex-row ml-auto lg:flex-col w-fit h-fit gap-x-4 mb-4 lg:mb-0 gap-y-4`,
  decrementArrow: `w-12 h-12 rotate-90 lg:rotate-180 cursor-pointer`,
  incrementArrow: `w-12 h-12 -rotate-90 lg:rotate-0 cursor-pointer`,
  maxWidth768FeedbackAuthorWrapper: `block md:hidden row-start-2 row-span-1 col-span-1 w-full`,
}
