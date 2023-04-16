import Card from '../components/Card'
import CardStack from '../components/CardStack'
import Top from '../components/Top'
import './Home.scss'
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';
import { useState } from 'react'


export default function Home() {

    const cards = useSelector((state) => state.cards);

    const [activeCard, setActiveCard] = useState(cards[0]);

    const navigate = useNavigate()
    function handleClick() {
        navigate('/addcard')
    }


  return (
    <section className='Home'>
        <Top title= "E-WALLET"/>
        <main>
            <p className='HomeActive'>ACTIVE CARD</p>
            <div className='mainContent'>
                <Card             
                    cardChip={activeCard.cardChip}
                    cardVendor={activeCard.cardVendor}
                    cardNumber={activeCard.cardNumber}
                    cardHolder={activeCard.cardHolder}
                    cardValidity={activeCard.cardValidity}
                    color={activeCard.color}
                    textColor={activeCard.textColor}
                />
                <CardStack setActiveCard={setActiveCard}/>
            </div>
        </main>
        <button onClick={ handleClick }>ADD A NEW CARD</button>
    </section>
  )
}

