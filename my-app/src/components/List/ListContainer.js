import {connect} from 'react-redux';
import List from './List';

export const getColumnsForList = ({columns}, listId) => columns.filter(columns => columns.listId === listId);

const mapStateToProps = (state, props) => ({
  // columns: state.columns,
  columns: getColumnsForList(state, props.id),
});

export default connect(mapStateToProps)(List);
