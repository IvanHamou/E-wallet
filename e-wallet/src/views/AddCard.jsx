import {  useState } from 'react'
import Card from '../components/Card'
import CardForm from '../components/CardForm'
import Top from '../components/Top'
import './AddCard.scss'
import { addCard } from "../actions/cardAction";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'


export default function AddCard(props) {

    const[cardChip,setCardChip] = useState("/src/assets/chip-dark.svg")
    const[cardVendor,setCardVendor] = useState("/src/assets/vendor-bitcoin.svg")
    const[cardNumber, setCardNumber] = useState("XXXX XXXX XXXX XXXX")
    const[cardHolder, setCardHolder] = useState("FIRSTNAME LASTNAME")
    const[cardValidity, setCardValidity] = useState("MM/YY")
    const[color, setColor] = useState("#D0D0D0")
    const[textColor, setTextColor] = useState("black")

    const dispatch = useDispatch();
    const navigate = useNavigate()

    function func(event) {
        event.preventDefault()
        navigate('/')

        const newCard = {
            cardChip: cardChip,
            cardVendor: cardVendor,
            cardHolder: cardHolder,
            cardNumber: cardNumber,
            cardValidity: cardValidity,
            color: color,
            textColor: textColor
        }

        dispatch(addCard(newCard))
    }



  return (
    <section className='addCard'>
        <Top title= "ADD A NEW BANK CARD"/>
        <main>            
            <p className='addCardNew'>NEW CARD</p>
            <div className='mainContent'>
                <Card cardChip={ cardChip } cardVendor={cardVendor} cardNumber={cardNumber} cardHolder={cardHolder} cardValidity={cardValidity} color={color} textColor={textColor}/>
                <CardForm onClick={func} updateCardChip= { setCardChip } updateCardVendor={ setCardVendor } updateCardNumber={ setCardNumber } updateCardHolder={ setCardHolder } updateCardValidity={ setCardValidity } updateColor={ setColor } updateTextColor={ setTextColor }/>
            </div>
        </main>
    </section>
  )
}

