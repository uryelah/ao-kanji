/* eslint-disable import/order */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Link } from 'react-router-dom';
import navbar from '../styles/NavBar.module.css';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

import * as SubscriptionActions from '../actions/subscription';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      text: '',
    };

    this.makeRequest = this.makeRequest.bind(this);
    this.goBack = this.goBack.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.updateText = this.updateText.bind(this);
  }

  makeRequest(e) {
    const { props, state } = this;
    const path = `${e ? `/search/${e.target.value}` : props.location.pathname}`;

    const text = e ? e.target.value : props.location.pathname.split('/').reverse()[0];

    if (text !== state.text) {
      props.history.push(path, props.state);
    }

    if (path.includes('search')) {
      this.setState({
        text,
      });

      const url = `https://kanjialive-api.p.rapidapi.com/api/public/search/${text}`;

      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'kanjialive-api.p.rapidapi.com',
          'x-rapidapi-key': 'c6d4c3d3d5msh0980a85de22153ap1c95ecjsn1ea8a3f1317f',
        },
      };
      props.actions.fetchSubscription(url, options);
    } else if (path.includes('grade') || path.includes('chapter')) {
      this.setState({
        text: '',
      });

      let group;

      if (path.includes('grade')) {
        group = 'grade=';
      } else if (path.includes('ap-chapter')) {
        group = 'list=ap:c';
      } else if (path.includes('chapter')) {
        group = 'list=mac:c';
      }

      const url = `https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?${group}${props.location.pathname.split('/').reverse()[0]}`;

      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'kanjialive-api.p.rapidapi.com',
          'x-rapidapi-key': 'c6d4c3d3d5msh0980a85de22153ap1c95ecjsn1ea8a3f1317f',
        },
      };

      props.actions.fetchSubscription(url, options);
    }
  }

  goBack() {
    const { props } = this;
    if (props.location.pathname.includes('grade') || props.location.pathname.includes('chapter')) {
      props.history.push('/ao-kanji/', props.state);
    } else {
      props.history.goBack();
      setTimeout(() => {
        this.setState({
          text: props.location.pathname.split('/').reverse()[0],
        });
      }, 500);
    }
  }

  clickHandler() {
    this.goBack();
  }

  handleKeyDown(e) {
    const { props } = this;
    if (e.keyCode === 9) {
      props.history.goBack();
    }
  }

  updateText() {
    this.setState({
      text: '',
    });
  }

  render() {
    const { props, state } = this;
    const navIcon = `fas fa-chevron-left ${navbar.ico}`;
    return (
      <nav data-testid="navbar" className={navbar.nav}>
        <Link to="/ao-kanji/" className={navbar.logo}>
          <span className={navbar.logo__kanji}>青</span>
          KANJI
        </Link>
        { props.location.pathname !== '/ao-kanji/' && <i role="button" tabIndex={-1} aria-label="Back to last page" onClick={this.clickHandler} onKeyDown={e => this.handleKeyDown(e)} className={navIcon} />}
        <SearchBar
          key={state.text}
          updateText={this.updateText}
          state={this.state}
          text={state.text}
          makeRequest={this.makeRequest}
        />
      </nav>
    );
  }
}

function mapStateToProps({ state, group }) {
  return { state: { ...state, ...group } };
}

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...SubscriptionActions }, dispatch),
  };
}

NavBar.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  state: PropTypes.objectOf(PropTypes.any).isRequired,
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(withRouter(NavBar));
