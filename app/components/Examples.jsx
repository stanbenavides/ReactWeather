var React = require("react");
var {Link} = require("react-router");

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try:</p>
      <ol>
        <li>
          <link to="/?location=Lancaster">Lancaster, PA</link>
        </li>
        <li>
          <link to="/?location=New York">New York, NY</link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
