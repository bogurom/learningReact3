import {connect} from 'react-redux';
import List from './List';

// export const geColumnsForList = ({columns}, listId) => co

const mapStateToProps = state => ({
  columns: state.columns,
});

export default connect(mapStateToProps)(List);
