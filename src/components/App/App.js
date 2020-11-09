import React, {Component} from 'react';
import './App.scss';

import {fetchPopulardata, fetchMovieGenres} from '../../actions'

import Nav from '../Nav/Nav';
import Aside from '../Aside/Aside';
import Slider from '../Slider/Slider';
import Main from '../Main/Main'
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      genres: null
    }
  }
  componentDidMount() {
    this.props.fetchPopulardata();
    this.props.fetchMovieGenres();

  }

  render() {
    // console.log(this.props)
    // console.log(this.state)
    return (
      <div className="App">
        <Aside />
        <div className="wrapper">
          <Nav />
          {/* <Slider {...this.props} /> */}
          <Main {...this.props} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    data: state.popularMovieData,
    genres: state.genreData

  }
}

export default connect(mapStateToProps, {fetchPopulardata, fetchMovieGenres})(App);
