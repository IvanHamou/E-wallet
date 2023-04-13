import Card from '../components/Card'
import CardForm from '../components/CardForm'
import Top from '../components/Top'
import './AddCard.scss'

export default function AddCard() {

  return (
    <section className='addCard'>
        <Top title= "ADD A NEW BANK CARD"/>
        <main>            
            <p className='addCardNew'>NEW CARD</p>
            <div className='mainContent'>
                <Card cardNumber="XXXX XXXX XXXX XXXX" cardHolder="FIRSTNAME LASTNAME" cardValidity="MM/YY" color="#D0D0D0"/>
                <CardForm />
            </div>
        </main>
        <button>ADD CARD</button>
    </section>
  )
}

