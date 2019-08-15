import Home from './container/Home';
import { combineReducers } from 'redux';
import gitRepoReducers  from './reducers/gitRepoReducer'

const components = { Home };

const reducers = gitRepoReducers;
export { components, reducers };
