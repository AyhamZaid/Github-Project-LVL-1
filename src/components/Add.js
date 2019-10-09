import React, { Component } from 'react';

export default class Add extends Component {
  render() {
    return (
      <div style={{ border: '3px orange solid' }}>
        <h6>Add</h6>
        <form>
          <div class="form-row">
            <div class="col">
              <input type="text" class="form-control" placeholder="repo tilte"/>
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="repo language"/>
            </div>
            <div class="col">
            <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Repo Status(Prive/public)
  </button>
            </div>
          </div>
        </form>
    </div>
    );
  }
}
