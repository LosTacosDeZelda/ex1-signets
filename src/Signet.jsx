import './Signet.scss';
import Dossier from './Dossier';
import ListeDossiers from './ListeDossiers';
import Entete from './Entete';


export default function Signet() {

  return (
    <div className="Appli">
        <Entete/>
        <ListeDossiers/>
    </div>
  );
}
