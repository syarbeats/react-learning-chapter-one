import React, { Component } from 'react';
import '../App.css';

class Counter extends Component {

    constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    state = {
        count: 0,
        imageUrl: 'https://picsum.photos/200',
        tags: ['tag1', 'tag2', 'tag3']
    };

    styles ={
      fontSize: 20,
      fontWeight: "bold"
    };

    handleIncrement = product =>{
        console.log(product);
        this.setState({count: this.state.count + 1})
    }

    render() {

        return (
           <div>
               <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
               <button onClick={() => this.handleIncrement({id: 1})} className="btn btn-secondary btn-sm">Increment</button>
               { this.renderTags()}
           </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }

    renderTags(){
        if(this.state.tags.length === 0) return <p>There are no tags!</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}> { tag } </li>)}</ul>;
    }
}
export default Counter;
