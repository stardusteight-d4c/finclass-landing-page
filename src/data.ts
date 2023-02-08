import thiagoNigro from './assets/mentors/thiago-nigro.webp'
import guilhermeBenchimol from './assets/mentors/guilherme-benchimol.webp'
import howardMarks from './assets/mentors/howard-marks.webp'
import samirKerbage from './assets/mentors/samir-kerbage.webp'
import fernandoFerreira from './assets/mentors/fernando-ferreira.webp'
import mariliaFontes from './assets/mentors/marilia-fontes.webp'
import florianBartunek from './assets/mentors/florian-bartunek.webp'
import brunoPerini from './assets/mentors/bruno-perini.webp'
import fabioGiambiagi from './assets/mentors/fabio-giambiagi.webp'

import treasuryDirect from './assets/contents/treasury-direct.svg'
import fundamentalsOfTheExchange from './assets/contents/fundamentals-of-the-exchange.svg'
import cryptocurrencies from './assets/contents/cryptocurrencies.svg'
import fixedIncome from './assets/contents/fixed-income.svg'
import indicatorAnalysis from './assets/contents/indicator-analysis.svg'
import investmentFunds from './assets/contents/investment-funds.svg'
import publicFinances from './assets/contents/public-finances.svg'
import diversification from './assets/contents/diversification.svg'
import reserveOfValue from './assets/contents/reserve-of-value.svg'
import behavioralBiases from './assets/contents/behavioral-biases.svg'
import equity from './assets/contents/equity.svg'
import others from './assets/contents/others.svg'

import downloadIcon from './assets/app/download.svg'
import trialsIcon from './assets/app/trials-icon.svg'
import materialsIcon from './assets/app/materials-icon.svg'
import playerIcon from './assets/app/plus-player-icon.svg'

interface Mentors {
  name: string
  img: string
  description: string
  videoID: string
}

interface ContentList {
  icon: string
  title: string
}

interface AppList {
  icon: string
  title: string
  description: string
}

export const mentors: Mentors[] = [
  {
    name: `Thiago Nigro`,
    img: thiagoNigro,
    description: `Maior influenciador de finanças do mundo fala sobre diversificação.`,
    videoID: `BuZlh8lXliI`,
  },
  {
    name: `Guilherme Benchimol`,
    img: guilhermeBenchimol,
    description: `Fundador da XP Inc. ensina sobre o poder da geração de equity.`,
    videoID: `93iOx4OKLgg`,
  },
  {
    name: `Howard Marks`,
    img: howardMarks,
    description: `O renomado fundador da Oaktree ensina ciclos de mercado.`,
    videoID: `M0juBlRCJNc`,
  },
  {
    name: `Marilia Fontes`,
    img: mariliaFontes,
    description: `Sócia da Nord Research ensina como a renda fixa funciona.`,
    videoID: `dQChevfVxRw`,
  },
  {
    name: `Bruno Perini`,
    img: brunoPerini,
    description: `Criador do canal “Você Mais Rico” ensina sobre reserva de valor.`,
    videoID: `XtO1qRcifEI`,
  },
  {
    name: `Samir Kerbage`,
    img: samirKerbage,
    description: `CTO da Hashdex, ensina sobre criptoativos e bitcoin.`,
    videoID: `RGnJa5cLVWo`,
  },
  {
    name: `Florian Bartunek`,
    img: florianBartunek,
    description: `Gestor da Constellation ensina sobre os fundamentos da bolsa.`,
    videoID: `t0NxxdOdEzc`,
  },
  {
    name: `Fernando Ferreira`,
    img: fernandoFerreira,
    description: `Estrategista-chefe da XP ensina análise de indicadores.`,
    videoID: `JZJQcITNrb0`,
  },
  {
    name: `Fabio Giambiagi`,
    img: fabioGiambiagi,
    description: `Economista-chefe do BNDES ensina sobre finanças públicas.`,
    videoID: `O3RKkGAuvAU`,
  },
]

export const contents: ContentList[] = [
  {
    icon: treasuryDirect,
    title: 'Tesouro Direto',
  },
  {
    icon: fundamentalsOfTheExchange,
    title: ' Fundamentos da Bolsa',
  },
  {
    icon: cryptocurrencies,
    title: 'Criptomoedas',
  },
  {
    icon: fixedIncome,
    title: 'Renda Fixa',
  },
  {
    icon: indicatorAnalysis,
    title: 'Análise de Indicadores',
  },
  {
    icon: investmentFunds,
    title: 'Fundos de investimento',
  },
  {
    icon: publicFinances,
    title: 'Financas Públicas',
  },
  {
    icon: diversification,
    title: 'Diversificação',
  },
  {
    icon: reserveOfValue,
    title: 'Reserva de Valor',
  },
  {
    icon: behavioralBiases,
    title: 'Vieses Comportamentais',
  },
  {
    icon: equity,
    title: 'Equity',
  },
  {
    icon: others,
    title: 'Outros',
  },
]

export const appList: AppList[] = [
  {
    icon: downloadIcon,
    title: `Baixe e assista offline`,
    description: `Baixe e assista offline os seus conteúdos preferidos e continue de onde parou.`,
  },
  {
    icon: trialsIcon,
    title: `Trilhas de conhecimento`,
    description: `Elas te guiarão para que você não perca tempo e aproveite melhor o conhecimento disponível para você.`,
  },
  {
    icon: materialsIcon,
    title: `Materiais complementares`,
    description: ` Tenha e-books e diversos materiais complementares exclusivos para que você melhore ainda mais o seu nível de aprendizado.`,
  },
  {
    icon: playerIcon,
    title: `+500 aulas já disponíveis`,
    description: `Mais de 500 aulas para assistir e continuar a sua jornada com novos conteúdos todos os meses.`,
  },
]
