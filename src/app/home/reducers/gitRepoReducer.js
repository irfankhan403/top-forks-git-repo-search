import { SET_REPO_LIST ,CLEAR_LIST } from '../types/gitRepoType';

const initialState = {
    repoList: [],
};


const gitRepoReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_REPO_LIST': {
            return { ...state, repoList: action.data }
        }
        case 'CLEAR_LIST':{
            return { repoList :[]}
        }
        default:
            return state;
    }
}

export default gitRepoReducers;