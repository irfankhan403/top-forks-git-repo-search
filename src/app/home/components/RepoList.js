import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Typography,
  Grid,
  Paper,
  withStyles,
  createStyles,
  Avatar,
  Button,
} from "@material-ui/core";

const useStyles = createStyles({
  root: {
    padding: "10px 15px",
    display: "flex",
    alignItems: "center",
    marginTop: "20px",
    "&:hover": {
      background: "#f2f4f5"
    }
  },
  listContainer: {
    marginTop: "30px",
    marginBottom: "40px"
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
  anchorTag: {
    textDecoration: "none"
  },
  pageCount:{
    padding:'6px 16px'
  }
});

class RepoList extends Component {
  render() {
    const { classes, repoList, page,total_count,per_page,owner } = this.props;
    return (
      <>
        <div className={classes.listContainer}>
          {repoList.map(
            (
              {
                name,
                full_name,
                forks_count,
                owner,
                stargazers_count,
                html_url
              },
              index
            ) => (
              <a
                key={`repo_${index}`}
                className={classes.anchorTag}
                href={html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
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
                        <strong>Owner : </strong> {owner.login}
                      </Typography>
                      <Typography>
                        <strong>Fork Count : </strong>
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
        {repoList.length > 0 && per_page < total_count &&
        <Grid container spacing={3} justify="center">
          <Grid item>
            <Button
              variant="contained"
              disabled={page <= 1}
              size="medium"
              color="primary"
              className={classes.margin}
              onClick={()=>this.props.handlePage(page-1)}
            >
              Prev Page
            </Button>
          </Grid>
          <Grid item>
            <Paper className={classes.pageCount}>
              <Typography color="primary">Page {page}</Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              size="medium"
              disabled={page * per_page >= total_count}
              color="primary"
              className={classes.margin}              
              onClick={()=>this.props.handlePage(page+1)}
            >
              Next Page
            </Button>
          </Grid>
        </Grid>
      }
      </>
    );
  }
}

const mapStateToProps = state => ({
  repoList: state.gitRepo.items,
  total_count: state.gitRepo.total_count,
});

// const mapDispatchToProps = (dispatch) => bindActionCreators({
//   getRepoList,
// }, dispatch);

export default connect(
  mapStateToProps,
  null
)(withStyles(useStyles)(RepoList));
