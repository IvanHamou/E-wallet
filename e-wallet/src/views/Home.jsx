import Card from '../components/Card'
import CardStack from '../components/CardStack'
import Top from '../components/Top'
import './Home.scss'
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';


export default function Home() {

    const cards = useSelector((state) => state.cards);

    const cardChip = useSelector((state) => state.cardChip);
    const cardVendor = useSelector((state) => state.cardVendor);
    const cardNumber = useSelector((state) => state.cardNumber);
    const cardHolder = useSelector((state) => state.cardHolder);
    const cardValidity = useSelector((state) => state.cardValidity);
    const color = useSelector((state) => state.color);
    const textColor = useSelector((state) => state.textColor);


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
                    cardChip={cardChip}
                    cardVendor={cardVendor}
                    cardNumber={cardNumber}
                    cardHolder={cardHolder}
                    cardValidity={cardValidity}
                    color={color}
                    textColor={textColor}
                />
                <CardStack />
            </div>
        </main>
        <button onClick={ handleClick }>ADD A NEW CARD</button>
    </section>
  )
}

