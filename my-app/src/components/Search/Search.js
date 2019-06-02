import React from 'react';
import styles from './Search.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Container from '../Container/Container';
import {withRouter} from 'react-router';
import Icon from '../Icon/Icon';

class Search extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    icon: PropTypes.string,
    searchString: PropTypes.string,
    changeSearchString: PropTypes.func,
    countVisible: PropTypes.number,
    countAll: PropTypes.number,
    history: PropTypes.object,
  }

  static defaultProps = {
    text: settings.search.defaultText,
    icon: settings.search.icon,
    // searchString: 'search string in defaultProps in Search.js?',
  }

  state = {
    value: this.props.searchString || '',
  }

  handleChange(event){
    this.setState({
      value: event.target.value,
    });
    // console.log('this.state:', this.state);
  }

  handleOK(){
    console.log('this.props:', this.props);
    this.props.changeSearchString(this.state.value);
    this.props.history.push(`/search/${this.state.value}`);
  }
  
  componentWillReceiveProps(newProps){
    this.setState({value: newProps.searchString});
  }

  render() {
    // const {text, icon, countVisible, countAll} = this.props;
    const {text, countVisible, countAll, icon} = this.props;
    const {value} = this.state;
    console.log('this:', this);
    console.log('this.props:', this.props);
    console.log('this.state:', this.state);
    console.log('value:', {value});
    // console.log('this.props:', this.props);
    return (
      <Container>
        <div className={styles.component}>
          <input
            type='text'
            placeholder={text}
            value={value}
            onChange={event => this.handleChange(event)}
          />
          <div className={styles.buttons}>
            <Button onClick={() => this.handleOK()}><Icon name={icon} /></Button>
          </div>
          <div>
            { countVisible == countAll ? '' : `${countVisible} / ${countAll}` }
          </div>
        </div>
      </Container>
    );
  }
}

export default withRouter(Search);
