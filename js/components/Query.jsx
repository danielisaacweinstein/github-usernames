"use strict"

import React from 'react'
import { connect } from 'react-redux'
import { submit } from '../actions.js'
import * as Immutable from 'immutable'

export class Query extends React.Component {
  constructor (props) {
    super(props);
    [
      'handleSubmit',
    ].forEach((fn) => {
      this[fn] = this[fn].bind(this);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let query = this.refs.queryInput.value;
    this.props.dispatch(submit(query));
  }

  render() {
    return (
      <div className="queryPanel">
        <h1>Query:</h1>
        <form onSubmit={this.handleSubmit}>
          <input className="queryInput" ref="queryInput"/>
        </form>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    query: state.get('query')
  }
}

export const QueryContainer = connect(mapStateToProps)(Query);
