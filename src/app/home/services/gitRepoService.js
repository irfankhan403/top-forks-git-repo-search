import axios from "axios";

const getRepoList = (searchValue) => {
    return axios.get(`https://api.github.com/search/repositories?q={${searchValue}}&sort=forks`)
        .then((res) => {
            return Promise.resolve(res);
        });
}

export const gitRepoService = {
    getRepoList,
}