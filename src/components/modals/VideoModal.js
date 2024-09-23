import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import "../../styles/VideoTh.css";
import VideoThumbnail from "../sections/VideoThumbnail";
import PlayButton from "../buttons/PlayButton";

export class VideoModal extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <div>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={this.state.isOpen}
          videoId="uZMu-w-feLM"
          onClose={() => this.setState({ isOpen: false })}
        />
        <VideoThumbnail>
          <PlayButton onClick={this.openModal} />
        </VideoThumbnail>
      </div>
    );
  }
}

export default VideoModal;
