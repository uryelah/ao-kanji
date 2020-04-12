import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './KanjiList.css';

import * as SubscriptionActions from "../actions/subscription";

class KanjiList extends Component {
  
  constructor(props) {
    super(props)
    this.props = props;
  }

  group() {
    if (this.props.state.groupBy.length === 6) {
      return 'grade=';
    } else if (this.props.state.groupBy.length === 11) {
      return 'list=mac:c';
    } else {
      return 'list=ap:c';
    }
  }

  makeRequest() {
    let url;
    if (this.props.match.params.grade_num) {
      url = `https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?${this.group()}${this.props.match.params.grade_num}`;
    } else if (this.props.match.params.word) {
      console.log(this.props.match.params.word)
      url = `https://kanjialive-api.p.rapidapi.com/api/public/search/${this.props.match.params.word}`;
    }

    const options =  {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "kanjialive-api.p.rapidapi.com",
        "x-rapidapi-key": "c6d4c3d3d5msh0980a85de22153ap1c95ecjsn1ea8a3f1317f",
      }
    }

    this.props.actions.fetchSubscription(url, options);
  }

  componentDidMount() {
    if (this.props.match.params.grade_num) {
      this.makeRequest();    
    }
  }

  clickHandler = (kanji) => {
    this.props.history.push(`/kanjis/${kanji}`, this.props.state);
  }

  render() {
    const { state } = this.props;
    return (
      <section className="kanjis-container">
        {state.subscription && state.subscription.length && state.subscription.map(kanji => {
          return(
            <article onClick={() => this.clickHandler(kanji.kanji.character)} className="kanjis-container__kanji" key={kanji.kanji.character}>
              <h2>{kanji.kanji.character}</h2>
              <p>
                <strong>radical:</strong>
                {kanji.radical.character}
              </p>
            </article>
          );
        })}
      </section>
    )
  }
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

KanjiList.propTypes = {
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  state: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(withRouter(KanjiList));