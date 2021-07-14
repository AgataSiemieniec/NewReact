import {connect} from 'react-redux';
import List from './List';
import {getColumnsForList, createActionAddColumn}  from '../../redux/columnsRedux.js';

//dodaje propsy komponentu List, wykorzystując fragmenty stanu aplikacji z reduksowego store.
const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),
});
//w pierwszym argumencie selektor przyjmuje zawsze state czyli cały stan aplikacji


//funkcja, która nadaje komponentowi propsy, w których znajdą się funkcje wysyłające akcje do magazynu. wysyłanie akcji.
const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);