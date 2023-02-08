import { Contents } from './components/Contents'
import { Finseries } from './components/Finseries'
import { Hero } from './components/Hero'
import { Mentors } from './components/Mentors'

interface Props {}

export const App = (props: Props) => {
  return (
    <main className="max-h-screen overflow-y-scroll">
      <Hero />
      <Mentors />
      <Contents />
      <Finseries />
    </main>
  )
}
