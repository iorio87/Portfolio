import './about.css'
import about from '../../assets/about.jpg'
import { FaAward, FaUniversity, FaFolder } from 'react-icons/fa'

const About = () => {
    return (
        <section id='about'>
            <h5>Conoce</h5>
            <h2>Sobre Mi</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={about} alt="sobre mi"/>
                    </div>
                </div>
                <div className="about__me-content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experiencia</h5>
                            <small>+1 año Experiencia</small>
                        </article>

                        <article className='about__card'>
                            <FaUniversity className='about__icon' />
                            <h5>Cursos</h5>
                            <small>+5 cursos</small>
                        </article>

                        <article className='about__card'>
                            <FaFolder className='about__icon' />
                            <h5>Proyectos</h5>
                            <small>+10 proyectos</small>
                        </article>
                    </div>
                    <p>Soy un desarrollador FullStack con conocimientos en Python, JavaScript, React, NodeJS, Express
                    </p>
                    <a href="#contact" className='btn btn-primary'>Contactame</a>
                </div>
            </div>
        </section>
    );
}

export default About;