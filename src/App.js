import React, { Component } from 'react';
import './App.css';

class LeftContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:
            [
                {
                    "id":1,
                    "name": "John Lennon",
                    "salary": 55000
                },
                {
                    "id":2,
                    "name": "Paul McCartney",
                    "salary": 55000
                },
                {
                    "id":3,
                    "name": "Goerge Harisson",
                    "salary": 55000
                },
                {
                    "id":4,
                    "name": "Ringgo Star",
                    "salary": 55000
                }

            ]
        }

    }
  render() {
    return (
        <div>
            <div className="card">
                <div className="card-header">Left Side</div>
                <div className="card-body">
                    <table>
                        <tbody>
                            {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
                        </tbody>
                    </table>
                </div>
                <div className="card-footer">Footer</div>
            </div>
        </div>
    );
  }
}

class TableRow extends React.Component{
    render() {
        return (
          <tr>
              <td>{this.props.data.id}</td>
              <td>{this.props.data.name}</td>
              <td>{this.props.data.salary}</td>
          </tr>
        );
    }
}

export default LeftContent;
