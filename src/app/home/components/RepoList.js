import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Typography,
  Grid,
  Paper,
  withStyles,
  createStyles,
  Avatar
} from "@material-ui/core";

const useStyles = createStyles({
  root: {
    padding: "10px 15px",
    display: "flex",
    alignItems: "center",
    marginTop: "20px",
    '&:hover': {
      background: "#f2f4f5",
   },
  },
  listContainer: {
    marginTop: "40px"
  },
  iconButton: {
    padding: 10
  },
  form: {
    flex: 1,
    display: "flex"
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  },
  anchorTag:{
    textDecoration:'none',
   
  }
});

class RepoList extends Component {
  render() {
    const { classes, repoList } = this.props;
    return (
      <div className={classes.listContainer}>
        {repoList.map(
          ({
            name,
            full_name,
            forks_count,
            owner,
            stargazers_count,
            html_url
          },index) => (
            <a key={`repo_${index}`} className={classes.anchorTag} href={html_url} target="_blank" rel="noopener noreferrer">
              <Paper className={classes.root}>
                <Grid container spacing={3}>
                  <Grid item>
                    <Avatar
                      alt={full_name}
                      src={owner.avatar_url}
                      className={classes.bigAvatar}
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography>
                      <strong>Repository Name : </strong>
                      {name}
                    </Typography>
                    <Typography>
                      <strong>Owner : </strong> {full_name}
                    </Typography>
                    <Typography>
                      <strong>ForK Count : </strong>
                      {forks_count}
                    </Typography>
                    <Typography>
                      <strong>Stars Count :</strong>
                      {stargazers_count}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </a>
          )
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  repoList: state.gitRepo.repoList
});

// const mapDispatchToProps = (dispatch) => bindActionCreators({
//   getRepoList,
// }, dispatch);

export default connect(
  mapStateToProps,
  null
)(withStyles(useStyles)(RepoList));
