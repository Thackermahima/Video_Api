import React from 'react'
import { VideoItems } from './VideoItems'
const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video) => {
        return <VideoItems onVideoSelect={onVideoSelect} video={video}/>
    });
    return (
        <div>
            {renderedList}
        </div>
    )
}
export default VideoList