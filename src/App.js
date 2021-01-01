import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Todos from "./components/Todos";
import Header from './components/layout/Header';
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import MyCalendar from "./components/MyCalendar";

import { v4 as uuidv4 } from 'uuid';

import './App.css';



class App extends Component {
  state = {
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
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    // ? Why he uses Map here? Why not filter? To loop over every todo in todos?

    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Toggle Delete
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] 
    });
  }

  // Add todo
  addTodo = (title) =>{
    const newTodo = {
      id: uuidv4(), 
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render () {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <div className="mx-5">
              <Header />
              <div className="row mx-2 mt-2">

                <div className="col col-lg-4 my-4">
                  <Route exact path="/" render={props => (
                    <React.Fragment>
                      <MyCalendar />
                    </React.Fragment>
                  )} />
                </div>

                <div className="col col-lg-8 my-4">
                  <Route exact path="/" render={props => (
                  <React.Fragment>
                    <AddTodo addTodo={this.addTodo} />
                    <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/> 
                  </React.Fragment>
                  )} />
                </div>
              </div>
            

              <Route exact path="/about" component={About} />

            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
