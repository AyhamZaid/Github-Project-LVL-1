import React, { Component } from "react";

export default class Repo extends Component {
  render() {
    const { repo, toggleStatus, deleteRepos } = this.props;

    // console.log(this.props.repo.language)
    return (
      <tr className="table-danger">
        {/* <h6>{this.props.repo.id}</h6> */}

        <td>{repo.id}</td>
        <td>{repo.title}</td>
        <td>{repo.status}</td>
        <td>
          <input type="checkbox" onClick={() => toggleStatus(repo.id)} />
        </td>
        <td>{repo.status === "Private" ? "YES" : "NO"}</td>
        <td>{repo.language}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => deleteRepos(repo.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
