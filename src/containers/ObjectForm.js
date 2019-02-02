import React, { Component } from 'react'
import AddObject from './AddObject';
import {addObject} from '../actions/actions';

export default class ObjectForm extends Component {
    handleSubmit = (values, dispatch) => {
        // Do something with the form values
        dispatch(addObject(values));
        console.log(values);
    }

  render() {
    return (
      <div>
        <AddObject onSubmit={this.handleSubmit} />
      </div>
    )
  }
}
