import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {fetchGames}  from '../actions/index';
import {bindActionCreators} from 'redux';
import GamesList from '../GamesList';

class Gamespage extends Component {

  componentDidMount(){
    this.props.fetchGames();
  }
  render() {
    return (
      <div>
        <h1>Games List</h1>

        <GamesList games={this.props.games} />
      </div>
    );
  }
}



function mapStateToProps({games}) {
  return {games};

}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({fetchGames}, dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(Gamespage);
