import Buttons from './Buttons';
import './header.css'
import YO from '../../assets/soyyo.png'
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header>

            <div className="container header__container">
                <h5>Hola soy</h5>
                <h1>Luciano Petrate</h1>
                <h5 className='text-light'>Fullstack Developer</h5>
                <Buttons />
                <HeaderSocials />

                <div className="yo">
                    <img src={YO} alt="yo"/>
                </div>

                <a href="#contact" className='scroll__down'>BAJAR</a>

            </div>

        </header>
    );
}

export default Header;