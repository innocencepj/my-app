import * as React from "react";
import Header from "./Header";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div>Welcome to bbs.</div>
      </div>
    );
  }
}
export default Home;
