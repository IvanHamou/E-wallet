import "./Card.scss"

export default function Card(props) {

    return (
      <section className="Card" style={{ backgroundColor: props.color }}>
        <article className="CardTop">
            <div>
                <img src="/src/assets/chip-dark.svg" alt="chipIcon" />
            </div>
            <div>
                <img src="/src/assets/vendor-bitcoin.svg" alt="vendorIcon" />
            </div>
        </article>
        <article className="CardInfo">
            <h4 className="CardNumber">
                {props.cardNumber}
            </h4>
            <div className="CardInfoRest">
                <div className="CardHolder">
                    <p>CARDHOLDER NAME</p>
                    <h5>{props.cardHolder}</h5>
                </div>
                <div className="CardValidity">
                    <p>VALID THRU</p>
                    <h5>{props.cardValidity}</h5>
                </div>
            </div>
        </article>
      </section>
    )
  }
  
  