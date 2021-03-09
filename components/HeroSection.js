
import Button from './Button';

const HeroSection = ({title,content, textButtonOutline, textButtonPrimary}) => {
  return (
    <div className='header-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>{title}</h1>
      {content}

      <div className='header-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          linkTo="/join"
        >
          {textButtonOutline}
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
          linkTo="/hire"
        >
          {textButtonPrimary}
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
