import star from '../../assets/star.svg'
import quote from '../../assets/quote.svg'

interface Props {
  title: string
  feedback: string
}

export const Feedback = ({ title, feedback }: Props) => {
  function html() {
    return {
      __html: feedback,
    }
  }

  return (
    <div className="col-span-1 bg-[#0F1116] py-10 px-12 rounded-xl h-[425px] w-full">
    <div>
      <h4 className="font-semibold text-lg">{title}</h4>
      <ul className="flex items-center gap-x-2 mt-2 mb-7">
        <li>
          <img src={star} className="w-4 h-4" />
        </li>
        <li>
          <img src={star} className="w-4 h-4" />
        </li>
        <li>
          <img src={star} className="w-4 h-4" />
        </li>
        <li>
          <img src={star} className="w-4 h-4" />
        </li>
        <li>
          <img src={star} className="w-4 h-4" />
        </li>
      </ul>
      <img src={quote} className="w-6 h-6" />
      <p
        className="mt-7 italic text-white/80"
        dangerouslySetInnerHTML={html()}
      />
    </div>
    </div>
  )
}
