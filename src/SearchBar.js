import React from "react";

class SearchBar extends React.Component {
  state = {
    term: ""
  };

  handleChange = e => {
    this.setState({
      term: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment container text-align-center text-center">
        <form className="ui my-2 form" onSubmit={this.handleSubmit}>
          <label className="mb-2" htmlFor="search">
            Enter a search term and press ENTER:
          </label>
          <br />
          <span className="mb-2" style={{ fontSize: "0.6rem" }}>
            (Click on an image to download a full size version)
          </span>
          <br />
          <input
            onChange={this.handleChange}
            type="text"
            id="search"
            placeholder="Enter a search term..."
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
