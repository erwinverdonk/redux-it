import { ActionTypes } from './actions';
import { mapTo, filter, delay, tap } from 'rxjs/operators';

const load = (action$) => {
   return action$.pipe(
      filter(action => action.type === ActionTypes.LOAD),
      tap(() => console.log('loading...')),
      delay(5000),
      tap(() => console.log('load complete ✨')),
      mapTo({type: ActionTypes.LOAD_COMPLETE})
   );
}

export const epics = [
   load
];
