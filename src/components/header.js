import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li className='btn'><Link to='/'>Home</Link></li>
        <li className='btn'><Link to='/search'>Search</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
