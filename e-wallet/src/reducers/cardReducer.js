const initialState = {
    cardChip: "/src/assets/chip-dark.svg",
    cardVendor: "/src/assets/vendor-bitcoin.svg",
    cardNumber: "XXXX XXXX XXXX XXXX",
    cardHolder: "FIRSTNAME LASTNAME",
    cardValidity: "MM/YY",
    color: "#D0D0D0",
    textColor: "black"
  };
  
  const cardReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_CARD_CHIP':
        return { ...state, cardChip: action.payload };
      case 'UPDATE_CARD_VENDOR':
        return { ...state, cardVendor: action.payload };
      case 'UPDATE_CARD_NUMBER':
        return { ...state, cardNumber: action.payload };
      case 'UPDATE_CARD_HOLDER':
        return { ...state, cardHolder: action.payload };
      case 'UPDATE_CARD_VALIDITY':
        return { ...state, cardValidity: action.payload };
      case 'UPDATE_COLOR':
        return { ...state, color: action.payload };
      case 'UPDATE_TEXT_COLOR':
        return { ...state, textColor: action.payload };
      default:
        return state;
    }
  };
  
  export default cardReducer;
  