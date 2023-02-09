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

import learnFromScratch from './assets/roadmap/learn-from-scratch.svg'
import fundamentalConcepts from './assets/roadmap/fundamental-concepts.svg'
import glossariesAndSpecialMaterials from './assets/roadmap/glossaries-and-special-materials.svg'
import clearYourDoubts from './assets/roadmap/clear-your-doubts.svg'
import learnStockMarketAnalysis from './assets/roadmap/learn-stock-market-analysis.svg'
import investBetter from './assets/roadmap/invest-better.svg'
import deepenYourKnowledge from './assets/roadmap/deepen-your-knowledge.svg'
import bestTeachers from './assets/roadmap/best-teachers.svg'
import furtherDeepenYourKnowledge from './assets/roadmap/further-deepen-your-knowledge.svg'
import getProfessionalInTheMarket from './assets/roadmap/get-professional-in-the-market.svg'
import updateYourKnowledge from './assets/roadmap/update-your-knowledge.svg'
import monthlyContent from './assets/roadmap/monthly-content.svg'

import user1 from './assets/user1.png'
import user2 from './assets/user2.png'
import user3 from './assets/user3.png'

type RoadmapListItem = {
  icon: string
  title: string
  description: string
}

type Feedback = {
  title: string
  feedback: string
}

type User = {
  avatar: string
  name: string
  role: string
}

interface Mentors {
  name: string
  img: string
  description: string
  videoID: string
}

interface ContentListItem {
  icon: string
  title: string
}

interface AppListItem {
  icon: string
  title: string
  description: string
}

interface RoadmapList {
  beginner: RoadmapListItem[]
  intermediary: RoadmapListItem[]
  advanced: RoadmapListItem[]
}

interface Feedbacks {
  user: User
  feedback: Feedback
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

export const contents: ContentListItem[] = [
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

export const appList: AppListItem[] = [
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

export const roadmapList: RoadmapList = {
  beginner: [
    {
      icon: learnFromScratch,
      title: 'Aprenda a investir do zero',
      description: `Tenha conteúdos introdutórios para você começar a investir do jeito certo.`,
    },
    {
      icon: fundamentalConcepts,
      title: 'Conceitos fundamentais',
      description: `Entenda os principais conceitos do mercado financeiro com uma
      curadoria de qualidade para que você não aprenda conceitos
      errados.`,
    },
    {
      icon: glossariesAndSpecialMaterials,
      title: 'Glossários e materiais especiais',
      description: `Tenha auxílio de materiais complementares especiais para que
      você consiga aprender de verdade como funciona o mercado.`,
    },
    {
      icon: clearYourDoubts,
      title: 'Tire suas dúvidas',
      description: `Tenha um suporte para tirar todas as suas dúvidas relacionadas ao conteúdo
      da plataforma.`,
    },
  ],
  intermediary: [
    {
      icon: learnStockMarketAnalysis,
      title: 'Aprenda análise de bolsa',
      description: `Aprenda as diversas estratégias para você escolher as melhores ações e
      investimentos do mercado.`,
    },
    {
      icon: investBetter,
      title: 'Invista melhor',
      description: `Melhore a sua estratégia de investimento e consiga melhores retornos ao
      longo do tempo.`,
    },
    {
      icon: deepenYourKnowledge,
      title: 'Aprofunde seus conhecimentos',
      description: `Aprenda conceitos novos e técnicos sobre o mercado financeiro e melhore
      ainda mais a sua tomada de decisão.`,
    },
    {
      icon: bestTeachers,
      title: 'Melhores professores',
      description: `Faça tudo isso tendo acesso aos melhores profissionais do mercado e a
      professores que realmente entendem e vivem do mercado financeiro.`,
    },
  ],
  advanced: [
    {
      icon: furtherDeepenYourKnowledge,
      title: 'Aprofunde seu conhecimento',
      description: `Aprenda conceitos novos e técnicos sobre o mercado financeiro e melhore
      ainda mais a sua tomada de decisão.`,
    },
    {
      icon: getProfessionalInTheMarket,
      title: 'Profissionalize-se no mercado',
      description: `Adquira o conhecimento que os melhores profissionais do mercado financeiro
      têm.`,
    },
    {
      icon: updateYourKnowledge,
      title: 'Atualize seus conhecimentos',
      description: `Atualize-se com os conceitos mais importantes do mercado e sempre fique por
      dentro das novas tendências e estratégias do mercado.`,
    },
    {
      icon: monthlyContent,
      title: 'Conteúdo Mensal',
      description: `Tenha sempre um conteúdo novo para assistir e continue sempre se atualizando
      das novidades do mercado.`,
    },
  ],
}

export const feedbacks: Feedbacks[] = [
  {
    user: {
      avatar: user1,
      name: 'Sarah Fagundes',
      role: 'Empreendedora - Curitiba',
    },
    feedback: {
      title: 'A finclass mudou minha vida ',
      feedback: `A Finclass veio para revolucionar tudo o que já vimos no mercado financeiro. 
      A oportunidade de ter tanta gente incrível e de tão alto nível na palma da minha mão me 
      traz liberdade, muita bagagem enquanto eu estou aprendendo.
      <br />
      <br />
      Na Finclass está tudo organizado e “mastigado” para gente. Recomendo de olhos fechados, 
      é a coisa mais incrível que eu já vi na internet. É literalmente uma Netflix dos 
      investimentos - só que melhor!`,
    },
  },
  {
    user: {
      avatar: user2,
      name: 'Yasmin Rodrigues',
      role: 'Gestora de Processos São Paulo',
    },
    feedback: {
      title: 'Os maiores mentores de finanças do mundo!',
      feedback: `A Finclass é muito completa, desde aulas, documentos e livros! Com os
      maiores mentores de finanças do mundo! Jeito leve de aprender finanças e realmente 
      mudar de vida, aumentando a nossa famosa bola de neve e sair da corrida dos ratos e
      fazer seu dinheiro trabalhar por nós! Uma maneira de aprender um pouco todos os dias
      sem ser cansativo, dentro da minha rotina! A finclass é expecional!`,
    },
  },
  {
    user: {
      avatar: user3,
      name: 'Carlos Junqueira',
      role: 'Gestor de Processos São Paulo',
    },
    feedback: {
      title: 'Jeito leve de aprender finanças',
      feedback: `A plataforma tem um conceito incrível: incluir diversos temas relacionados 
      a finanças em um mesmo lugar (aulas, documentários, livros, etc.).
      <br />
      <br />
      As autoridades sobre os temas, até o momento, estão ótimas (Braga sobre vieses, 
      Giambiagi sofre finanças públicas e Breno Perrucho sobre o início dos investimentos). 
      A plataforma está fácil de mexer, bem intuitiva e com um design muito bonito.`,
    },
  },
]
