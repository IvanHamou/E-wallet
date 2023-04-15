import {  useState } from 'react'
import Card from '../components/Card'
import CardForm from '../components/CardForm'
import Top from '../components/Top'
import './AddCard.scss'
import { updateCardNumber } from "../actions/cardAction";
import { updateCardChip } from "../actions/cardAction";
import { updateCardValidity } from "../actions/cardAction";
import { updateCardVendor } from "../actions/cardAction";
import { updateColor } from "../actions/cardAction";
import { updateTextColor } from "../actions/cardAction";
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
        dispatch(updateColor(color))
        dispatch(updateTextColor(textColor))
        dispatch(updateCardChip(cardChip))
        dispatch(updateCardVendor(cardVendor))
        dispatch(updateCardNumber(cardNumber))
        dispatch(updateCardValidity(cardValidity))
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

