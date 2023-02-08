import graduationHat from '../assets/graduation-hat.svg'
import { useEffect, useRef, useState } from 'react'
import { mentors } from '../data'
import { MentorCard } from './integrate/MentorCard'

interface Props {}

export const Mentors = (props: Props) => {
  const slider = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let isDragging: boolean = false
    let currentX: number
    let initialX: number
    let xOffset: number = 0

    if (slider.current) {
      slider.current.addEventListener('mousedown', dragStart)
      slider.current.addEventListener('mouseup', dragEnd)
      slider.current.addEventListener('mouseleave', dragEnd)
      slider.current.addEventListener('mousemove', drag)

      function dragStart(e: any) {
        initialX = e.clientX
        isDragging = true
      }

      function dragEnd(e: any) {
        isDragging = false
      }

      function drag(e: any) {
        if (!isDragging) return
        e.preventDefault()
        currentX = e.clientX
        xOffset = currentX - initialX
        slider.current!.scrollLeft = slider.current!.scrollLeft - xOffset
      }

      return () => {
        if (slider.current) {
          slider.current.removeEventListener('mousedown', dragStart)
          slider.current.removeEventListener('mouseup', dragEnd)
          slider.current.removeEventListener('mouseleave', dragEnd)
          slider.current.removeEventListener('mousemove', drag)
        }
      }
    }
  }, [slider])

  return (
    <section id='mentors' className="max-w-[100vw] overflow-hidden bg-black">
      <div className="md:pt-16 max-w-screen-xl w-full mx-auto px-4 md:px-4">
        <div className="text-center">
          <img
            src={graduationHat}
            alt="graduation-hat/svg"
            className="w-fit mx-auto"
          />
          <h2 className="text-3xl md:text-4xl font-bold mt-3 !leading-[140%]">
            Conheça os seus <br className='md:hidden'/> mentores
          </h2>
          <span className="font-openSans text-[#F5F5F5] mt-2 inline-block">
            Os professores da Finclass são os maiores especialistas do mercado
            financeiro mundial
          </span>
        </div>
        <div className="relative">
          <div className="absolute z-10 -left-16 inset-y-0 h-full w-[100px] md:w-[150px] bg-gradient-to-r from-black via-black to-transparent" />
          <div className="absolute z-10 -right-16 inset-y-0 h-full w-[100px] md:w-[150px] bg-gradient-to-l from-black via-black to-transparent" />
          <div
            id="slider"
            ref={slider}
            className="scrollbar-hide pl-0 pr-8 md:pl-2 md:pr-14 my-10 mx-auto flex gap-x-1 items-center scroll-smooth overflow-x-scroll relative"
          >
            {mentors.map((mentor) => (
              <MentorCard key={mentor.name} {...mentor} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
