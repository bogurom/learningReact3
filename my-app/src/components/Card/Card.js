import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {

  // static defaultProps = {
  //   icon: settings.defaultColumnIcon,
  // }
  //
  static propTypes = {
    title: PropTypes.string,
  }

  render() {
    // const {title} = this.props;
    // console.log('this:', this);
    // console.log('this props', this.props);
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title}</h3>
      </section>
    );
  }
}

export default Card;
