import { useAnimatedDetails } from '../../hooks/useAnimatedDetails';
import './Faq.css';

const FAQ_ITEMS = [
  {
    question: 'Da li se plaća preko sajta?',
    answer:
      'Ne. Korpa služi da nam pošaljete spisak. Plaća se gotovinom pri preuzimanju, karticom u radnji ili uplatom na račun za firme.',
  },
  {
    question: 'Koliko dugo traju helijumski baloni?',
    answer:
      'Latex baloni tretirani zaštitom drže od 12 do 24 sata, folija baloni od tri do sedam dana. Za celodnevne proslave preporučujemo dostavu ujutru na dan događaja.',
  },
  {
    question: 'Da li izlazite van Beograda?',
    answer:
      'Da, do 60 kilometara. Prevoz se naplaćuje 60 dinara po kilometru u oba smera i unosi se u potvrdu porudžbine.',
  },
  {
    question: 'Mogu li da promenim boje na dekoraciji?',
    answer:
      'Boje balona, štampu i rekvizite menjamo bez doplate. Napišite željene boje u polje za napomenu pri slanju korpe.',
  },
  {
    question: 'Šta ako otkažem proslavu?',
    answer:
      'Besplatno otkazivanje do 72 sata pre termina. Posle toga se zadržava akontacija od 30 odsto, jer je materijal već naručen.',
  },
];

function FaqItem({ item }) {
  const { detailsRef, isOpen, handleClick } = useAnimatedDetails();
  return (
    <details className={`faq-item${isOpen ? ' is-open' : ''}`} ref={detailsRef}>
      <summary onClick={handleClick}>{item.question}</summary>
      <div className="faq-item-content">
        <p>{item.answer}</p>
      </div>
    </details>
  );
}

function Faq() {
  return (
    <section className="section faq" id="faq">
      <div className="wrap faq-wrap">
        <div className="section-intro faq-intro">
          <h2>Česta pitanja</h2>
        </div>
        {FAQ_ITEMS.map((item) => (
          <FaqItem key={item.question} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Faq;
