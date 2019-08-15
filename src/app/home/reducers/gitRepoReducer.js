// import { SET_REPO_LIST, CLEAR_LIST } from "../types/gitRepoType";

const initialState = {
  incomplete_results: false,
  items: [],
	total_count: 0,
	per_page:20,
	page:0,
};

const gitRepoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "SET_REPO_LIST": {
      return {...state,...action.data};
    }
    case "CLEAR_LIST": {
      return initialState;
		}
		case "CHANGE_PER_PAGE":{
			return {...state,per_page:action.data};
		}
		case "CHANGE_PAGE":{
			return {...state,page:action.data};
		}
    default:
      return state;
  }
};

export default gitRepoReducers;
