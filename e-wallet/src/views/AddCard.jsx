import Card from '../components/Card'
import CardForm from '../components/CardForm'
import Top from '../components/Top'
import './AddCard.scss'

export default function AddCard() {

  return (
    <section className='addCard'>
        <Top />
        <main>            
            <p className='addCardNew'>NEW CARD</p>
            <div className='mainContent'>
                <Card />
                <CardForm />
            </div>
        </main>
        <button>ADD CARD</button>
    </section>
  )
}

