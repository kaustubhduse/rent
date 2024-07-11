import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Import regular CSS file
import hugeLogo from '../assets/hug.png'; // Import image file
import Logo from '../assets/logo.png'; // Import Logo component

const MainNavigation = () => {
  return (
    <header className='header'>
        <img src={Logo} alt='Logo' className='logo'/>
      <nav className='nav'>
        
        <ul>
          <li>
            <NavLink to='/properties' activeClassName='active'>
              PROPERTIES
            </NavLink>
          </li>
          <li>
            <NavLink to='/activity' activeClassName='active'>
            MY DASHBOARD/ACTIVITY
            </NavLink>
          </li>
          <li>
            <NavLink to='/list-your-property' activeClassName='active'>
            LIST YOUR PROPERTY
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact-us' activeClassName='active'>
            CONTACT US
            </NavLink>
          </li>
          <li>
            <NavLink to='/more' activeClassName='active'>
            MORE
            </NavLink>
          </li>
          <li>
          <img src={hugeLogo} alt='Huge Logo' className='hugelogo'/>
          </li>
           

        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
