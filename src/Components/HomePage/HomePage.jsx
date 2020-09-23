import React, { Component } from "react";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.min.css";
import "../HomePage/HomePage.css";
import { Container } from "reactstrap";

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      imagepreview: "",
    };
    this.imageElement = React.createRef();
  }

  componentDidMount() {
    const cropper = new Cropper(this.imageElement.current, {
      zoomable: false,
      scalable: false,
      aspectRatio: 1.2,
      crop: () => {
        const canvas = cropper.getCroppedCanvas();
        this.setState({ imagePreview: canvas.toDataURL("image/png") });
      },
    });
  }

  render() {
    return (
      <Container>
        <div>
          <div className="image-main">
            <img ref={this.imageElement} src={this.props.src} alt="source" />
          </div>
          <img
            className="image-preview"
            src={this.state.imagePreview}
            alt="destination"
          />
        </div>
      </Container>
    );
  }
}
