import React, {Component} from 'react';
import './App.scss';

import {fetchPopulardata} from '../../actions'

import Nav from '../Nav/Nav';
import Aside from '../Aside/Aside';
import Slider from '../Slider/Slider';
import Main from '../Main/Main'
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }
  componentDidMount() {
    if (!this.props.data) {
      this.props.fetchPopulardata()
    } else {
      this.setState({data: this.props.data})
    }
    // console.log(this.props)
  }
  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(nextProps.data) != JSON.stringify(this.props.data)) {
      this.setState({data: nextProps.data});
    }
  }
  render() {
    // console.log(this.props.data)
    // console.log(this.state)
    return (
      <div className="App">
        <Aside />
        <div className="wrapper">
          <Nav />
          <Slider />
          <Main data={this.state.data} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    data: state.popularMovieData
  }
}

export default connect(mapStateToProps, {fetchPopulardata})(App);
