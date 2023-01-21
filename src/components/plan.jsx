import free from "../assets/icon-free.svg";
import paid from "../assets/icon-paid.svg";
import checkCyan from "../assets/icon-check-cyan.svg";
import check from "../assets/icon-check.svg";

function Plan() {
  return (
    <section className="plan">
      <h2 className="plan_title">Our pricing plans</h2>
      <p className="plan_info">
        We only make money when our creators make money. Our plans are always
        affordable, and it’s completely free to get started.
      </p>

      <div className="plan_card_section">
        <div className="plan_card free">
          <img src={free} alt="" aria-hidden="true" className="logo"/>
          <span className="plan_card_title">Dip your toe</span>
          <p className="plan_card_content_free">
            Just getting started? No problem at all! Our free plan will take you
            a long way.
          </p>
          <h3 className="plan_card_m_title_free">Free</h3>
          <ul className="plan_card_features">
            <li>
              <img src={checkCyan} alt="" aria-hidden="true" />
              <p>Unlimited products</p>
            </li>
            <li>
              <img src={checkCyan} alt="" aria-hidden="true" />
              <p>Basic analytics</p>
            </li>
            <li>
              <img src={checkCyan} alt="" aria-hidden="true" />
              <p>Limited marketplace exposure</p>
            </li>
            <li>
              <img src={checkCyan} alt="" aria-hidden="true" />
              <p>10% fee per transaction</p>
            </li>
          </ul>
        </div>

        <div className="plan_card paid">
          <img src={paid} alt="" aria-hidden="true" className="logo"/>
          <span className="plan_card_title">Dive right in</span>
          <p className="plan_card_content_paid">
            Ready for the big time? Our paid plan will help you take your
            business to the next level.
          </p>
          <div className="plan_card_price">
            <h3>$25.00</h3>
            <span>/ month</span>
          </div>

          <ul className="plan_card_features">
            <li>
              <img src={check} alt="" aria-hidden="true" />
              <p>Custom domain</p>
            </li>
            <li>
              <img src={check} alt="" aria-hidden="true" />
              <p>Advanced analytics and reports</p>
            </li>
            <li>
              <img src={check} alt="" aria-hidden="true" />
              <p>High marketplace visibility</p>
            </li>
            <li>
              <img src={check} alt="" aria-hidden="true" />
              <p>High marketplace visibility</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Plan;
