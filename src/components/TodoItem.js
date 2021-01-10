import React, { Component } from 'react';
import PropTypes from "prop-types";
import circle from "./images/circle.png";
import circleCompleted from "./images/circle-completed.png";
import circleActive from "./images/circle.png";
import arrowOnComplete from "./images/arrow-completed.png";


export class TodoItem extends Component {
    getStyle = () => {
     return {
         textDecoration: this.props.todo.completed ? 'line-through' : 'none',

     }   
    }

    circleCompleted = () => {
        return {
            backgroundImage: this.props.todo.completed ? `url(${circleCompleted})` : `url(${circleActive})`,
            cursor: 'pointer',
        }
    }

    arrowOnComplete = () => {
        return {
            backgroundImage: this.props.todo.completed ? `url(${arrowOnComplete})` : `url(${circleActive})`,
        }
    }

    render() {
        const { id, title } = this.props.todo;
        
        return (
            <div className="px-4 pt-4 text-gray-400 text-base border-b border-gray-600">
                <div className="flex align-middle">

                    <div className="circle-toggle w-7 h-7 pointer mb-3" style={this.circleCompleted()} onClick={this.props.markComplete.bind(this, id)}>
                    </div>
                    
                    <div className="ml-3 mb-3" style={this.getStyle()}>
                        { title }
                    </div>

                    <div className="ml-auto cross w-7 mb-3" onClick={this.props.delTodo.bind(this, id)}>
                    </div> 
                </div>
            </div>
        )
    }
}

/*

<p>
<img src={circle} alt="circle" onClick={this.props.markComplete.bind(this, id)}/>
    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
    { title }
    <button className="text-xl float-right" onClick={this.props.delTodo.bind(this, id)}>x</button>
</p> 

*/

// PropTypes
TodoItem.propTypes = { 
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}


export default TodoItem

