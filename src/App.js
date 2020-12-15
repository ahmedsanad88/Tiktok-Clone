import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './Video';
import axios from './axios';


function App() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {

    async function fetchPosts(){
      const response = await axios.get('/v2/posts');
      setVideos(response.data);

      return response;
    }
    fetchPosts();
  }, []);

  return (
    <div className="app">
      <div className="app__videos">

        {videos.map(
          ({id, url, channel, song, likes, messages,description, shares}) => (
          <Video 
          url={url}
          channel={channel}
          song={song}
          likes={likes}
          messages={messages}
          description={description}
          shares={shares}
          />
         )
        )}

      {/* app container */}
      {/* videos */}
      </div> 
    </div> 
  );
}

export default App;
