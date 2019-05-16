import {connect} from 'react-redux';
import Column from './Column';

export const getCardsForColumn = ({cards}, columnId) => cards.filter(cards => cards.columnId === columnId);

const mapStateToProps = (state, props) => ({
  // cards: state.cards,
  cards: getCardsForColumn(state, props.id),
});

export default connect(mapStateToProps)(Column);
