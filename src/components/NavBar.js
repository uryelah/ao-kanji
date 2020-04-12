import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from 'react-router-dom';
import './NavBar.css';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

import * as SubscriptionActions from "../actions/subscription";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      text: '',
    }
  }

  makeRequest = (e) => {
    const path = `${e ? '/search/' + e.target.value : this.props.location.pathname}`;

    const text = e ? e.target.value : this.props.location.pathname.split('/').reverse()[0];

    if (text !== this.state.text) {
      this.props.history.push(path, this.props.state);
    }

    if (path.includes('search')) {

      this.setState({
        text: text,
      });

      let url = `https://kanjialive-api.p.rapidapi.com/api/public/search/${text}`;
      console.log(path, this.state.text, this.props.location.pathname.split('/').reverse()[0])
  
      const options =  {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "kanjialive-api.p.rapidapi.com",
          "x-rapidapi-key": "c6d4c3d3d5msh0980a85de22153ap1c95ecjsn1ea8a3f1317f",
      }
      }
      this.props.actions.fetchSubscription(url, options);
    } else if (path.includes('grade') || path.includes('chapter')) {
      this.setState({
        text: '',
      });

      let group;

      if (path.includes('grade')) {
        group = 'grade=';
      } else if (path.includes('chapter')) {
        group = 'list=mac:c';
      } else if (path.includes('chapter')) {
        group = 'list=ap:c';
      }

      let url = `https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?${group}${this.props.location.pathname.split('/').reverse()[0]}`;
  
      console.log(url)

      const options =  {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "kanjialive-api.p.rapidapi.com",
          "x-rapidapi-key": "c6d4c3d3d5msh0980a85de22153ap1c95ecjsn1ea8a3f1317f",
        }
      }
  
      this.props.actions.fetchSubscription(url, options);

    }
  }

  goBack = () => {
    if (this.props.location.pathname.includes('grade') || this.props.location.pathname.includes('chapter')) {
      console.log(this.props.history.push('/'), this.props.state)
    } else {
      this.props.history.goBack();
      setTimeout(() => {
        this.setState({
          text: this.props.location.pathname.split('/').reverse()[0],
        });   
      }, 500);
    }
  }

  clickHandler = () => {
    this.goBack();
  };

  handleKeyDown = e => {
    if (e.keyCode === 9) {
      this.props.history.goBack();
      //this.makeRequest();
    }
  };

  updateText = () => {
    this.setState({
      text: 'ball',
    })
  }

  render() {
    return (
      <nav className="nav">
        { this.props.location.pathname !== '/' && <i role="button" tabIndex={1} aria-label="Back to last page" onClick={this.clickHandler} onKeyDown={e => this.handleKeyDown(e)} className="fas fa-chevron-left nav__back-ico" />}
        <SearchBar key={this.state.text} updateText={this.updateText} state={this.state} text={this.state.text} makeRequest={this.makeRequest} />
      </nav>
    );
  };
};

function mapStateToProps(state) {
  return state;
}

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign(
      {}, SubscriptionActions), dispatch),
  };
}

NavBar.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(withRouter(NavBar));
