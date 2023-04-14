import { useState } from 'react'
import Card from '../components/Card'
import CardForm from '../components/CardForm'
import Top from '../components/Top'
import './AddCard.scss'

export default function AddCard(props) {

    const[cardChip,setCardChip] = useState("/src/assets/chip-dark.svg")
    const[cardVendor,setCardVendor] = useState("/src/assets/vendor-bitcoin.svg")
    const[cardNumber, setCardNumber] = useState("XXXX XXXX XXXX XXXX")
    const[cardHolder, setCardHolder] = useState("FIRSTNAME LASTNAME")
    const[cardValidity, setCardValidity] = useState("MM/YY")
    const[color, setColor] = useState("#D0D0D0")
    const[textColor, setTextColor] = useState("black")


  return (
    <section className='addCard'>
        <Top title= "ADD A NEW BANK CARD"/>
        <main>            
            <p className='addCardNew'>NEW CARD</p>
            <div className='mainContent'>
                <Card cardChip={ cardChip } cardVendor={cardVendor} cardNumber={cardNumber} cardHolder={cardHolder} cardValidity={cardValidity} color={color} textColor={textColor}/>
                <CardForm updateCardChip= { setCardChip } updateCardVendor={ setCardVendor } updateCardNumber={ setCardNumber } updateCardHolder={ setCardHolder } updateCardValidity={ setCardValidity } updateColor={ setColor } updateTextColor={ setTextColor }/>
            </div>
        </main>
    </section>
  )
}

