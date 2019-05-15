import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import {settings} from '../../data/dataStore';
import Creator from '../Creator/Creator.js';
import Icon from './Icon.js';

class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
  }

  static propTypes = {
    columnTitle: PropTypes.node,
    cards: PropTypes.array,
    icon: PropTypes.string,
    title: PropTypes.string,
    // name: PropTypes.string,
  }

  addCard(title){
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards[state.cards.length-1].key+1,
            title,
          },
        ],
      }
    ));
  }

  render() {
    // console.log('this props', this.props);
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={this.props.icon}/>
          </span>
          {this.props.title}
        </h3>
        <div className={styles.cards}>
          {this.state.cards.map(({key, ...cardProps}) => (
            <Card key={key} {...cardProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div>
      </section>
    );
  }
}
//
// notes:         <pre>{JSON.stringify(this.props)}</pre>
//         <pre>{JSON.stringify(this.props, null, 2)}</pre>

export default Column;
