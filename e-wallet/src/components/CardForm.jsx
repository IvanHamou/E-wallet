import "./CardForm.scss"

export default function CardForm() {

    return (
      <section className="cardForm">
        <form>
            <label htmlFor="cardFormNumber">CARD NUMBER</label>
            <input type="text" />
            <label htmlFor="cardFormHolder">CARDHOLDER NAME</label>
            <input type="text" />
            <div className="cardFormDouble">
                <div>
                    <label htmlFor="cardFormValidity">VALID THRU</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="cardFormCCV">CCV</label>
                    <input type="text" />
                </div>
            </div>
            <label htmlFor="cardFormVendor">VENDOR</label>
            <select className="cardFormDropdown">
                <option value="bitcoin">BITCOIN INC</option>
                <option value="ninjabank">NINJA BANK</option>
                <option value="blockchain">BLOCK CHAIN INC</option>
                <option value="evilcorp">EVIL CORP</option>
            </select>
        </form>
      </section>
    )
  }
  
  