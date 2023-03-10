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

import finclasses from './assets/contents/finclasses.svg'
import finseries from './assets/contents/finseries.svg'
import finbooks from './assets/contents/finbooks.svg'

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

type FaqItem = {
  title: string
  content: string
}

interface Mentors {
  name: string
  img: string
  description: string
  videoID: string
}

interface ContentsListItem {
  img: string
  content: string
}

interface ContentSquareListItem {
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

interface Faq {
  general: FaqItem[]
  application: FaqItem[]
  subscriptions: FaqItem[]
}

export const mentors: Mentors[] = [
  {
    name: `Thiago Nigro`,
    img: thiagoNigro,
    description: `Maior influenciador de finan??as do mundo fala sobre diversifica????o.`,
    videoID: `BuZlh8lXliI`,
  },
  {
    name: `Guilherme Benchimol`,
    img: guilhermeBenchimol,
    description: `Fundador da XP Inc. ensina sobre o poder da gera????o de equity.`,
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
    description: `S??cia da Nord Research ensina como a renda fixa funciona.`,
    videoID: `dQChevfVxRw`,
  },
  {
    name: `Bruno Perini`,
    img: brunoPerini,
    description: `Criador do canal ???Voc?? Mais Rico??? ensina sobre reserva de valor.`,
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
    description: `Estrategista-chefe da XP ensina an??lise de indicadores.`,
    videoID: `JZJQcITNrb0`,
  },
  {
    name: `Fabio Giambiagi`,
    img: fabioGiambiagi,
    description: `Economista-chefe do BNDES ensina sobre finan??as p??blicas.`,
    videoID: `O3RKkGAuvAU`,
  },
]

export const contentsList: ContentsListItem[] = [
  {
    img: finclasses,
    content: `Aulas com alto n??vel de produ????o sobre diversos assuntos
    relacionados a investimentos e finan??as, onde voc?? ?? ensinado
    por grandes especialistas do mercado.`,
  },
  {
    img: finseries,
    content: `Document??rios originais que visam um entretenimento
    relacionado ao mundo do dinheiro, trazendo grandes experts
    mundiais.`,
  },
  {
    img: finbooks,
    content: `Insights sobre os melhores livros de investimentos, economia e
    dinheiro vindos de pessoas que estudaram a fundo esses livros.`,
  },
]

export const contentsSquareList: ContentSquareListItem[] = [
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
    title: 'An??lise de Indicadores',
  },
  {
    icon: investmentFunds,
    title: 'Fundos de investimento',
  },
  {
    icon: publicFinances,
    title: 'Financas P??blicas',
  },
  {
    icon: diversification,
    title: 'Diversifica????o',
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
    description: `Baixe e assista offline os seus conte??dos preferidos e continue de onde parou.`,
  },
  {
    icon: trialsIcon,
    title: `Trilhas de conhecimento`,
    description: `Elas te guiar??o para que voc?? n??o perca tempo e aproveite melhor o conhecimento dispon??vel para voc??.`,
  },
  {
    icon: materialsIcon,
    title: `Materiais complementares`,
    description: ` Tenha e-books e diversos materiais complementares exclusivos para que voc?? melhore ainda mais o seu n??vel de aprendizado.`,
  },
  {
    icon: playerIcon,
    title: `+500 aulas j?? dispon??veis`,
    description: `Mais de 500 aulas para assistir e continuar a sua jornada com novos conte??dos todos os meses.`,
  },
]

