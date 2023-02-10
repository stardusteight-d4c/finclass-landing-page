import finclass from '../../assets/finclass-circle.png'

interface Props {}

export const Sticky = (props: Props) => {
  return (
    <div className="fixed group bottom-5 right-5 md:bottom-12 md:right-12 cursor-pointer z-40">
      <div className="flex items-center justify-center gap-x-4">
        <span className="opacity-0 hidden group-hover:block group-hover:opacity-100 text-xl font-medium transition-all duration-200">
          Fale conosco
        </span>
        <a
          href="https://web.whatsapp.com/send?phone=5511913547018&text=Olá, Gostaria de conhecer mais sobre a Finclass!"
          target="_blank"
        >
          <img
            src={finclass}
            className="w-10 h-10 md:w-16 shadow-lg shadow-white/20 md:h-16 hover:scale-105 rounded-full transition-all duration-200"
          />
        </a>
      </div>
    </div>
  )
}
