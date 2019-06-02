import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsForSearchResults} from '../../redux/cardsRedux.js';

// export const getCardsForColumn = ({cards}, columnId) => cards.filter(cards => cards.columnId === columnId);

const mapStateToProps = (state) => ({
  cards: getCardsForSearchResults(state),
});

// const mapDispatchToProps = (dispatch, props) => ({
//   addCard: title => dispatch(createAction_addCard({
//     columnId: props.id,
//     title,
//   })),
// });

export default connect(mapStateToProps)(SearchResults);
