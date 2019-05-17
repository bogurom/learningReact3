import {connect} from 'react-redux';
import List from './List';
import {getColumnsForList, createAction_addColumn} from '../../redux/columnsRedux.js';

// export const getColumnsForList = ({columns}, listId) => columns.filter(columns => columns.listId === listId);


const mapStateToProps = (state, props) => ({
  // columns: state.columns,
  columns: getColumnsForList(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createAction_addColumn({
    listId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
