import React, { useEffect, useRef, useState } from 'react'
import { PlusCloseIconAnimated } from './PlusCloseIconAnimated'

interface Props {
  title: string
  content: string
}

export const Accordion = ({ title, content }: Props) => {
  const [changeStateIconAnimation, setChangeStateIconAnimation] =
    useState<boolean>(false)
  const [height, setHeight] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  function html() {
    return {
      __html: content,
    }
  }

  useEffect(() => {
    setHeight(ref.current!.offsetHeight)
  }, [height, ref, changeStateIconAnimation])

  return (
    <div className="mb-6  w-full max-w-[741px] mx-auto">
      <div
        onClick={() => setChangeStateIconAnimation(!changeStateIconAnimation)}
        className={`${
          changeStateIconAnimation ? 'rounded rounded-b-none' : 'rounded'
        } cursor-pointer flex h-[80px] px-5 items-center justify-between bg-[#0F1116]`}
      >
        <h3 className="text-[#E1E1E6] text-sm md:text-base text-left font-semibold">{title}</h3>
        <PlusCloseIconAnimated
          changeStateIconAnimation={changeStateIconAnimation}
        />
      </div>
      <div
        style={{
          maxHeight: changeStateIconAnimation ? `${height}px` : '0px',
          overflow: 'hidden',
        }}
        className="transition-all cursor-default ease-in-out duration-1000 rounded-b bg-[#0F1116]"
      >
        <p
          ref={ref}
          className="mb-6 text-left text-sm md:text-base text-[#C4C4CC] px-5 pb-[30px] leading-6 md:!leading-[32px]"
          dangerouslySetInnerHTML={html()}
        >
        </p>
      </div>
    </div>
  )
}
