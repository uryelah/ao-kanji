import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Route, Switch } from "react-router-dom";
import './KanjiList.css';

import * as SubscriptionActions from "../actions/subscription";

class KanjiList extends Component {
  
  constructor(props) {
    super(props)
    this.props = props;
  }

  componentDidMount() {
    const url = `https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?grade=${this.props.match.params.grade_num}`;
    const options =  {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "kanjialive-api.p.rapidapi.com",
          "x-rapidapi-key": "c6d4c3d3d5msh0980a85de22153ap1c95ecjsn1ea8a3f1317f",
        }
      }

    this.props.actions.fetchSubscription(url, options);
  }

  clickHandler = (kanji) => {
    this.props.history.push(`/kanjis/${kanji}`, this.props.state);
  }

  render() {
    const { actions, state } = this.props;

    return(
      <section className="kanjis-container">
        {state.subscription && state.subscription.length && state.subscription.map(kanji => {
          console.log(kanji)
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

export default connect(mapStateToProps, mapActionsToProps)(KanjiList);