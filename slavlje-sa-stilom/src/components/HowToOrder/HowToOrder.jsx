import './HowToOrder.css';

const STEPS = [
  {
    number: 1,
    title: 'Napunite korpu',
    description: 'Izaberite artikle i količine. Možete da promenite sve dok ne pošaljete spisak.',
  },
  {
    number: 2,
    title: 'Pošaljite spisak',
    description:
      'Upišite ime, telefon, adresu i datum. Klikom se otvara vaš mejl program sa već popunjenom porudžbinom.',
  },
  {
    number: 3,
    title: 'Potvrđujemo',
    description:
      'Javljamo se u roku od dva sata radnim danima, sa konačnom cenom, dostupnošću i terminom dostave.',
  },
];

function HowToOrder() {
  return (
    <section className="section how-to-order" id="how-to-order">
      <div className="wrap">
        <div className="section-intro">
          <h2>Kako poručiti</h2>
          <p>Nema plaćanja na sajtu. Korpa je spisak želja koji nam šaljete, a mi ga potvrđujemo.</p>
        </div>
        <div className="steps-grid">
          {STEPS.map((step) => (
            <div className="step" key={step.number}>
              <b>{step.number}</b>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowToOrder;
