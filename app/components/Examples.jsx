var React = require("react");
var {Link} = require("react-router");

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try:</p>
      <ol>
        <li>
          <Link to="/?location=Lancaster,PA,US">Lancaster, PA</Link>
        </li>
        <li>
          <Link to="/?location=New York,NY,US">New York, NY</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
