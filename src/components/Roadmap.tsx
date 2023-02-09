import formationIcon from '../assets/roadmap/formation-icon.svg'
import accountPlaceholder from '../assets/account-placeholder.svg'
import alignLeft from '../assets/roadmap/align-left.svg'
import alignCenter from '../assets/roadmap/align-center.svg'
import alignRight from '../assets/roadmap/align-right.svg'
import learnFromScratch from '../assets/roadmap/learn-from-scratch.svg'
import fundamentalConcepts from '../assets/roadmap/fundamental-concepts.svg'
import glossariesAndSpecialMaterials from '../assets/roadmap/glossaries-and-special-materials.svg'

interface Props {}

// Separar os dados do Roadmap em data.ts
// data = [{begginer: [{}], intermediary: [{}], advance: [{}]}]
// Fazer o grid layout com os items sendo passados via props
// Alterar o estado e renderizar os elementos dinâmicamente de acordo com o estado
// traçar as linhas no desktop

export const Roadmap = (props: Props) => {
  return (
    <section className="max-w-[100vw] overflow-hidden bg-black">
      <div className="pt-16 md:pt-28 pb-11 max-w-screen-xl w-full mx-auto px-4">
        <div className="flex items-center justify-center flex-col text-center">
          <img
            src={formationIcon}
            alt="formation/svg"
            className="w-8 h-8 mx-auto md:mx-0"
          />
          <h2 className="text-3xl md:text-4xl font-bold !leading-[120%] mt-3">
            <strong className="textGradient">O que </strong>
            você irá <br /> aprender na Finclass
          </h2>
          <span className="text-[#F5F5F5] mt-2 inline-block">
            Você evolui junto com a gente
          </span>
        </div>
        <div className="w-full">
          <div className="relative mx-auto h-fit w-fit">
            <img
              src={accountPlaceholder}
              alt="account-placeholder/svg"
              className="w-10 h-10 mx-auto mt-14"
            />
          </div>

          <div className="flex items-center justify-between">
            <button className="border flex items-center justify-center gap-x-2 border-transparent rounded-md font-bold w-[290px] py-6 bg-[#0F1116]">
              <img src={alignLeft} alt="" />
              Iniciante
            </button>
            <button className="border flex items-center justify-center gap-x-2 border-transparent rounded-md font-bold w-[290px] py-6 bg-[#0F1116]">
              <img src={alignCenter} alt="" />
              Intermediário
            </button>
            <button className="border flex items-center justify-center gap-x-2 border-transparent rounded-md font-bold w-[290px] py-6 bg-[#0F1116]">
              <img src={alignRight} alt="" />
              Avançado
            </button>
          </div>

          <div className="grid grid-cols-2">
            <div className="col-span-1 col-start-1 flex items-center">
              <img src={learnFromScratch} className="w-10 h-10 mr-[30px]" />
              <div>
                <h3 className="text-xl font-bold">
                  Aprenda a investir do zero
                </h3>
                <span className="font-light mt-2 inline-block w-[290px]">
                  Tenha conteúdos introdutórios para você começar a investir do
                  jeito certo.
                </span>
              </div>
            </div>
            <div className="col-span-1 col-start-2 h-full">
              {/* PLACEHOLDER */}
            </div>
            <div className="col-span-1 ml-auto col-start-2 flex items-center">
              <img src={fundamentalConcepts} className="w-10 h-10 mr-[30px]" />
              <div>
                <h3 className="text-xl font-bold">Conceitos fundamentais</h3>
                <span className="font-light mt-2 inline-block w-[290px]">
                  Entenda os principais conceitos do mercado financeiro com uma
                  curadoria de qualidade para que você não aprenda conceitos
                  errados.
                </span>
              </div>
            </div>
            <div className="col-span-1 col-start-1 flex items-center">
              <img src={glossariesAndSpecialMaterials} className="w-10 h-10 mr-[30px]" />
              <div>
                <h3 className="text-xl font-bold">
                  Glossários e materiais especiais
                </h3>
                <span className="font-light mt-2 inline-block w-[290px]">
                  Tenha auxílio de materiais complementares especiais para que
                  você consiga aprender de verdade como funciona o mercado.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
