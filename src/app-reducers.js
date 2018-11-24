import { initialState } from './app-state';
import { ActionTypes } from './actions';

export const reducer = (state = initialState, action) => {
	switch (action.type) {
      case ActionTypes.LOAD:
         return {
            ...state,
            loading: true
         };
      case ActionTypes.LOAD_COMPLETE:
         return {
            ...state,
            loading: false
         };
		default:
			return state;
	}
};
