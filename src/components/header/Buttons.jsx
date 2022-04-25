import CV from '../../assets/CV.pdf'

function Buttons() {
    return (  
        <div className="buttons">
            <a href={CV} download className='btn'>Bajar CV</a>
            <a href="#contact" className='btn btn-primary'>Contactame</a>
        </div>
    );
}

export default Buttons;