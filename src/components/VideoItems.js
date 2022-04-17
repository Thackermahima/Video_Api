import React from 'react'
import './VideoItems.css';
export const VideoItems = ({ video, onVideoSelect }) => {
    return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
    <img className="ui image" src={video.snippet.thumbnails.medium.url}  />
    <div className="content">
      <div className="header">{video.snippet.title}</div>
    </div>
  </div>
);
}
