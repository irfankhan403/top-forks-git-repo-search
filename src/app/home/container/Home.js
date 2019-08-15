import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    Container,
    TextField,
    Paper,
    IconButton,
    InputBase,
    Divider,
    withStyles,
    createStyles,
    Avatar
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import RepoList from '../components/RepoList';
import {getRepoList} from '../actions/gitRepoList'

const useStyles = createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      marginTop:'5%'
    },
    input: {
      marginLeft: 8,
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    form:{
        flex: 1,
        display: 'flex',
    },
    avatar: {
      margin: 10,
    },
    bigAvatar: {
      margin: 10,
      width: 60,
      height: 60,
    },

  });
  

class Home extends Component {
    state ={
      searchValue :'',
    }

    handleChange=(e)=>{
      let {name,value} = e.target;
      this.setState({
        [name]: value
      });
    }

    handleSubmit=(e)=>{
      e.preventDefault();
      let {searchValue} = this.state;
      this.props.getRepoList(searchValue);
    }

    render() {
      const {searchValue} = this.state;
        const {classes} = this.props;
        return (
                <Container fixed>
                     <Paper className={classes.root}>
                     <form className={classes.form} onSubmit={(e)=>this.handleSubmit(e)}>
                        <InputBase
                            className={classes.input}
                            name='searchValue'
                            value={searchValue}
                            onChange={(e)=>this.handleChange(e)}
                            placeholder="Search repo"
                            inputProps={{ 'aria-label': 'search repo' }}
                        />
                        <IconButton type='submit' className={classes.iconButton} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        </form>
                        </Paper>

                        <RepoList/>
                </Container>
        )
    }
}

const mapStateToProps = (state) => ({
  repoList:state,
});


const mapDispatchToProps = (dispatch) => bindActionCreators({
  getRepoList,
}, dispatch);



export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Home));