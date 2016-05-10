var React = require("react");
var {Link, IndexLink} = require("react-router");

// var Nav = React.createClass({
//   render: function () {
//     return (
//       <div>
//       <h2>Nav Component</h2>
//       <IndexLink to="/">Get Weather</IndexLink>
//       <Link to="/about">About</Link>
//       <Link to="/examples">Examples</Link>
//       </div>
//     );
//   }
// });

var Nav = () => {
  return (
    <div>
    <h2>Nav Component</h2>
    <IndexLink to="/">Get Weather</IndexLink>
    <Link to="/about">About</Link>
    <Link to="/examples">Examples</Link>
    </div>
  );
};


module.exports = Nav;
