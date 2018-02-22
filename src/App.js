// This is the root component of the app
// This can be thought of as a placeholder for other components that can be imported
import React, { Component } from 'react';
import Projects from './Components/Projects'  //import our created component into the App gateway component
import AddProject from './Components/AddProject'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount() {
    this.setState({projects: [
      {
        title: 'Flora By Laura',
        category: 'Laravel'
      },
      {
        title: 'Kakariki Kids',
        category: 'Jigsaw'
      },
      {
        title: 'Junky',
        category: 'React'
      }
    ]});
  }

  handleAddProject(project) {
    // console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;

// The <Projects /> tag will use the component we created in Projects.js
