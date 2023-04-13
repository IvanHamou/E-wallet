import "./CardForm.scss"

export default function CardForm() {

    return (
      <section className="cardForm">
        <form>
            <label htmlFor="cardFormNumber">CARD NUMBER</label>
            <input type="text" />
            <label htmlFor="cardFormHolder">CARDHOLDER NAME</label>
            <input type="text" />
            <div>
                <label htmlFor="cardFormValidity">VALID THRU</label>
                <input type="text" />
                <label htmlFor="cardFormCCV">CCV</label>
                <input type="text" />
            </div>
            <div className="cardFormDropdown">
                <img src="\src\assets\vendor-bitcoin.svg" alt="bitcoinIcon" />
                <img src="\src\assets\vendor-blockchain.svg" alt="blockchainIcon" />
                <img src="\src\assets\vendor-evil.svg" alt="evilIcon" />
                <img src="\src\assets\vendor-ninja.svg" alt="ninjaIcon" />
            </div>
        </form>
      </section>
    )
  }
  
  