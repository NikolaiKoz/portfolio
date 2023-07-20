import React from 'react'
import { videoBackground, ImgBackgorund } from './VideoBackground.module.scss';
import background from '../../assets/videos/BackgroundNeon.mp4';
import backgroundImg from '../../assets/img/wall.jpg';


function VideoBackground() {
  return (

	<figure>
		<img className={ImgBackgorund} src={backgroundImg} alt="FOndo prueba" />
	</figure>
		// <video
		// 	className={videoBackground}
		// 	src={background}
		// 	autoPlay
		// 	loop
		// 	muted
		// 	playsInline
		// 	loading='lazy'
		// ></video>
	);
}

export default VideoBackground