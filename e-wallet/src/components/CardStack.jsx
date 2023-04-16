import { useState } from 'react';
import Card from './Card'
import './CardStack.scss'
import { useSelector } from 'react-redux';

export default function CardStack(props) {

    const cards = useSelector((state) => state.cards);


  return (
    <section className='cardStack' >
        {cards.map((card, index) => (
        <article className='cardStackCard' key={index} onClick={() => props.setActiveCard(card)}> 
            <Card             
                cardChip={card.cardChip}
                cardVendor={card.cardVendor}
                cardNumber={card.cardNumber}
                cardHolder={card.cardHolder}
                cardValidity={card.cardValidity}
                color={card.color}
                textColor={card.textColor}
            />
        </article>
        ))}
    </section>
  )
}

