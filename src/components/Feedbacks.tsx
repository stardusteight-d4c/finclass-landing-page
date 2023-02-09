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
      return
    } else {
      setSelectedFeedback(selectedFeeback + 1)
    }
  }

  const decrementSelectedFeedback = () => {
    if (selectedFeeback === 0) {
      return
    } else {
      setSelectedFeedback(selectedFeeback - 1)
    }
  }

  return (
    <section className="max-w-[100vw] overflow-hidden bg-black">
      <div className="pt-16 md:pt-28 pb-11 max-w-screen-xl w-full mx-auto px-4">
        <div className="flex flex-col">
          <div className="text-center md:text-left md:w-[310px] mmd:w-[410px] xl:w-[510px]">
            <img src={feedbackIcon} className="w-8 h-8 mx-auto md:mx-0" />
            <h2 className="text-3xl md:text-4xl font-bold !leading-[120%] mt-3">
              <strong className="textGradient">O que </strong> estão dizendo{' '}
              <br /> sobre a Finclass
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-feedbackColumns items-center gap-x-[100px] mt-14">
          <div className="col-span-1 flex flex-col gap-y-6">
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
          <div className="col-span-1 w-fit my-auto">
            <div className="flex flex-col w-fit h-fit gap-y-4">
              <img
                onClick={decrementSelectedFeedback}
                src={arrowCircleDown}
                className="w-12 h-12 rotate-180 cursor-pointer"
              />
              <img
                onClick={incrementSelectedFeedback}
                src={arrowCircleDown}
                className="w-12 h-12 cursor-pointer"
              />
            </div>
          </div>
          <Feedback {...feedbacks[selectedFeeback].feedback} />
        </div>
      </div>
    </section>
  )
}
