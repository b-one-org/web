

import Button from './Button';
//import Image from 'next/image'

const Header = ({img, activateButton=false, buttonText, btnStyle='btn--outline', title, content, buttonLink="/"}) => {
  return (
    <>
      {activateButton ?
      <div className='header-container'>
        <img src={img}/>
        <h2 className='header-container-h2-button'>{title}</h2>
        {content}
        <div className='header-btns'>
          <Button
              className='btns'
              buttonStyle={btnStyle}
              buttonSize='btn--large'
              linkTo={buttonLink}
            >
              {buttonText}
          </Button>
        </div>
      </div> :
      <div className='header-container'>
        <img src={img}/>
        <h2 className='header-container-h2'>{title}</h2>
        {content}
      </div>
      }
    </>
  );
}

export default Header;
