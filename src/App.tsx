import { Contents } from './components/Contents'
import { Finseries } from './components/Finseries'
import { Hero } from './components/Hero'
import { Mentors } from './components/Mentors'
import { AppMobile } from './components/AppMobile'
import { MinWidth768Roadmap } from './components/MinWidth768Roadmap'
import { MaxWidth768Roadmap } from './components/MaxWidth768Roadmap'
import { Feedbacks } from './components/Feedbacks'

interface Props {}

export const App = (props: Props) => {
  return (
    <main className="max-h-screen overflow-y-scroll">
      <Hero />
      <Mentors />
      <Contents />
      <Finseries />
      <AppMobile />
      <MinWidth768Roadmap />
      <MaxWidth768Roadmap />
      <Feedbacks />
    </main>
  )
}
