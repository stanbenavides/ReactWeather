var React = require("react");

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });

// use of arrows to replace above function code
var About = (props) => {
    return (
        <div>
            <h3>About</h3>
            <p>Welcome to the About page</p>
        </div>

    )
};

module.exports = About;
