// selectors
export const getSearchString = (state) => state.searchString && console.log('searchString:', state.searchString);
export const countAllCards = ({cards}) => cards.length;
export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;

// action name creator
const reducerName = 'searchString';
// const reducerName = 'changeSearchString';
const createActionName = name => `app/${reducerName}/${name}`;


// actions types
export const CHANGE = createActionName('CHANGE');

// action creators
// export const createAction_searchString = payload => ({ payload, type: CHANGE });
export const createAction_changeSearchString = payload => ({ payload, type: CHANGE });


// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHANGE:
      return action.payload;
    default:
      return statePart;
  }
}

// // reducer
// export default function reducer(state = [], action = {}) {
//   switch (action.type) {
//     case ADD_CARD:
//       return [...state, { ...action.payload, id: shortid.generate() }];
//     default:
//       return state;
//   }
// }
