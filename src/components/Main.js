import React, { Component } from "react";

export default class MainComponent extends Component {

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
        <p>I just loaded: "{this.props.state.subscription.title}"</p>
      )
    }
  }

  render() {
    return (
      <>
        <p>Hi, press button below to load data from the API.</p>

        {this.button()}

        {this.loader()}

        {this.result()}
      </>
    )
  }
}