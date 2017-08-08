import initialState from './initialState';

export function persistStateToLocalStorage(state = initialState, action) {
  switch(action.type) {
    case 'persist/REHYDRATE':
      return {...state, persistedState: action.payload}
    default:
      return state;
  }
}
