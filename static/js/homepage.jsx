"use strict";

function Homepage() {
  return (
    <div>
      <h1>Welcome once more.</h1>
      <a href="/cards">Check out these cards!</a>
      <br></br>
      <img src="/static/img/balloonicorn.jpg" />
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector("#app"));
