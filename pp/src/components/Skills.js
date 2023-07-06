import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../img/arrow1.svg";
import arrow2 from "../img/arrow2.svg";
import colorSharp from "../img/color-sharp.png"
import html from "../img/html.svg"
import css from "../img/css.svg"
import js from "../img/js.svg"
import react from "../img/react.svg"
import node from "../img/node.svg"
import express from "../img/express.svg"
import mongodb from "../img/mongodb.svg"
import tailwind from "../img/tailwind.svg"
import bootstrap from "../img/bootstrap.svg"
import git from "../img/git.svg"
import github from "../img/github.svg"

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
                        <p>These are skills that I well versed in.<br></br> I will continue to Update this as I add more.</p>
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
                                <img src={js} alt="Image" />
                                <h5 className='wf'>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt="Image" />
                                <h5 className='wf'>Git</h5>
                            </div>
                            <div className="item">
                                <img src={github} alt="Image" />
                                <h5 className='wf'>Github</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5 className='wf'>React</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="Image" />
                                <h5 className='wf'>NodeJS</h5>
                            </div>
                            <div className="item">
                                <img src={express} alt="Image" />
                                <h5 className='wf'>Express</h5>
                            </div>
                            <div className="item">
                                <img src={mongodb} alt="Image" />
                                <h5 className='wf'>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={tailwind} alt="Image" />
                                <h5 className='wf'>Tailwind</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="Image" />
                                <h5 className='wf'>Bootstrap</h5>
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