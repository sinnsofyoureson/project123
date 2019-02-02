import React, { Component } from 'react'
import AddClient from './AddClient';
import {addClient} from '../actions/actions';

export default class ClientForm extends Component {
    handleSubmit = (values, dispatch) => {
        // Do something with the form values
        dispatch(addClient(values));
        console.log(values);
    }

  render() {
    return (
      <div>
        <AddClient onSubmit={this.handleSubmit} />
      </div>
    )
  }
}