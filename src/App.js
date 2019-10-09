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

  addRepo = e => {
    e.preventDefault()
    const title = e.target['repo-title'].value
    const status = e.target['repo-status'].value
    const language = e.target['repo-language'].value

    if (!(title === '' || language === '' || status === 'Repo Status (Private/Public)')) {
      let repos = this.state.repos
      let repo = {id: uuid, title, status, language}
      this.setState({ repos: repos.concat(repo) })
    }
  }


  deleteRepos = id => {
    let repos = this.state.repos.filter(repo => repo.id !== id)
    this.setState({ repos })
  }
  render() {
    const { repos } = this.state;
    return (
      <div>
        <Add addRepo={this.addRepo} />

        <Table repos={repos}  deleteRepos={this.deleteRepos} toggleStatus={this.toggleStatus} />
      </div>
    );
  }
}
