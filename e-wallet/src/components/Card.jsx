import "./Card.scss"

export default function Card() {

    return (
      <section className="Card">
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
                1234 5678 9101 1123
            </h4>
            <div className="CardInfoRest">
                <div className="CardHolder">
                    <p>CARDHOLDER NAME</p>
                    <h5>CHRISTOFFER WALLENBERG</h5>
                </div>
                <div className="CardValidity">
                    <p>VALID THRU</p>
                    <h5>12/22</h5>
                </div>
            </div>
        </article>
      </section>
    )
  }
  
  