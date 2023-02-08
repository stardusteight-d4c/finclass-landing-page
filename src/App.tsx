import { Hero } from './components/Hero'
import { Mentors } from './components/Mentors'

interface Props {}

export const App = (props: Props) => {
  return (
    <main className="h-fit z-0">
      <Hero />
      <Mentors />
    </main>
  )
}
