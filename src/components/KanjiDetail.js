import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import kanji from './styles/KanjiDetail.module.css';
import Loader from './Loader';

import * as SubscriptionActions from '../actions/subscription';

const KanjiDetail = props => {
  const { state, match } = props;
  if (state.subscription) {
    const {
      kanji, examples, radical, references,
    } = state.subscription;
  }

  useEffect(() => {
    const url = `https://kanjialive-api.p.rapidapi.com/api/public/kanji/${match.params.kanji}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'kanjialive-api.p.rapidapi.com',
        'x-rapidapi-key': 'c6d4c3d3d5msh0980a85de22153ap1c95ecjsn1ea8a3f1317f',
      },
    };

    props.actions.fetchSubscription(url, options);
  }, []);

  const details = () => (
    <Fragment>
      <video width="320" height="240" autoPlay loop>
        <source src={state.subscription.kanji.video.mp4} type="video/mp4" />
        <source src={state.subscription.kanji.video.webm} type="video/ogg" />
        Your browser does not support the video tag.
      </video>
      <h1>{state.subscription.kanji.character}</h1>
      <h3>
        {state.subscription.kanji.kunyomi.hiragana}
        {' '}
        -
        {' '}
        {state.subscription.kanji.onyomi.katakana}
      </h3>
      <h2>{state.subscription.kanji.meaning.english}</h2>
      <hr />
      <article>
        Strokes
        <div>
          {state.subscription.kanji.strokes.images.map(image => <img key={image} src={image} width="60" />)}
        </div>
      </article>
      <hr />
      <strong>
        Radical:
        {state.subscription.radical.character}
      </strong>
      <hr />
      <article>
        <h3>Examples</h3>
        <ul>
          {state.subscription.examples.map(example => (
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
    </Fragment>
  );

  return (
    <section className={kanji.detail}>
      { (state.subscription && state.subscription.kanji) ? details()
        : <Loader />}
    </section>
  );
};

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