export const roadmapList: RoadmapList = {
  beginner: [
    {
      icon: learnFromScratch,
      title: 'Aprenda a investir do zero',
      description: `Tenha conte??dos introdut??rios para voc?? come??ar a investir do jeito certo.`,
    },
    {
      icon: fundamentalConcepts,
      title: 'Conceitos fundamentais',
      description: `Entenda os principais conceitos do mercado financeiro com uma
      curadoria de qualidade para que voc?? n??o aprenda conceitos
      errados.`,
    },
    {
      icon: glossariesAndSpecialMaterials,
      title: 'Gloss??rios e materiais especiais',
      description: `Tenha aux??lio de materiais complementares especiais para que
      voc?? consiga aprender de verdade como funciona o mercado.`,
    },
    {
      icon: clearYourDoubts,
      title: 'Tire suas d??vidas',
      description: `Tenha um suporte para tirar todas as suas d??vidas relacionadas ao conte??do
      da plataforma.`,
    },
  ],
  intermediary: [
    {
      icon: learnStockMarketAnalysis,
      title: 'Aprenda an??lise de bolsa',
      description: `Aprenda as diversas estrat??gias para voc?? escolher as melhores a????es e
      investimentos do mercado.`,
    },
    {
      icon: investBetter,
      title: 'Invista melhor',
      description: `Melhore a sua estrat??gia de investimento e consiga melhores retornos ao
      longo do tempo.`,
    },
    {
      icon: deepenYourKnowledge,
      title: 'Aprofunde seus conhecimentos',
      description: `Aprenda conceitos novos e t??cnicos sobre o mercado financeiro e melhore
      ainda mais a sua tomada de decis??o.`,
    },
    {
      icon: bestTeachers,
      title: 'Melhores professores',
      description: `Fa??a tudo isso tendo acesso aos melhores profissionais do mercado e a
      professores que realmente entendem e vivem do mercado financeiro.`,
    },
  ],
  advanced: [
    {
      icon: furtherDeepenYourKnowledge,
      title: 'Aprofunde seu conhecimento',
      description: `Aprenda conceitos novos e t??cnicos sobre o mercado financeiro e melhore
      ainda mais a sua tomada de decis??o.`,
    },
    {
      icon: getProfessionalInTheMarket,
      title: 'Profissionalize-se no mercado',
      description: `Adquira o conhecimento que os melhores profissionais do mercado financeiro
      t??m.`,
    },
    {
      icon: updateYourKnowledge,
      title: 'Atualize seus conhecimentos',
      description: `Atualize-se com os conceitos mais importantes do mercado e sempre fique por
      dentro das novas tend??ncias e estrat??gias do mercado.`,
    },
    {
      icon: monthlyContent,
      title: 'Conte??do Mensal',
      description: `Tenha sempre um conte??do novo para assistir e continue sempre se atualizando
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
      feedback: `A Finclass veio para revolucionar tudo o que j?? vimos no mercado financeiro. 
      A oportunidade de ter tanta gente incr??vel e de t??o alto n??vel na palma da minha m??o me 
      traz liberdade, muita bagagem enquanto eu estou aprendendo.
      <br />
      <br />
      Na Finclass est?? tudo organizado e ???mastigado??? para gente. Recomendo de olhos fechados, 
      ?? a coisa mais incr??vel que eu j?? vi na internet. ?? literalmente uma Netflix dos 
      investimentos - s?? que melhor!`,
    },
  },
  {
    user: {
      avatar: user2,
      name: 'Yasmin Rodrigues',
      role: 'Gestora de Processos S??o Paulo',
    },
    feedback: {
      title: 'Os maiores mentores de finan??as do mundo!',
      feedback: `A Finclass ?? muito completa, desde aulas, documentos e livros! Com os
      maiores mentores de finan??as do mundo! Jeito leve de aprender finan??as e realmente 
      mudar de vida, aumentando a nossa famosa bola de neve e sair da corrida dos ratos e
      fazer seu dinheiro trabalhar por n??s! Uma maneira de aprender um pouco todos os dias
      sem ser cansativo, dentro da minha rotina! A finclass ?? expecional!`,
    },
  },
  {
    user: {
      avatar: user3,
      name: 'Carlos Junqueira',
      role: 'Gestor de Processos S??o Paulo',
    },
    feedback: {
      title: 'Jeito leve de aprender finan??as',
      feedback: `A plataforma tem um conceito incr??vel: incluir diversos temas relacionados 
      a finan??as em um mesmo lugar (aulas, document??rios, livros, etc.).
      <br />
      <br />
      As autoridades sobre os temas, at?? o momento, est??o ??timas (Braga sobre vieses, 
      Giambiagi sofre finan??as p??blicas e Breno Perrucho sobre o in??cio dos investimentos). 
      A plataforma est?? f??cil de mexer, bem intuitiva e com um design muito bonito.`,
    },
  },
]

export const faq: Faq = {
  general: [
    {
      title: 'Quais finclasses s??o certas para mim?',
      content: `Na Finclass voc?? encontrar?? trilhas de aprendizagem e question??rios para 
      nivelar o seu conhecimento, e dessa forma oferecermos o melhor conte??do para voc??. 
      Cada trilha foi projetada para ser acess??vel a pessoas iniciantes no assunto e tamb??m 
      a alunos avan??ados. Com o lan??amento regular de novas aulas, voc?? ter?? sempre a 
      oportunidade de aprender algo novo.`,
    },
    {
      title: 'Como acesso minha conta?',
      content: `Acesse 
      <a href="https://app.finclass.com/login?pmp=FIN-VEX-HFIN-FINA-BFIN-20220316-ORG-X-PGT-ORG_HOME&_gl=1*99559r*_ga*MTI1MDkwNjg3Mi4xNjc1NjIzOTM4*_ga_X98EQCXG6X*MTY3NjAyNDYxOS4zMS4xLjE2NzYwMjY4NTQuMC4wLjA.&_ga=2.26470845.1607443885.1675768623-1250906872.1675623938"
      className="underline text-white">app.finclass.com</a> e preencha os dados de login que voc?? utilizou em seu cadastro.`,
    },
    {
      title: 'Por quanto tempo tenho acesso ao conte??do?',
      content: `O conte??do estar?? dispon??vel durante todo o per??odo que sua assinatura for vigente, durante 24 horas por dia de forma ilimitada.`,
    },
  ],
  application: [
    {
      title: 'Como eu fa??o para desconectar do App?',
      content: `1. Selecione o bot??o ???Menu??? na barra inferior. <br />
      2. V?? at?? o final da p??gina e clique no bot??o ???Sair???.`,
    },
    {
      title:
        'Onde no App eu encontro a lista de conte??dos que estou assistindo?',
      content: `1. Selecione o bot??o ???Menu??? na barra inferior. <br />
      2. Selecione ???Meu progresso???.`,
    },
    {
      title:
        'Eu acabei de baixar meu aplicativo e n??o consigo ver os conte??dos',
      content: `Por favor verifique se voc?? est?? logado na sua conta Finclass. 
      Caso voc?? esteja devidamente logado e n??o estiver conseguindo ver o conte??do,
      por favor entre em contato conosco atrav??s do e-mail 
      <a href="mailto:suporte@finclass.com" className="underline text-white">suporte@finclass.com</a> 
      ou Whatsapp: <a 
      href="https://web.whatsapp.com/send?phone=5511913547018&text=Iniciar Atendimento" 
      target="_blank"
      className="underline text-white"
      >(11) 91354-7018</a>.`,
    },
    {
      title: 'Qual vers??o do Android eu preciso para usar o App?',
      content: `O App ?? atualmente otimizado para a vers??o Android 5.0 ou superior.`,
    },
    {
      title: 'Qual vers??o do IOS eu preciso para usar o App?',
      content: `O App ?? atualmente otimizado para a vers??o IOS12 ou superior.`,
    },
    {
      title: 'Posso utilizar o app no meu iPad?',
      content: `Neste primeiro momento, ainda n??o temos uma vers??o para iPad.`,
    },
  ],
  subscriptions: [
    {
      title: 'Qual o prazo de garantia da Finclass?',
      content: `Na Finclass temos compromisso com nossos assinantes, dessa forma, 
      oferecemos 7 dias de garantia, ?? partir da data de pagamento da assinatura, 
      para a desist??ncia e devolu????o integral do valor pago pelo assinante.`,
    },
    {
      title: 'Como funciona a renova????o da assinatura?',
      content: `A renova????o da sua assinatura ?? autom??tica e ocorre sempre ap??s 
      12 meses da confirma????o do primeiro pagamento. Pr??ximo do pr??ximo ciclo, 
      voc?? receber?? um lembrete informando sobre a renova????o direto no seu e-mail. 
      Importante: No primeiro m??s de renova????o da assinatura, caso voc?? opte pelo 
      pagamento parcelado, o valor total da anuidade ir?? comprometer o limite do 
      seu cart??o, mas apenas o valor da parcela dever?? ser pago. O prazo de 
      reembolso/estorno pode variar de acordo com a operadora do seu cart??o.`,
    },
    {
      title: 'Como funciona a garantia de 7 dias e reembolso?',
      content: `Segundo o artigo 49?? do C??digo de Defesa do Consumidor, o consumidor 
      poder?? desistir de sua compra no per??odo de at?? 07 dias corridos e ter os valores 
      pagos reembolsados. Logo, caso mude de ideia dentro do prazo de 7 dias da contrata????o, 
      voc?? pode solicitar o cancelamento com direito ao reembolso da mensalidade que foi cobrada.`,
    },
    {
      title:
        'Quanto de limite preciso ter no meu cart??o para realizar a assinatura?',
      content: `Voc?? precisa ter de limite em seu cart??o o valor total da anuidade e no primeiro
      m??s o valor total da anuidade ser?? comprometido. Mas fique tranquilo voc?? s?? ser?? cobrado 
      o valor da parcela. Por isso, n??o se assuste caso receba um SMS a notifica????o de sua operadora, 
      informado uma compra com o valor total, esse ?? apenas o valor comprometido em sua fatura.`,
    },
    {
      title: 'Como posso pagar minha assinatura?',
      content: `Sua assinatura pode ser paga via cart??o de cr??dito exclusivamente. <br />
      N??o ?? poss??vel realizar pagamentos via boleto ou com cart??o de d??bito.`,
    },
    {
      title: 'Posso pagar com um cart??o internacional?',
      content: `Sim, a plataforma permite que voc?? realize o pagamento de sua assinatura 
      em at?? 12x sem juros. Mas fique atento porque, a maioria dos cart??es internacionais n??o 
      permitem parcelamento. Nesse caso, para concretizar sua assinatura, ?? necess??rio que a 
      forma de pagamento selecionada seja ?? vista (1 parcela).`,
    },
    {
      title: 'Como fa??o para cancelar minha assinatura?',
      content: `Se n??o quiser continuar, voc?? pode cancelar a renova????o da sua associa????o por 
      meio da p??gina da sua conta. Siga as instru????es para cancelar e sua assinatura n??o ser?? 
      renovada. N??o h?? reembolso para per??odos de assinatura parcialmente n??o utilizados.`,
    },
  ],
}
