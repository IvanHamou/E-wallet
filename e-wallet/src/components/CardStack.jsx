import { useState } from 'react';
import Card from './Card'
import './CardStack.scss'
import { useSelector } from 'react-redux';

export default function CardStack() {

    const cards = useSelector((state) => state.cards);

    //const cardChip = useSelector((state) => state.cardChip);
    //const cardVendor = useSelector((state) => state.cardVendor);
    //const cardNumber = useSelector((state) => state.cardNumber);
    //const cardHolder = useSelector((state) => state.cardHolder);
    //const cardValidity = useSelector((state) => state.cardValidity);
    //const color = useSelector((state) => state.color);
    //const textColor = useSelector((state) => state.textColor);
    //const orders = useSelector((state) => state.order);


  return (
    <section className='cardStack'>
        {cards.map((card) => (
        <article className='cardStackCard'> 
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

