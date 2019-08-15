
import { gitRepoService } from '../services/gitRepoService';
// import { SET_REPO_LIST } from '../types/gitRepoType';

const getRepoList = (searchValue) => (dispatch) => {
	const success = (data) =>
		({ type: 'SET_REPO_LIST', data });
        gitRepoService.getRepoList(searchValue).then((res) => { 
            dispatch(success(res.data)) });
}


export {
	getRepoList,
}