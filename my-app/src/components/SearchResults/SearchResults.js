import React from 'react';
import styles from '../Column/Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import {settings} from '../../data/dataStore';
import Container from '../Container/Container';
// import Creator from '../Creator/Creator.js';
// import Icon from '../Icon/Icon.js';

class SearchResults extends React.Component {

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  static propTypes = {
    columnTitle: PropTypes.node,
    cards: PropTypes.array,
    // icon: PropTypes.string,
    title: PropTypes.string,
    addCard: PropTypes.func,
    // name: PropTypes.string,
    searchString: PropTypes.string,
  }

  state = {
    value: this.props.searchString || '',
  }
  
  saveSearchStringInState(searchString){
    this.setState({value: searchString});
  }

  render() {
    // const {title, icon, cards} = this.props;
    const {cards} = this.props;
    // const {value} = this.state;

    return (
      <Container>
        <section className={styles.component}>
          <h3 className={styles.title}>
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
          </div>
          <div className={styles.creator}>
            <Creator text={settings.cardCreatorText} action={addCard}/>
          </div> */}
        </section>
      </Container>
    );
  }
}
//
// notes:         <pre>{JSON.stringify(this.props)}</pre>
//         <pre>{JSON.stringify(this.props, null, 2)}</pre>

export default SearchResults;
