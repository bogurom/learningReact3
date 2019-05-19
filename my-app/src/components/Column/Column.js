import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import {settings} from '../../data/dataStore';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';

class Column extends React.Component {

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  static propTypes = {
    columnTitle: PropTypes.node,
    cards: PropTypes.array,
    icon: PropTypes.string,
    title: PropTypes.string,
    addCard: PropTypes.func,
    // name: PropTypes.string,
  }

  render() {
    // const {title, icon, cards} = this.props;
    const {cards, addCard} = this.props;

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={this.props.icon}/>
          </span>
          {this.props.title}
        </h3>
        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        {/*<div className={styles.cards}>
          {this.state.cards.map(({key, ...cardProps}) => (
            <Card key={key} {...cardProps} />
          ))}
        </div> */}
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCard}/>
        </div>
      </section>
    );
  }
}
//
// notes:         <pre>{JSON.stringify(this.props)}</pre>
//         <pre>{JSON.stringify(this.props, null, 2)}</pre>

export default Column;
