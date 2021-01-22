import React, { Component } from 'react';

import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Sorting from './components/Sorting';

import { v4 as uuidv4 } from 'uuid';

import './App.css';



class App extends Component {
  // States
  state = {
    filter: 'all',
    todos: [
      {
        id: uuidv4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Cook dinner',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'ReactJS tutorial',
        completed: false
      },
    ],
  }

  // Toggle Complete
  markComplete = (id) => {

    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Toggle Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] 
    });
  }

  // Toogle Clear Completed:    
  clearCompleted = () => {
    console.log("Clear Completed Clicked")
    this.setState({ todos: [...this.state.todos.filter(todo => todo.completed === false)]
    });
  }

  // Add todo
  addTodo = (title) =>{
    const newTodo = {
      id: uuidv4(), 
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  // Items left
    itemsLeftCounter = () => {
      const activeTodos = this.state.todos.filter( todo => todo.completed === false)
      return activeTodos.length;
    }

  // Filter items
   filterItems = () => {
     if ( this.state.filter === 'all') {
       return this.state.todos
     } else if ( this.state.filter === 'active') {
      return this.state.todos.filter( todo => todo.completed === false)
    } else if ( this.state.filter === 'completed') {
      return this.state.todos.filter( todo => todo.completed === true)
    } 
   }

   handleSelect = (status) => {
    this.setState({
      filter: status
    })
   }

  render () {

    return (
        <div className="App">
          <div>
              <Header />

              <div className="px-11 md-42 sm:px-24 lg:px-96">
                    <AddTodo addTodo={this.addTodo} />
                    <div className="bg-gray-800 rounded">
                      <Todos todos={this.filterItems()} markComplete={this.markComplete} delTodo={this.delTodo}/>
                    </div>
                    <div className="flex bg-gray-800 text-gray-400 px-4 py-3 md:px-4 text-xs rounded-b-lg">
                      <a className="text-gray-400 hover:text-gray-400 hover:no-underline">{this.itemsLeftCounter()} items left</a>
                      <a className="ml-auto text-gray-400 pointer hover:text-gray-300 hover:no-underline cursor-pointer" onClick={this.clearCompleted}>Clear Completed</a>
                    </div>
                    <Sorting handleSelect={this.handleSelect} filter={this.state.filter} />
              </div>

          </div>
        </div>
    );
  }
}

export default App;

