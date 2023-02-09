import classesIcon from '../assets/contents/classes.svg'
import finclasses from '../assets/contents/finclasses.svg'
import finseries from '../assets/contents/finseries.svg'
import finbooks from '../assets/contents/finbooks.svg'
import chevronDown from '../assets/chevron-down.svg'
import { contents } from '../data'
import { ContentListItem } from './integrate/ContentListItem'
import { useState } from 'react'

interface Props {}

export const Contents = (props: Props) => {
  const [seeMore, setSeeMore] = useState<boolean>(false)

  return (
    <section className="max-w-[100vw] overflow-hidden bg-black">
      <div className="md:pt-20 pb-11 max-w-screen-xl w-full mx-auto px-4">
        <div className="grid md:grid-cols-2">
          <div className="text-center md:text-left col-span-1 md:w-[310px] mmd:w-[410px] xl:w-[510px]">
            <img src={classesIcon} className="w-8 h-8 mx-auto md:mx-0" />
            <h2 className="text-3xl md:text-4xl font-bold mb-[44px] !leading-[120%] mt-3">
              <strong className="textGradient">Conheça</strong> <br />
              nossos conteúdos
            </h2>
            <ul>
              <li>
                <img src={finclasses} className="h-7 mx-auto md:mx-0" />
                <p className="mt-[22px] text-lg font-light">
                  Aulas com alto nível de produção sobre diversos assuntos
                  relacionados a investimentos e finanças, onde você é ensinado
                  por grandes especialistas do mercado.
                </p>
              </li>
              <div className="borderGradient inline-block my-8 md:my-4 border-t border-t-[#00E7F9] h-0 w-full" />

              <li>
                <img src={finseries} className="h-7 mx-auto md:mx-0" />
                <p className="mt-[22px] text-lg font-light">
                  Documentários originais que visam um entretenimento
                  relacionado ao mundo do dinheiro, trazendo grandes experts
                  mundiais.
                </p>
              </li>
              <div className="borderGradient inline-block my-8 md:my-4 border-t border-t-[#00E7F9] h-0 w-full" />

              <li>
                <img src={finbooks} className="h-7 mx-auto md:mx-0" />
                <p className="mt-[22px] text-lg font-light">
                  Insights sobre os melhores livros de investimentos, economia e
                  dinheiro vindos de pessoas que estudaram a fundo esses livros.
                </p>
              </li>
              <div className="borderGradient inline-block my-8 md:my-4 border-t border-t-[#00E7F9] h-0 w-full" />
            </ul>
          </div>
          <div className="h-fit my-auto">
            <ul className="col-span-1 gap-1 mt-8 md:rounded-lg md:overflow-hidden md:grid h-[80%] grid-cols-3 grid-rows-4">
              {contents.map((content, index) => (
                <ContentListItem
                  key={content.title}
                  index={index}
                  seeMore={seeMore}
                  itemData={content}
                />
              ))}
            </ul>
            <span
              onClick={() => setSeeMore(!seeMore)}
              className="flex items-center py-1 justify-center gap-x-2 cursor-pointer md:hidden"
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
