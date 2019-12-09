import React from 'react';
import styles from './Header.scss';
import { NavLink, Link } from 'react-router-dom';
import Icon from '../Icon.js';
import Container from '../Container/Container.js';

class Header extends React.Component {

  render() {

    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/'>
              <Icon name='cat'/>
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>FAQ</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;