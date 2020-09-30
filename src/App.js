import React from "react";
import SearchBar from "./searchBar";
import unsplash from "./api/unsplash";
import "./App.css";
import ImageList from "./components/ImageList";

class App extends React.Component {
  state = { images: [] };
  onSearchSubbmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container App" style={{ marginTop: "16px" }}>
        <SearchBar onSubmit={this.onSearchSubbmit} />
        <ImageList images={this.state.images} />
        {/* Found {this.state.images.length} images */}
      </div>
    );
  }
}

export default App;
