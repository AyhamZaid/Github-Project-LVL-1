import React, { Component } from "react";
import Repo from "./Repo";

export default class Table extends Component {
  render() {
    const { repos } = this.props;

    return (
      <div>
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Number</th>
              <th scope="col">Title</th>
              <th scope="col">Repo status</th>
              <th scope="col">Chack</th>
              <th scope="col">is Private</th>
              <th scope="col">Language</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {repos.map((repo, i) => {
              return <Repo repo={repo} key={repos.id} deleteRepos={this.props.deleteRepos} toggleStatus={this.props.toggleStatus}/>;
            })}
          </tbody>
        </table>
        {/* <Repo Repo ={repos} /> */}
        
      </div>
    );
  }
}
