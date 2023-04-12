import Card from './Card'
import './CardStack.scss'

export default function CardStack() {

  return (
    <section className='cardStack'>
        <article className='cardStackCard'><Card /></article>
        <article className='cardStackCard'><Card /></article>
        <article className='cardStackCard'><Card /></article>
    </section>
  )
}

