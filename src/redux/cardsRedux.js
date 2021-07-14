import shortid from 'shortid';

// selectors. Wybiera kolumny z danej listy
export const getCardsForList = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);

// action name creator. Zapisujemy nazwę właściwości stanu, na której będziemy wykonywać akcje
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARD = createActionName('ADD_CARD');

// action creators.type akcji, payload - wszystkie dane niezbędne do wykonania tej akcji.
export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD });

// reducer
export default function reducer(statePart = [], action = {}) {
  console.log(action);
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}