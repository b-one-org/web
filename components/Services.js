import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 
{ faBook, 
  faPrayingHands,
  faChalkboardTeacher,
  faGlobeAmericas,
  faDumbbell,
  faUsers
} from "@fortawesome/free-solid-svg-icons";


var icons={
  'fa fa-book':faBook,
  'fa fa-praying-hands':faPrayingHands,
  'fa fa-chalkboard-teacher':faChalkboardTeacher,
  'fa fa-globe-americas':faGlobeAmericas,
  'fa fa-dumbbell':faDumbbell,
  'fa fa-users':faUsers,
}


const Services = ({title, content, data}) => {
    return (
      <div className='services-block'>
        <div className='services-section-title'>
          <h2 className='services-title'>{title}</h2>
          <p className='services-text'>
            {content}
          </p>
        </div>
        <div className='services-row'>
          {data
            ? data.map((d, i) => (
                <div  key={`${d.name}-${i}`} className='services-col-md-4'>
                  {" "}
                  <FontAwesomeIcon icon={icons[d.icon]} className='services-icon'/>
                  <div className='services-service-desc'>
                    <h3 className='services-subtitle'>{d.name}</h3>
                    <p className='services-text'>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    );
}

export default Services;