import React, { Component } from 'react';
import { connect } from 'react-redux';
import { artistListAll, artistList, storeSearch } from '../actions';
import { bindActionCreators } from 'redux';

import Search from '../components/search';
import Artistlist from '../components/artistlist';

class HomeContainer extends Component { 

    componentDidMount(){
        if(!this.props.artists.artistList){
            this.props.artistListAll();
        }
    }

    getKeywords = (event) => {
        let keyword = event.target.value;
        if(keyword){
            this.props.artistList(keyword);
        }
        else{
            this.props.artistListAll();
        }
        this.props.storeSearch(keyword);
    }

    render(){
        let searchField = '';
        if (this.props.artists.searchField){
            searchField = this.props.artists.searchField[0];
        }
        return (
            <div>
                <Search value={searchField} keywords={this.getKeywords}/>
                <Artistlist artists={this.props.artists.artistList}/>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        artists: state.artists
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            artistListAll, artistList, storeSearch
        }
        , dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);