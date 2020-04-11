import React, { Component, Fragment } from "react";
import KanjiGroup from './KanjiGroup';
import Main from './Main.css';

export default class MainComponent extends Component { 
  componentDidUpdate() {
    console.log(this.props.state.subscription);
  }

  handleLoadDataOnClick = () => {
    const url = "https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?kem=parent";
    const options =  {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "kanjialive-api.p.rapidapi.com",
            "x-rapidapi-key": "c6d4c3d3d5msh0980a85de22153ap1c95ecjsn1ea8a3f1317f"
        }
    }

    this.props.actions.fetchSubscription(url, options);
  }

  loader = () => {
    if (this.props.state.loading) {
      return <p>Please wait, I am loading data for you...</p>
    }
  }

  button = () => {
    if (this.props.state.loading) {
      return (
        <button disabled="disabled">
          Hold tight!
        </button>
      )
    } else {
      return (
        <button onClick={this.handleLoadDataOnClick}>
          Load Data
        </button>
      )
    }
  }

  result = () => {
    if (this.props.state.subscription) {
      return (
        <section className="group--r-2">
          <KanjiGroup>
            <p>Kanji: {this.props.state.subscription[0].kanji.character}</p>
            <p>Radical: {this.props.state.subscription[0].radical.character}</p>
          </KanjiGroup>
        </section>
      )
    }
  }

  render() {
    return (
      <Fragment>
        <header className="App__header">
          <p>Hi, press button below to load data from the API.</p>

          {this.button()}

          {this.loader()}

          {this.result()}
        </header>
        <div className="group group--r-2">
          {
            [1,2,3,4,5,6].map(n => <KanjiGroup actions={this.props.actions} grade={n}/>)
          }
        </div>
      </Fragment>
    )
  }
}