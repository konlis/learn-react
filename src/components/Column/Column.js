import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import {settings} from '../../data/dataStore';
import Icon from '../Icon.js';

class Column extends React.Component {
    

static propTypes = {
  title: PropTypes.string,
  cards: PropTypes.array,
  name: PropTypes.node,
  icon: PropTypes.node,
  addCard: PropTypes.func,
}

static defaultProps = {
  description: settings.defaultColumnIcon,
  icon: settings.defaultColumnIcon,
}

render() {
  const {addCard, cards, title, icon} = this.props;
  //console.log(this.props);
  
  return (
    <section className={styles.component}>
      <h3 className={styles.title} > {title}
        <span className={styles.icon}>
          <Icon  name={icon}/>
        </span>
      </h3>
      <div>
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
      </div>
      <div className={styles.creator}>
        <Creator text={settings.cardCreatorText} action={title => addCard(title)}/>
      </div>
      
    </section>
  );
}
}

export default Column;
