//Component comportant la partie 'Trailer' avec les composants de VIDEO-REACT
import React, { Component }from 'react';
import './Video.css';
import { Player, ControlBar, PlayToggle, VolumeMenuButton, LoadingSpinner, ForwardControl, ReplayControl} from 'video-react';

class Video extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <Player src="http://videos.hd-trailers.net/BatmanvSuperman_TLR-1_5.1-480p-HDTN.mp4">
        <LoadingSpinner />
        <ControlBar autoHide={false} disableDefaultControls={true}>
          <PlayToggle />
          <VolumeMenuButton />
          <ReplayControl seconds={30} order={2.3} />
          <ForwardControl seconds={30} order={3.3} />
        </ControlBar>
      </Player>
    );
  }
}

export default Video;
