import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions'

class SongList extends Component {

    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}>
                            SELECT
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        })
    }

    render() {
        /**
         * When we pass arguments to the connect method,
         * it passes them to the component as part of props
         * so we can call it inside our component
         */
        // console.log(this.props.songs)
        // console.log( this.props.selectSong)
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

// By convention this is called like this
/**
 * Everytime we call selectSong it is going to execute this too
 */
const mapStateToProps = (state) => {
    // console.log(state)

    return { songs: state.songs }
}

// We pass the confuguring function and an object with the action creator
export default connect(mapStateToProps, { selectSong })(SongList);

