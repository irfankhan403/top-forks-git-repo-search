import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  Container,
  Typography,
  withStyles,
  createStyles,
} from "@material-ui/core";
import RepoList from "../components/RepoList";
import SearchBox from "../components/SearchBox"
import { getRepoList } from "../actions/gitRepoList";

const useStyles = createStyles({
  searchResult:{
    marginTop:'10px'
  }
});

class Home extends Component {
  state = {
    search: "",
    page: 1,
    per_page: 20,
  };

  handlePage = (page) => {
    this.setState(prevState => ({ page}),function(){
      this.searchQueryCall();
    });
  };



  searchQueryCall = () =>{
    let { search, page, per_page } = this.state;
    let searchQuery = { q: search, sort: "forks", page, per_page };
    this.props.getRepoList(searchQuery);
  }

  handleSubmit = (search) => {
    this.setState(prevState => ({ page:1,search}),function(){
      this.searchQueryCall();
    });
  };

  render() {
    const { page ,per_page, search} = this.state;
    const {  totalCount,classes } = this.props;
    return (
      <Container fixed>
        <SearchBox handleSubmit={this.handleSubmit}/>
        {search&&
        <Typography className={classes.searchResult}><strong>{totalCount}</strong> result found for <strong>{search}</strong>.</Typography>
        }
        <RepoList handlePage={this.handlePage} page={page} per_page={per_page}/>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  totalCount: state.gitRepo.total_count,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getRepoList
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(Home));
