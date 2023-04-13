import Card from '../components/Card'
import CardStack from '../components/CardStack'
import Top from '../components/Top'
import './Home.scss'
import { useNavigate } from "react-router-dom"

export default function Home() {

    const navigate = useNavigate()
    function handleClick() {
        navigate('/addcard')
    }


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
        <button onClick={ handleClick }>ADD A NEW CARD</button>
    </section>
  )
}

