const initialState = {
    cardChip: "/src/assets/chip-dark.svg",
    cardVendor: "/src/assets/vendor-bitcoin.svg",
    cardNumber: "XXXX XXXX XXXX XXXX",
    cardHolder: "FIRSTNAME LASTNAME",
    cardValidity: "MM/YY",
    color: "#D0D0D0",
    textColor: "black",

    cards: [
      {
        cardChip: "/src/assets/chip-dark.svg",
        cardVendor: "/src/assets/vendor-bitcoin.svg",
        cardNumber: "XXXX XXXX XXXX XXXX",
        cardHolder: "FIRSTNAME LASTNAME",
        cardValidity: "MM/YY",
        color: "#D0D0D0",
        textColor: "black",
      },

    ],
  };

  const cardReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_NEW_CARD':
            return {
                ...state,
                cards: [...state.cards, action.payload],
                cardChip: action.payload.cardChip,
                cardVendor: action.payload.cardVendor,
                cardNumber: action.payload.cardNumber,
                cardHolder: action.payload.cardHolder,
                cardValidity: action.payload.cardValidity,
                color: action.payload.color,
                textColor: action.payload.textColor
            };

        default:
            return state;
    }
};
  
  export default cardReducer;
  