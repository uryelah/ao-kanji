import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import kanji from './styles/KanjiDetail.module.css';
import Loader from './Loader';

import * as SubscriptionActions from '../actions/subscription';

const KanjiDetail = props => {
  const { state, match } = props;

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
    <>
      <header className={kanji.header}>
        <img className={kanji.poster} src={state.subscription.kanji.video.poster} alt="video poster" />
        <video className={kanji.video} autoPlay loop>
          <track src="" kind="captions" srcLang="en" label="no_captions" />
          <source src={state.subscription.kanji.video.mp4} type="video/mp4" />
          <source src={state.subscription.kanji.video.webm} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <div className={kanji.top}>
          <div className={kanji.block}>
            <h3>Strokes</h3>
            <p>{state.subscription.kanji.strokes.count}</p>
          </div>
          <div className={kanji.block}>
            <h3>Radical</h3>
            <p>{state.subscription.radical.character}</p>
          </div>
          <div className={kanji.block}>
            <h3>Kunyomi</h3>
            <p>{state.subscription.kanji.kunyomi.hiragana}</p>
          </div>
          <div className={kanji.block}>
            <h3>Onyomi</h3>
            <p>{state.subscription.kanji.onyomi.katakana}</p>
          </div>
        </div>
      </header>
      <aside className={kanji.meaning}>
        <h1>{state.subscription.kanji.character}</h1>
        <h2>
          <span className={kanji.readings}>
            <span className={kanji.yomi}>{state.subscription.kanji.kunyomi.romaji}</span>
          </span>
          <span className={kanji.readings}>
            <span className={kanji.yomi}>{state.subscription.kanji.onyomi.romaji}</span>
          </span>
          <span>·</span>
          <span>{state.subscription.kanji.meaning.english}</span>
        </h2>
      </aside>

      <aside>
        <h3 className={kanji.stroke_title}>Stroke order:</h3>
        <div className={kanji.strokes}>
          {state.subscription.kanji.strokes.images.map(image => <img className={kanji.stroke} key={image} src={image} width="60" alt="kanji_stroke" />)}
        </div>
      </aside>
      <article className={kanji.examples}>
        <h3>Examples</h3>
        <ul>
          {state.subscription.examples.map(example => (
            <li key={example.japanese + example.english}>
              <p className={kanji.example}>
                <strong>{example.japanese}</strong>
                {' · '}
                <em>{example.meaning.english}</em>
              </p>
              <audio className={kanji.audio} controls>
                <track src="" kind="captions" srcLang="en" label="no_captions" />
                <source src={example.audio.mp3} type="audio/mp3" />
                <source src={example.audio.aac} type="audio/aac" />
                <source src={example.audio.ogg} type="audio/ogg" />
              </audio>
            </li>
          ))}
        </ul>
      </article>
      <footer className={kanji.references}>
        <h4>References</h4>
        <ul>
          <li>Grade: <strong className={kanji.chapter}>{state.subscription.references.grade}</strong></li>
          <li>Kodansha: <strong className={kanji.chapter}>{state.subscription.references.kodansha}</strong></li>
          <li>Classic Nelson: <strong className={kanji.chapter}>{state.subscription.references.classic_nelson}</strong></li>
        </ul>
      </footer>
    </>
  );

  return (
    <section className={kanji.detail}>
      { (state.subscription && state.subscription.kanji) ? details()
        : <Loader />}
    </section>
  );
};

function mapStateToProps({ state, group }) {
  return { state: { ...state, ...group } };
}

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...SubscriptionActions }, dispatch),
  };
}

KanjiDetail.propTypes = {
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  state: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(KanjiDetail);
