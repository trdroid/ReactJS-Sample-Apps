"use strict";

var React = require('react');

var Menu = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li><a href="/">Home</a></li>
            <li><a href="#details">Details</a></li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Menu;
