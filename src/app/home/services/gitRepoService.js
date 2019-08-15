import axios from "axios";

const getRepoList = (query) => {
    return axios.get(`https://api.github.com/search/repositories`,{params:query})
        .then((res) => {
            return Promise.resolve(res);
        });
}

export const gitRepoService = {
    getRepoList,
}