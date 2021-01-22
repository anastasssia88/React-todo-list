import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: '',
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value});
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    } 

    render() {
        return (
            <div>
                <form autocomplete="off" className="-mt-28 mb-6 md:-mt-32" onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                    <input
                        type="text"
                        name="title"
                        className="px-3 py-3 bg-gray-800 text-gray-400 rounded text-base"
                        style={{ flex: '10', padding: '5px' }}
                        placeholder="Create a new todo..."
                        value = {this.state.title}
                        onChange={this.onChange}
                    />
                </form>
            </div>
        )
    }
}

// PropTypes
AddTodo.propTypes = { 
    addTodo: PropTypes.func.isRequired,
}

export default AddTodo
