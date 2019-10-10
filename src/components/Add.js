import React, { Component } from "react";

export default class Add extends Component {
  state={
    addRepos:{
      id : "",
      title:"",
      status: "",
      language: ""
    }
  }

  chanageStateRepo = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addState= event => {
    const { state } = this;
    const { title, language, status } = state;

    event.preventDefault();
    this.props.addRepo(title, language, status);
    this.setState({ title: "", language: "", status: "" });
  };

  render() {
    const { state, chanageStateRepo, addState } = this;
    const { title, language, status } = state;
    return (
      <div>
        <form onSubmit={addState}>
        <h6>AddRepo</h6>
          <div class="form-row">
            <div class="col">
              <input
                type="text"
                class="form-control"
               
                name="title"
                value={title}
                placeholder="repo-tilte"
                onChange={chanageStateRepo}
              />
            </div>
            <div class="col">
              <input
                type="text"
                id="repo-language"
                name="language"
                value={language}
                class="form-control"
                placeholder="repo-language"
                onChange={chanageStateRepo}

              />
            </div>
            <div class="col">
              <div className="form-group col-md-8">
                <select
                  className="form-control"
                  id="repo-status"
                  name="status"
                  value={status}
                  onChange={chanageStateRepo}
                >
                  <option>Repo Status (Private/Public)</option>
                  <option>Private</option>
                  <option>Public</option>
                </select>
              </div>

              <div className="form-group col-md-2">
                <input type="submit" onClick ={this.addState} value="Submit" className="btn btn-info" />
              </div>
            </div>
          </div>
          </form>
      </div>
    );
  }
}
