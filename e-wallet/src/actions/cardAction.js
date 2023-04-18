export const addCard = (newCard) => {
    return {
        type: 'ADD_NEW_CARD',
        payload: {
            cardChip: newCard.cardChip,
            cardVendor: newCard.cardVendor,
            cardNumber: newCard.cardNumber,
            cardHolder: newCard.cardHolder,
            cardValidity: newCard.cardValidity,
            color: newCard.color,
            textColor: newCard.textColor
        }
    }
};

export const updateCard = (newCard) => {
    return {
        type: 'UPDATE_CARD',
        payload: {
            cardChip: newCard.cardChip,
            cardVendor: newCard.cardVendor,
            cardNumber: newCard.cardNumber,
            cardHolder: newCard.cardHolder,
            cardValidity: newCard.cardValidity,
            color: newCard.color,
            textColor: newCard.textColor
        }
    }
};


