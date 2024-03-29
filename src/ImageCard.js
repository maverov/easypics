import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
    console.log(this.props.image);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({
      spans
    });
  };

  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <a href={this.props.image.urls.full} target="_blank">
          <img
            style={{ cursor: "pointer" }}
            className="mb-2"
            ref={this.imageRef}
            src={this.props.image.urls.regular}
            alt={this.props.image.description}
          />
        </a>
      </div>
    );
  }
}

export default ImageCard;
