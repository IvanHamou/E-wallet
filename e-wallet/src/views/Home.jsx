import Card from '../components/Card'
import CardStack from '../components/CardStack'
import Top from '../components/Top'
import './Home.scss'

export default function Home() {

  return (
    <section className='Home'>
        <Top />
        <main>
            <p className='HomeActive'>ACTIVE CARD</p>
            <div className='mainContent'>
                <Card />
                <CardStack />
            </div>
        </main>
        <button>ADD A NEW CARD</button>
    </section>
  )
}

