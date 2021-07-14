import shortid from 'shortid';

// selectors. Wybiera kolumny z danej listy
export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);

// action name creator. Zapisujemy nazwę właściwości stanu, na której będziemy wykonywać akcje
const reducerName = 'columns';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_COLUMN = createActionName('ADD_COLUMN');

// action creators.type akcji, payload - wszystkie dane niezbędne do wykonania tej akcji.
export const createActionAddColumn = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_COLUMN });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_COLUMN:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}