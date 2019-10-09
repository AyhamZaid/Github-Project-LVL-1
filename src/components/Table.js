import React, { Component } from 'react';

export default class Table extends Component {
  render() {
    return (
      <div style={{ border: '3px green dotted' }}>
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
    <tr>
      <th scope="row">1</th>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      
    </tr>
    <tr>
      <th scope="row">3</th>
     
    </tr>
    
    
  </tbody>
</table>
      </div>
    );
  }
}
