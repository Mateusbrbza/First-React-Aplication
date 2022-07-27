import { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>MeetApp</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Agenda completa</Link>
          </li>
          <li>
            <Link to='/new-meetup'>Adicionar reuniao</Link>
          </li>
          <li>
            <Link to='/favorites'>
              Meus Favoritos
              <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
              </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;