import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { artistDetails, clearArtistDetails } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ArtistContainer extends Component {
    
    componentDidMount() {
        this.props.artistDetails(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.clearArtistDetails();
    }
    
    artistTemplate = (details) => {
        if(details && details.length > 0){
            let artist = details[0];
            return (
                <div className="artist_view">
                    <div className="artist_background" style={{
                        background:`url(/images/${artist.cover})`
                    }}>
                        <Link to="/">
                            Back home
                        </Link>
                        <div className="name">{artist.name}</div>
                    </div>
                    <div className="artist_description">
                        <p>{artist.bio}</p>
                        <div className="tags">
                            <div>
                                <strong>Style:</strong> {artist.style}
                            </div>
                        </div>
                    </div>
                    <div className="artist_album_list">
                        { artist.albums ? 
                            artist.albums.map( item =>(
                            <div key={item.cover} className="albums">
                                <div className="cover" style={{
                                    background:`url(/images/albums/${item.cover})`
                                }}>
                                </div>      
                            </div>
                        ))
                        :null
                    }
                    </div>
                </div>
            );
        }
        else{
            return null;
        }
    };

    render(){
        return (
            <div>
                {this.artistTemplate(this.props.artists.artistDetails)}
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        artists: state.artists
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            artistDetails,
            clearArtistDetails
        }
        , dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistContainer);