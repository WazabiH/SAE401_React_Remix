import './Accueil.css';
import TabImg from './TabImg';
import Actualite from './Actualite'; // Importer le composant Actualite
import image from '../../public/images/drapeau_italie2.jpg'; // Assure-toi que le chemin est correct
import '../../public/images/Italie_icon.png';

const Accueil = () => {
  console.log("🔎 Je suis dans Accueil !");
  return (
    <div className="accueil-container">

      <div className="hero">
          {/* <img className="background-image" src="./img/italie_paris.jpg" alt="Background" /> */}

          <div className="hero-content">
              {/* <h1>Apirp</h1>
              <p>Association des Professeurs d'Italien de la Région Parisienne</p> */}
              {/* Tu peux ajouter d'autres éléments ici si nécessaire */}
          </div>
      </div>

      <div className="accueil-container1">

        <h1 className="h1">Bienvenue sur le site de Association des Professeurs Italien de la Région Parisienne</h1>

        <TabImg
            imageUrl= {image} // Utilisation de la variable image pour le chemin
            imageAlt="Description de l'image"
            title="Notre association a pour vocation :"
            description=
              <ul>
                <li> <span className='span'>- d’établir et développer</span> des liens de solidarité et d’amitié entre les italianistes de la région parisienne; </li>
                <li> <span className='span'>- de renseigner</span> les professeurs d’italien à tous niveaux sur la diffusion de l’enseignement de l’italien en région parisienne ;</li>
                <li> <span className='span'>- de promouvoir</span> l’enseignement de l’italien.</li> 
              </ul>
        />

      </div>
      {/* <img src='../img/italie_icon.png' alt="Description de l'image"/> */}

      <img className="img" src="/images/Italie_icon.png" alt="Description de l'image" />

      <div className="accueil-container1">

        <h2 className="txt2">Exploration culturelle : Plongée au cœur de Italie avec Association des Professeurs Italien de la Région Parisienne</h2>

        <p className="txt">
          Nous sommes également des défenseurs de la diversité linguistique et culturelle. En promouvant 
          enseignement de italien, nous contribuons à enrichissement de la palette linguistique de 
          la région parisienne, offrant aux apprenants une fenêtre ouverte sur une culture riche et diversifiée. 
          Nous croyons fermement en la valeur ajoutée que représente la maîtrise de italien, tant sur le plan 
          personnel que professionnel, et nous nous efforçons de la transmettre avec passion et dévouement.
          Que vous soyez un enseignant passionné, un apprenant avide de découvrir la 
          langue de Dante, ou simplement un amateur de culture italienne, vous trouverez 
          dans notre association un foyer chaleureux où partager vos intérêts, vos connaissances
           et vos expériences. Rejoignez-nous dans cette aventure passionnante, où la découverte 
           de la langue et de la culture italiennes est qun début. Bienvenue à vous dans notre 
           famille italianiste !
        </p>

      </div>

      <div className="accueil-container2">

        <h2 className="txt3 h2">actualités</h2>
        <p className='p'>... DAL WEB</p>

        <div className="actualite-container">

        {/* Ajoutez les actualités ici en utilisant le composant Actualite */}
        <div className="actualite-box">
          <Actualite
            image="../images/DivinaComedia.jpg"
            title="La Divina Commedia"
            description="Con tutto si può giocare, anche con Dante Alighieri e con la Divina Commedia, che sarà pure un'opera drammatica e divina, ma pur sempre commedia resta. Al nutrito gruppo di giochi ispirati alle terzine del Poeta e alla sua favolosa giostra di simboli, di allegorie e di 'location', nell'anno delle celebrazioni per i 700 anni dalla morte si aggiunge un gioco da tavola, un classico gioco dell'oca, che la casa editrice Sei allega a un'edizione rinnovata della Divina Commedia."
            url="https://www.lastampa.it/cultura/2021/01/21/news/la-divina-commedia-diventa-un-gioco-da-tavolo-come-quello-dell-oca-1.39802733"
          />
        </div>
        <div className="actualite-box">
          <Actualite
            image="../images/zerocalcare.jpg"
            title="Zerocalcare sur Netflix"
            description="L'arrivo della serie animata di Zerocalcare su Netflix, intitolata “Strappare lungo i bordi”, è previsto per il 2021 e il colosso ne ha annunciato l'uscita attraverso un mini teaser trailer ufficiale postato sui canali social."
            url="https://youtu.be/c0p3iwtw9tU"
          />
        </div>
        <div className="actualite-box">
          <Actualite
            image="../images/greenPea.jpg" 
            title="Green Pea apre a Torino l’8 dicembre"
            description="L’attesissimo centro commerciale (secondo le intenzioni di chi l’ha ideato meglio parlare di “green retail park”) della famiglia Farinetti esordirà a Torino il prossimo 8 dicembre, accanto a Eataly Lingotto: quindicimila metri quadri, articolati su cinque piani, per raccontare – e vendere – il vivere sostenibile. ."
            url="https://www.gamberorosso.it/notizie/green-pea-apre-a-torino-l8-dicembre-ecco-cose-la-scommessa-ecologica-di-farinetti/"
          />
        </div>
        <div className="actualite-box">
          <Actualite
            image="../images/sergio.jpg" 
            title="Sergio Mattarella: «Dante, nostro contemporaneo. Così la sua voce parla al futuro»"
            description="La musica per rendere omaggio al Sommo poeta. È accaduto sabato 3 ottobre, a Roma, nel cortile d’onore del Quirinale, in occasione delle celebrazioni per i 700 anni dalla morte di Dante, nato a Firenze nel 1265 e scomparso a Ravenna nel 1321."
            url="https://www.corriere.it/cultura/20_ottobre_03/sergio-mattarella-dante-nostro-contemporaneo-cosi-sua-voce-parla-futuro-5416bf66-05a5-11eb-867c-57744a2cabe2.shtml"
          />
        </div>
        <div className="actualite-box">
          <Actualite
            image= "../images/dal.jpg"
            title="Dal 2021 riapre al pubblico il corridoio più famoso del mondo"
            description="Nel 2021 aprirà al pubblico una gemma del patrimonio artistico italiano, il corridoio più imponente e famoso al mondo : il corridoio vasariano.  "
            url="https://it.businessinsider.com/corridoio-vasariano-firenze-palazzo-vecchio-uffici-palazzo-pitti-ponte-vecchio-2021-riapertura/ "
          />
        </div>
        <div className="actualite-box">
          <Actualite
            image="../images/raffaelloSuperstar.jpg"
            title="Raffaello superstar, a Roma la più grande mostra con cento capolavori"
            description="Le Scuderie del Quirinale celebreranno Raffaello Sanzio con la più spettacolare monografia a lui mai dedicata. Una maxi-mostra che dal 5 marzo 2020 esporrà duecento opere tra dipinti, disegni e opere di confronto, per la prima volta riuniti tutte insieme, con 100 capolavori del maestro provenienti dagli Uffizi e da numerosi altri musei."
            url="https://roma.repubblica.it/cronaca/2019/12/25/news/raffaello_superstar_a_roma_la_piu_grande_mostra_con_cento_capolavori-244337923/?refresh_ce"
          />
        </div>
        <div className="actualite-box">
          <Actualite
            image="../images/lupi.jpg"
            title="I lupi di Liu Ruowang invadono Napoli"
            description="Cento grandi lupi di metallo assediano minacciosi la statua di un guerriero in piazza Municipio a Napoli. "
            url="http://www.rainews.it/dl/rainews/media/Cento-lupi-in-piazza-Municipio-a-Napoli-la-natura-che-si-ribella-all-uomo-7a4ad6e0-29a7-42ed-824b-d74e0b326cab.html#foto-3 "
          />
        </div>
        <div className="actualite-box">
          <Actualite
            image="../images/portata.jpg"
            title="Portata alla luce un’altra villa romana a Enna"
            description="Con l’installazione della copertura si sono conclusi i lavori – finanziati dalla Regione Siciliana – di sistemazione dell’area archeologica della Villa romana di contrada Gerace a Enna. "
            url="http://www.custonaciweb.it/portata-alla-luce-unaltra-villa-romana-a-enna-si-trova-a-15-km-dalla-villa-del-casale-di-piazza-armerina/?fbclid=IwAR2WLelaVEdbJzGPh-KL5CQNjpqOG56KqKzdn5B5NKO5egKzecj5hkkMiBc"
          />
        </div>
      

        </div>

      </div>
    </div>
  )
}

export default Accueil;