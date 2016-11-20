"use strict";

var React = require('react');

var Details = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Details</h1>
        <table>
          <tr>
            <th>Course</th>
            <th>Icon</th>
            <th>Instructor</th>
          </tr>
          <tr>
            <td>Android</td>
            <td><img src="imgs/android.png"/></td>
            <td>Albert Eistein</td>
          </tr>
          <tr>
            <td>AngularJS</td>
            <td><img src="imgs/angularjs.png"/></td>
            <td>Isaac Newton</td>
          </tr>
        </table>
      </div>
    );
  }
});

module.exports = Details;
