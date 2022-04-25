import './nav.css'
import {AiTwotoneHome, AiOutlineUser, AiFillBook, AiOutlineContacts} from 'react-icons/ai'
import {RiServiceFill} from 'react-icons/ri'
import { useState } from 'react'


const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    return ( 
      <nav>
          <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#'? 'active': ''}><AiTwotoneHome/></a>
          <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about'? 'active': ''}><AiOutlineUser/></a>
          <a href="#experience"  onClick={() => setActiveNav('#experience')} className={activeNav === '#experience'? 'active': ''}><AiFillBook/></a>
          <a href="#service"  onClick={() => setActiveNav('#service')} className={activeNav === '#service'? 'active': ''}><RiServiceFill/></a>
          <a href="#contact"  onClick={() => setActiveNav('#contact')} className={activeNav === '#contact'? 'active': ''}><AiOutlineContacts/></a>
      </nav>
     );
}
 
export default Nav;