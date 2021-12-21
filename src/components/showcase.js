import React, { useState } from 'react';
import VideoPlayer from './videoplayer';
import SideBar from './sidebar';

const Showcase = () => {
  const [currentVideo, setCurrentVideo] = useState(
    'http://macarenapuelles.life/static/media/hell.mp4'
  );
  return (
    <div>
      <VideoPlayer src={currentVideo} />
      <div>
        <SideBar setCurrentVideo={setCurrentVideo} />
      </div>
    </div>
  );
};

export default Showcase;
