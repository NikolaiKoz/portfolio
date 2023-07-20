import React from 'react'
import { videoBackground } from './VideoBackground.module.scss';
import background from '../../assets/videos/BackgroundNeon.mp4';


function VideoBackground() {
  return (
		<video
			className={videoBackground}
			src={background}
			autoPlay
			loop
			muted
			playsInline
			loading='lazy'
		></video>
	);
}

export default VideoBackground