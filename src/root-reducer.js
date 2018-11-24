import { combineReducers } from 'redux';
import { reducer as appReducer } from './app-reducers';

export const rootReducer = combineReducers({
	app: appReducer
});
