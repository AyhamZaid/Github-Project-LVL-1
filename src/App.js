import React, { Component } from "react";
import Table from "./components/Table";
import Add from "./components/Add";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from 'uuid';

export default class App extends Component {
  state = {
    repos: [
      {
        id: uuid(),
        title: "Array",
        status: "Private",
        language: "HTML"
      },
      {
        id: uuid(),
        title: "Object",
        status: "Public",
        language: "JavaScript"
      },
      {
        id: uuid(),
        title: "Array",
        status: "Public",
        language: "React"
      }
    ]
  };
  toggleStatus = id => {
   const repos = this.state.repos.map(repo => {
      if (repo.id === id) {
        if (repo.status === 'Private') {
          repo.status = 'Public'
        } else {
          repo.status = 'Private'
        }
      }
      return repo
    })
    this.setState({ repos })
  }

 
  deleteRepos = id => {
    let repos = this.state.repos.filter(repo => repo.id !== id)
    this.setState({ repos })
  }
  render() {
    const { repos } = this.state;
    return (
      <div>
        <Add />

        <Table repos={repos}  deleteRepos={this.deleteRepos} toggleStatus={this.toggleStatus} />
      </div>
    );
  }
}
