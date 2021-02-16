import "./Dossier.scss";

export default function Dossier(props) {

  function changerCouleurDossier() {
    
  }
    return (
      <div className="Dossier" style={{backgroundColor:props.couleur}}>
          <h4>{props.titre}</h4>
          <img src={"img/"+props.id +".png"} alt={props.titre}/>
          <p>Modifié : {props.dateDeModif}</p>
      </div>
    );
}