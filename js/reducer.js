import * as Immutable from 'immutable'

export default function reducer(state = Immutable.Map(), action) {
  switch (action.type) {
    case 'SET_INITIAL_STATE':
      return Immutable.fromJS({query: ''});
  }
  return state;
}
