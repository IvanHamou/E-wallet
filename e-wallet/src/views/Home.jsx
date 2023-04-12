import Card from '../components/Card'
import CardStack from '../components/CardStack'
import Top from '../components/Top'
import './Home.scss'

export default function Home() {

  return (
    <section>
        <Top />
        <main>
            <p>ACTIVE CARD</p>
            <div className='mainContent'>
                <Card />
                <CardStack />
            </div>
        </main>
    </section>
  )
}

