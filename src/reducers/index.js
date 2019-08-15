import { combineReducers } from 'redux';

import { reducers as gitRepoReducers } from '../app/home';

const rootReducer = combineReducers({
    gitRepo: gitRepoReducers,
});

export default rootReducer;