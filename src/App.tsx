import { Contents } from './components/Contents'
import { Finseries } from './components/Finseries'
import { Hero } from './components/Hero'
import { Mentors } from './components/Mentors'
import { AppMobile } from './components/AppMobile'
import { Roadmap } from './components/Roadmap'

interface Props {}

export const App = (props: Props) => {
  return (
    <main className="max-h-screen overflow-y-scroll">
      <Hero />
      <Mentors />
      <Contents />
      <Finseries />
      <AppMobile />
      <Roadmap />
    </main>
  )
}
