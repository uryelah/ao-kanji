import React, { Component, Fragment } from "react";
import KanjiGroup from './KanjiGroup';
import PropTypes from 'prop-types';
import './Main.css';

class MainComponent extends Component { 
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

  handleSelect = (e) => {
    let { value } = e.target;
    value =  value.toLowerCase();

    if (value === 'grade') {
      this.props.actions.groupByGrade();
    } else if (value === 'macquarie') {
      this.props.actions.groupByMacquarie();
    } else if (value === 'ap exam') {
      this.props.actions.groupByAP();
    }
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

  render() {
    return (
      <Fragment>
        <header className="App__header">
          <p>Group kanjis by:</p>
          <select onChange={this.handleSelect}>
            <option selected={this.props.state.groupBy.length === 6 ? true : false} name='grade'>Grade</option>
            <option selected={this.props.state.groupBy.length === 11 ? true : false} name='macquarie'>Macquarie</option>
            <option selected={this.props.state.groupBy.length === 20 ? true : false} name='ap'>AP exam</option>
          </select>

        </header>
        <div className="group group--r-2">
          {
            this.props.state.groupBy.map(n => <KanjiGroup group={this.group()} actions={this.props.actions} grade={n}/>)
          }
        </div>
      </Fragment>
    )
  }
}

MainComponent.propTypes = {
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  state: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MainComponent;