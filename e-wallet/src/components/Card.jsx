import "./Card.scss"

export default function Card(props) {

    return (
      <section className="Card" style={{ backgroundColor: props.color, color: props.textColor  }}>
        <article className="CardTop">
            <div>
                <img src={props.cardChip} alt="chipIcon" />
            </div>
            <div>
                <img src={props.cardVendor} alt="vendorIcon" />
            </div>
        </article>
        <article className="CardInfo">
            <h4 className="CardNumber">
                {props.cardNumber}
            </h4>
            <div className="CardInfoRest">
                <div className="CardHolder">
                    <p style={{ color: props.textColor }}>CARDHOLDER NAME</p>
                    <h5>{props.cardHolder}</h5>
                </div>
                <div className="CardValidity">
                    <p style={{ color: props.textColor }} >VALID THRU</p>
                    <h5>{props.cardValidity}</h5>
                </div>
            </div>
        </article>
      </section>
    )
  }
  
  