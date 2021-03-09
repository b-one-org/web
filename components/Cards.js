
import CardItem from './CardItem';


const Cards = ({title, textCardLeft, textCardRight, textCardMiddle}) => {
  return (
    <div className='cards'>
      <h6 className='cards-h6'>{title}</h6>
      <div className='cards-container'>
        <div className='cards-wrapper'>
          <ul className='cards-items'>
            <CardItem
              src='images/img-9.jpg'
              text={textCardLeft}
              path='/join'
            />
            <CardItem
              src='images/hire-team-4.jpg'
              text={textCardMiddle}
              path='/hire'
            />
            <CardItem
              src='images/problem-2.jpg'
              text={textCardRight}
              path='https://airtable.com/shrvo0dz6nvEEXMIl'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
