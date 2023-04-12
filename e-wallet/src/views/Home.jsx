import Card from '../components/Card'
import Top from '../components/Top'
import './Home.scss'

export default function Home() {

  return (
    <section>
        <Top />
        <main>
            <p>ACTIVE CARD</p>
            <Card />
        </main>
    </section>
  )
}

