// This is the root component of the app
// This can be thought of as a placeholder for other components that can be imported
import React, { Component } from 'react';
import Projects from './Components/Projects'  //import our created component into the App gateway component
import AddProject from './Components/AddProject'
import './App.css';
import uuid from 'uuid';
import $ from 'jquery';
import Todos from './Components/Todos';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      todos:[]
    }
  }

  getToDos() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({todos: data}, function () {
          console.log(this.state);
        })
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
      }
    })
  }

  getProjects() {
    this.setState({projects: [
        {
          id:uuid.v4(),
          title: 'Flora By Laura',
          category: 'Laravel'
        },
        {
          id:uuid.v4(),
          title: 'Kakariki Kids',
          category: 'Jigsaw'
        },
        {
          id:uuid.v4(),
          title: 'Junky',
          category: 'React'
        }
      ]});
  }

  componentWillMount() {
    this.getProjects();
    this.getToDos();
  }

  componentDidMount() {
    this.getToDos();
  }

  handleAddProject(project) {
    // console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
        <hr/>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;

// The <Projects /> tag will use the component we created in Projects.js
