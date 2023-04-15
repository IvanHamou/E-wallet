import { useState } from "react"
import Card from '../components/Card'
import "./CardForm.scss"

export default function CardForm(props) {


    const[cardNumber, setCardNumber] = useState(props.cardNumber || "")
    const[cardHolder, setCardHolder] = useState(props.cardHolder)
    const[cardValidity, setcardValidity] = useState(props.cardValidity || "")

    function handleCardNumberInp(e) {
        let inputValue = e.target.value
        inputValue = inputValue.replace(/\D/g, '');
        inputValue = inputValue.match(/.{1,4}/g)?.join(' ');
        props.updateCardNumber(inputValue)
        setCardNumber(inputValue || '');
    }

    function handleCardHolderInp(e) {
        props.updateCardHolder(e.target.value.toUpperCase())
    }

    function handleCardValidityInp(e) {
        const inputValue = e.target.value.replace(/[^0-9/]/g, '');
        const formattedValue = inputValue.replace(/(\d{2})(\d{0,2})/, '$1/$2');
        props.updateCardValidity(formattedValue);
        setcardValidity(inputValue || '');
    }



    function handleChange(e) {
        if (e.target.value === "bitcoin") {
            props.updateColor("#FFAE34")
            props.updateTextColor("black")
            props.updateCardVendor("/src/assets/vendor-bitcoin.svg")
            props.updateCardChip("/src/assets/chip-dark.svg")
          }
        else if (e.target.value === "ninjabank") {
            props.updateColor("#222222")
            props.updateTextColor("white")
            props.updateCardVendor("/src/assets/vendor-ninja.svg")
            props.updateCardChip("/src/assets/chip-light.svg")
          }
        else if (e.target.value === "blockchain") {
            props.updateColor("#8B58F9")
            props.updateTextColor("white")
            props.updateCardVendor("/src/assets/vendor-blockchain.svg")
            props.updateCardChip("/src/assets/chip-light.svg")
          }
        else if (e.target.value === "evilcorp") {
            props.updateColor("#F33355")
            props.updateTextColor("white")
            props.updateCardVendor("/src/assets/vendor-evil.svg")
            props.updateCardChip("/src/assets/chip-light.svg")
          }
    }



    return (
      <section className="cardForm">
        <form>
            <label htmlFor="cardFormNumber">CARD NUMBER</label>
            <input type="text" value={ cardNumber } onChange={ handleCardNumberInp } maxLength="19"/>
            <label htmlFor="cardFormHolder">CARDHOLDER NAME</label>
            <input type="text" value={ cardHolder } onChange={ handleCardHolderInp } maxLength="23"/>
            <div className="cardFormDouble">
                <div>
                    <label htmlFor="cardFormValidity">VALID THRU</label>
                    <input type="text" value={ cardValidity } onChange={ handleCardValidityInp } maxLength="4"/>
                </div>
                <div>
                    <label htmlFor="cardFormCCV">CCV</label>
                    <input type="text" />
                </div>
            </div>
            <label htmlFor="cardFormVendor">VENDOR</label>
            <select className="cardFormDropdown" onChange={handleChange}>
                <option value="bitcoin">BITCOIN INC</option>
                <option value="ninjabank">NINJA BANK</option>
                <option value="blockchain">BLOCK CHAIN INC</option>
                <option value="evilcorp">EVIL CORP</option>
            </select>
            <button type="submit" onClick={props.onClick}>ADD CARD</button>
        </form>
      </section>
    )
  }
  
  