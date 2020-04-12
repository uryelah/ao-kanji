import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import './KanjiDetail.css';

import * as SubscriptionActions from '../actions/subscription';

class KanjiDetail extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    const url = `https://kanjialive-api.p.rapidapi.com/api/public/kanji/${this.props.match.params.kanji}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'kanjialive-api.p.rapidapi.com',
        'x-rapidapi-key': 'c6d4c3d3d5msh0980a85de22153ap1c95ecjsn1ea8a3f1317f',
      },
    };

    this.props.actions.fetchSubscription(url, options);
  }

  details() {
    return (
      <>
        <video width="320" height="240" autoPlay loop>
          <source src={this.props.state.subscription.kanji.video.mp4} type="video/mp4" />
          <source src={this.props.state.subscription.kanji.video.webm} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <h1>{this.props.state.subscription.kanji.character}</h1>
        <h3>
          {this.props.state.subscription.kanji.kunyomi.hiragana}
          {' '}
          -
          {' '}
          {this.props.state.subscription.kanji.onyomi.katakana}
        </h3>
        <h2>{this.props.state.subscription.kanji.meaning.english}</h2>
        <hr />
        <article>
          Strokes
          <div>
            {this.props.state.subscription.kanji.strokes.images.map(image => <img src={image} width="60" />)}
          </div>
        </article>
        <hr />
        <strong>
          Radical:
          {this.props.state.subscription.radical.character}
        </strong>
        <hr />
        <article>
          <h3>Examples</h3>
          <ul>
            {this.props.state.subscription.examples.map(example => (
              <li>
                <strong>{example.japanese}</strong>
                {' '}
                -
                <em>{example.meaning.english}</em>
                <div>
                  <audio controls>
                    <source src={example.audio.mp3} type="audio/mp3" />
                    <source src={example.audio.aac} type="audio/aac" />
                    <source src={example.audio.ogg} type="audio/ogg" />
                  </audio>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </>
    );
  }

  render() {
    if (this.props.state.subscription) {
      const {
        kanji, examples, radical, references,
      } = this.props.state.subscription;
      console.log(kanji, examples, radical, references);
    }

    return (
      <section className="kanjis-detail">
        { this.props.state.subscription && this.props.state.subscription.kanji ? this.details()
          : <h1>...loading</h1>}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...SubscriptionActions }, dispatch),
  };
}

KanjiDetail.propTypes = {
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  state: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(KanjiDetail);
