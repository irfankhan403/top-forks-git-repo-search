
import { gitRepoService } from '../services/gitRepoService';
import { SET_REPO_LIST } from '../types/gitRepoType';

const getRepoList = (searchValue) => (dispatch) => {
	const success = (list) =>
		({ type: 'SET_REPO_LIST', data:list });
        gitRepoService.getRepoList(searchValue).then((res) => { 
            let repoList = res.data.items;
            console.log(repoList );
            dispatch(success(repoList)) });
}


export {
	getRepoList,
}