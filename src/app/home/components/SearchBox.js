import React, { Component } from 'react'
import {
    Paper,
    IconButton,
    InputBase,
    withStyles,
    createStyles,
  } from "@material-ui/core";
  import SearchIcon from "@material-ui/icons/Search";

const useStyles = createStyles({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      marginTop: "5%"
    },
    input: {
      marginLeft: 8,
      flex: 1
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
    }
  });

class SearchBox extends Component {
    state={
        search:""
    }

    handleChange = e => {
        let { name, value } = e.target;
        this.setState({
          [name]: value
        });
      };

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.search){
            this.props.handleSubmit(this.state.search);
        }
      };

    render() {
        const {search} = this.state;
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
          <form className={classes.form} onSubmit={e => this.handleSubmit(e)}>
            <InputBase
              className={classes.input}
              name="search"
              value={search}
              onChange={e => this.handleChange(e)}
              placeholder="Search github repo"
              inputProps={{ "aria-label": "search repo" }}
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </form>
        </Paper>
       
        )
    }
}

export default withStyles(useStyles)(SearchBox);