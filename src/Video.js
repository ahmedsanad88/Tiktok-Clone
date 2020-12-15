import React, { useRef, useState } from 'react';
import "./Video.css";
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';
import CopyrightIcon from '@material-ui/icons/Copyright';

function Video({url, channel, song, likes, messages, description, shares}) {
    // using state to trigger the video playing or not
    const [playing, setPlaying]= useState(false);

    // using ref as pointer to the video
    const videoRef = useRef(null);
    const handleVideoPress = ()=> {
        // if video playing stop it
        // if it's not then play it
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    }

    return (
        <div className="video">
            <div className="video__logo">
                <img src="https://media0.giphy.com/media/U3rive8V39QioDjmNF/source.gif" width="70px" alt="Avatar" />
                <p> tiktok-clone </p>
                <h4>&copy; 2020</h4>
                <h4>Sanad</h4>
            </div>
            <video 
                onClick={handleVideoPress}
                className="video__player"
                loop
                ref={videoRef}
                src= {url}
            ></video>

            <VideoFooter 
                tag={channel}
                discrption={description}
                song={song}
            />
            <VideoSidebar 
                like={likes}
                message={messages}
                share={shares}
            />

            {/* VideoFooter */}
            {/* VideoSidebar */}
        </div>
    )
}

export default Video;

// https://v16m.tiktokcdn.com/f0b00a77e4a06d0924b4a84ccf21520f/5f50173b/video/tos/useast2a/tos-useast2a-ve-0068c003/17791fe438be4573994ff56eebd54a762/?a=1233&br=2618&bt=1309&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009021605210101902092163013B973&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=anRnbGY6bHlsdzMzNzczM0Ap0zU3aWRlNWQ6N2Q50jM4NmdzNWRwZ2liaTBfLS1eMTZzczYWYzBjMGIwMy9gMzVeLjM6Yw%3D%3D&vl=&vr=

// to show control on the video "controls" width="520" height="840"

