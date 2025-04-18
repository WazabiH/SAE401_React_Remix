import Hero from './Hero';
import './Adherer.css';
import adhererImg from '../../public/images/img-adherer.png';
import heroImage from '../../public/images/drapeau_italie.jpg';

const Adherer = () => {
  const title = "Adhérer à notre association";
  const description = "Bienvenue sur notre page d'adhésion. Découvrez les avantages de devenir membre de notre association.";
  const buttonText = "Commencer";

  const handleScrollToContent = () => {
    const section = document.getElementById('adherer-content');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="adherer-container">
      <Hero
        title={title}
        description={description}
        buttonText={buttonText}
        heroImage={heroImage}
        scrollTo={handleScrollToContent}
      />

      <div id="adherer-content" className="adherer-content1">
        <img src={adhererImg} alt="Adherer" className="adherer-image" />
        <div className="txt-content">
          <h2 className="h2">Pourquoi adhérer ?</h2>
          <h3 className="h3">Adhérer à l'A.P.I.R.P. vous permet de :</h3>
          <ol className="custom-ol ol">
            <li>Participer activement aux assemblées générales.</li>
            <li>Recevoir chaque année le bulletin imprimé et des plaquettes gratuites.</li>
            <li>
              Soutenir des initiatives :
              <ul className="ul">
                <li>- Réalisation de ce site</li>
                <li>- Création de plaquettes</li>
                <li>- Participation à des événements</li>
              </ul>
            </li>
            <li>Connaître le réseau des professeurs d’italien.</li>
            <li>Être représenté par une association reconnue.</li>
            <li>Profiter de l'union qui fait la force.</li>
          </ol>
        </div>
      </div>

      <div className="adherer-content2">
        <h2 className="h2">Qui peut adhérer ?</h2>
        <p className="p">Tous les professeurs d’italien de la région parisienne.</p>

        <h3>Comment adhérer ?</h3>
        <p className="p">
          Remplir une fiche d’inscription <strong>ET</strong> verser la cotisation annuelle.
        </p>

                <a
        href="/assets/fiche_adhesion.pdf"
        className="button"
        target="_blank"
        rel="noopener noreferrer"
        >
        Télécharger la fiche d'adhésion
        </a>

      </div>

      {/* === Formulaire === */}
      <section className="adherer-form-section">
        <h2>Formulaire d'adhésion</h2>
        <form className="adherer-form" onSubmit={(e) => e.preventDefault()}>
          <label>
            Nom :
            <input type="text" name="nom" required />
          </label>

          <label>
            Prénom :
            <input type="text" name="prenom" required />
          </label>

          <label>
            Email :
            <input type="email" name="email" required />
          </label>

          <label>
            Établissement :
            <input type="text" name="etablissement" />
          </label>

          <fieldset>
            <legend>Statut</legend>
            <label><input type="radio" name="statut" value="Titulaire" required /> Titulaire</label>
            <label><input type="radio" name="statut" value="Contractuel" /> Contractuel</label>
            <label><input type="radio" name="statut" value="Retraité" /> Retraité</label>
          </fieldset>

          <fieldset>
            <legend>Type d'adhésion</legend>
            <label><input type="radio" name="cotisation" value="Adhésion simple" required /> Adhésion simple (10€)</label>
            <label><input type="radio" name="cotisation" value="Adhésion + don" /> Adhésion + don (montant libre)</label>
          </fieldset>

          <button type="submit">Envoyer</button>
        </form>
      </section>

      {/* === Paiement === */}
      <section className="paypal-button-section">
        <h3>Paiement de la cotisation</h3>
        <p>Utilisez PayPal pour régler votre adhésion :</p>
        <form action="https://www.paypal.com/donate" method="post" target="_blank">
          <input type="hidden" name="business" value="TON-EMAIL@paypal.com" />
          <input type="hidden" name="currency_code" value="EUR" />
          <input type="submit" value="Payer avec PayPal" className="paypal-button" />
        </form>
      </section>
    </div>
  );
};

export default Adherer;
