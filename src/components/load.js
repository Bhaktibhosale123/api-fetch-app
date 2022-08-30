import React, { Component } from 'react';

export default class Load extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center'>
        <div className="spinner-border text-success m-5" role="status">
          <span className="visually-hidden">Wait for a second...</span>
        </div>
      </div>
    )
  }
}
