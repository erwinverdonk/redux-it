import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './root-epic';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './root-reducer';
import { initialState } from './state';

export const configureStore = () => {
	const epicMiddleware = createEpicMiddleware();
   const store = createStore(
      rootReducer, 
      initialState, 
      composeWithDevTools(applyMiddleware(epicMiddleware))
   );

	epicMiddleware.run(rootEpic);

	return store;
};
