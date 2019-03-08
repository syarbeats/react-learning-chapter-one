import React, { Component } from 'react';
import './App.css';

class LeftContent extends Component {
  render() {
    return (
        <div>
            <div className="card">
                <div className="card-header">Left Side</div>
                <div className="card-body">Content</div>
                <div className="card-footer">Footer</div>
            </div>
        </div>
    );
  }
}

export default LeftContent;
