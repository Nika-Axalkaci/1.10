import Logo from '../img/logo.svg';

function Header(){
    return <header>
      <div className='logo-div'>
      <img src={Logo} alt="" />
      </div>
      <div className='about-div'>
        <ul>
          <li><a href="#">about</a></li>
          <li><a href="#">socials</a></li>
          <li><a href="#">contacts</a></li>
          <li><a href="#">skills</a></li>
        </ul>
      </div>

    </header>
}


export default Header;