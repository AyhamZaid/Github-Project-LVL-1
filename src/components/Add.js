import React, { Component } from "react";

export default class Add extends Component {
  render() {
    return (
      <div>
        <h6>AddRepo</h6>
        <form onSubmit={this.props.addRepo}>
          <div class="form-row">
            <div class="col">
              <input
                type="text"
                class="form-control"
                id="repo-tilte"
                name="repo-tilte"
                placeholder="repo-tilte"
              />
            </div>
            <div class="col">
              <input
                type="text"
                id="repo-language"
                name="repo-language"
                class="form-control"
                placeholder="repo-language"
              />
            </div>
            <div class="col">
              <div className="form-group col-md-8">
                <select
                  className="form-control"
                  id="repo-status"
                  name="repo-status"
                >
                  <option>Repo Status (Private/Public)</option>
                  <option>Private</option>
                  <option>Public</option>
                </select>
              </div>

              <div className="form-group col-md-2">
                <input type="submit" value="Submit" className="btn btn-info" />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
