import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 
{ faUsers, 
  faHeadset, 
  faFileContract, 
  faProjectDiagram, 
  faBrain, 
  faHands,
  faCoins,
  faPeopleArrows,
  faHandsHelping
} from "@fortawesome/free-solid-svg-icons";

var icons={
  'fas fa-users':faUsers,
  'fas fa-headset':faHeadset,
  'fas fa-file-contract':faFileContract,
  'fas fa-project-diagram':faProjectDiagram,
  'fas fa-brain':faBrain,
  'fas fa-hands':faHands,
  'fas fa-coins':faCoins,
  'fas fa-people-arrows':faPeopleArrows,
  'fas fa-hands-helping':faHandsHelping
}

const Features = ({title,data}) => {
    return (
      <div className='features-block'>
        <div className='features-col-md-10 features-col-md-offset-1'>
          <h2 className='features-title'>{title}</h2>
        </div>
        <div className='features-row'>
          {data
            ? data.map((d,i) => (
                <div  key={`${d.title}-${i}`} className='features-col-xs-6 features-col-md-3'>
                  {' '}
                  <FontAwesomeIcon icon={icons[d.icon]} className='features-icon'/>
                  <h3 className='features-subtitle'>{d.title}</h3>
                  <p className='features-text'>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    );
}

export default Features;