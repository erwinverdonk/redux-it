import { combineEpics } from 'redux-observable';
import { epics as appEpics} from './app-epics';

export const rootEpic = combineEpics(...appEpics);