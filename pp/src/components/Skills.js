import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../img/arrow1.svg";
import arrow2 from "../img/arrow2.svg";
import colorSharp from "../img/color-sharp.png"
import html from "../img/html.svg"
import css from "../img/css.svg"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className='skill-con'>
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2 className='wf'>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={html} alt="Image" />
                                <h5 className='wf'>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" />
                                <h5 className='wf'>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={''} alt="Image" />
                                <h5 className='wf'>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={''} alt="Image" />
                                <h5 className='wf'>Web Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
    </div>
  )
}