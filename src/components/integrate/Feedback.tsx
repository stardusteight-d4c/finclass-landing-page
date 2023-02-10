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
    <div className="col-span-1 md:col-start-2 lg:col-start-auto row-span-1 row-start-1 md:row-start-2 lg:row-start-auto bg-[#0F1116] py-8 md:py-10 px-4 md:px-12 rounded-t-xl md:rounded-xl h-full lg:pt-16 xl:pt-10  max-h-[484px] min-h-[484px] md:max-h-[548px] md:min-h-[548px] xl:max-h-[404px] xl:min-h-[404px] w-full">
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
        className="mt-7 md:mt-10 lg:mt-7 italic text-white/80"
        dangerouslySetInnerHTML={html()}
      />
    </div>
    </div>
  )
}
