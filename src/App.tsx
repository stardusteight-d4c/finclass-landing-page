import React from 'react'
import { Hero } from './components/Hero'

interface Props {}

export const App = (props: Props) => {
  return (
    <main className='h-fit z-0'>
      <Hero />
    </main>
  )
}
