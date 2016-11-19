$ = jQuery = require('jquery');

var React = require('react');
var ReactDOM = require('react-dom');
var Index = require('./components/index');
var Details = require('./components/details/details');

(function(window) {
  "use strict";
  var App = React.createClass({
    render: function() {
      var ChildComponent;

      switch(this.props.route) {
        case 'details': ChildComponent = Details;
          break;
        default: ChildComponent = Index;
      }

      return (
        <div>
          <ChildComponent />
        </div>
      );
    }
  });

  function render() {
      var route = window.location.hash.substr(1);
      ReactDOM.render(<App route={route} />, document.getElementById('app'));
  }

  window.addEventListener('hashchange', render);
  render();
})(window);
