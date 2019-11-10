import React from "react";
import "./App.css";
import unsplash from "./api/unsplash";
import Header from "./Header";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: []
  };

  // 656bb7efcee5a3d6dcf9eb2a7adf4fb4c87a4b54174b1a3188e7706a3b780df5
  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term, page: 1, per_page: 70 }
    });

    this.setState({
      images: response.data.results
    });
  };

  render() {
    return (
      <div className="ui container">
        <Header />

        <SearchBar onSubmit={this.onSearchSubmit} />
        {/* <hr className="my-4" /> */}

        <ImageList images={this.state.images} />

        <Footer />
      </div>
    );
  }
}

export default App;
