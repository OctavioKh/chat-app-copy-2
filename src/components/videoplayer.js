import React, { useRef, useState } from 'react';
import '../Styles.css';

const VideoPlayer = ({ src, ...props }) => {
  const video = useRef();
  const playBtn = useRef();
  const muteBtn = useRef();
  const inputVolume = useRef();
  const inputProgress = useRef();
  const duration = useRef();
  const elapsed = useRef();
  const [screen, setScreen] = useState(false);
  const [playPause, setPlayPause] = useState(false);
  const [playPauseButton, setPlayPauseButton] = useState(
    <i class="fa fa-play" aria-hidden="true" style={{"color":"white "}}></i>
 
  );
  const [fullscreenButton, setFullscreenButton] = useState(
    <i class="fa fa-expand"  aria-hidden="true" style={{"color":"white "}}></i>
  );

  const togglePlayPause = () => {
    if (playPause === false) {
      video.current.play().catch(err => {
        alert(`Error attempting to start video: ${err.message} (${err.name})`);
      });
      setPlayPause(true);
      setPlayPauseButton(<i class="fa fa-pause" style={{"color":"white "}}></i>);
    } else {
      video.current.pause();
      setPlayPause(false);
      setPlayPauseButton(<i class='fa fa-play' style={{"color":"white "}}> </i>);
    }
  };

  const reload = () => {
    video.current.load();
  };

  const handleMute = () => {
    if (video.current.muted === false) {
      video.current.muted = true;
      inputVolume.current.value = 0;
      muteBtn.current.firstChild.classList.remove('fa-volume-up');
      muteBtn.current.firstChild.classList.add('fa-volume-off');
    } else {
      video.current.muted = false;
      inputVolume.current.value = 0.5;
      muteBtn.current.firstChild.classList.remove('fa-volume-off');
      muteBtn.current.firstChild.classList.add('fa-volume-up');
    }
  };

  const handleVolume = () => {
    video.current.volume = inputVolume.current.value;
  };

  const setDuration = () => {
    const minutesDuration = Math.floor(video.current.duration / 60);
    const secondsDuration = Math.floor(
      video.current.duration - minutesDuration * 60
    );
    let minuteDuration;
    let secondDuration;
    if (minutesDuration < 10) {
      minuteDuration = '0' + minutesDuration;
    } else {
      minuteDuration = minutesDuration;
    }

    if (secondsDuration < 10) {
      secondDuration = '0' + secondsDuration;
    } else {
      secondDuration = secondsDuration;
    }
    let vidDuration = `${minuteDuration}:${secondDuration}`;
    duration.current.innerHTML = vidDuration;
    inputProgress.current.max = video.current.duration;
    playBtn.current.firstChild.classList.remove('fa-pause');
    playBtn.current.firstChild.classList.add('fa-play');
  };
  const setProgress = () => {
    let minutes = Math.floor(video.current.currentTime / 60);
    let seconds = Math.floor(video.current.currentTime - minutes * 60);
    let minuteValue;
    let secondValue;

    if (minutes < 10) {
      minuteValue = '0' + minutes;
    } else {
      minuteValue = minutes;
    }

    if (seconds < 10) {
      secondValue = '0' + seconds;
    } else {
      secondValue = seconds;
    }

    let mediaTime = `${minuteValue}:${secondValue}`;
    elapsed.current.innerHTML = mediaTime;
    inputProgress.current.value = video.current.currentTime;
  };

  const skip = () => {
    video.current.currentTime = inputProgress.current.value;
  };

  const toggleFullscreen = () => {
    if (screen === false) {
      video.current.requestFullscreen().catch(err => {
        alert(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
      setScreen(false);
      setFullscreenButton(<i className='fa fa-compress' style={{"color":"white"}}> </i>);
    } else {
      document.exitFullscreen();
      setScreen(true);
      setFullscreenButton(<i className='fa fa-expand' style={{"color":"white"}}> </i>);
    }
  };

  const tooglePiP = () => {
    video.current.requestPictureInPicture();
  };

  return (
    <div className='video-container' onClick={togglePlayPause} style={{'backgroundColor': 'black'}}>
      <video
        onLoadedData={setDuration}
        onTimeUpdate={setProgress}
        
        src={src}
        ref={video}
        {...props}
        style={{ pointerEvents: 'none' }}
        autoPlay  ></video>
      <div className='video-controls hidden'>
        <div className='video-progress'>
          <input
            className='volume'
            type='range'
            ref={inputProgress}
            defaultValue='0'
            min='0.0'
            onChange={skip}
          />
          <div className='seek-tooltip'>00:00</div>
        </div>

        <div className='bottom-controls'>
          <div className='left-controls'>
            <button ref={playBtn} onClick={togglePlayPause}>
              {playPauseButton}
            </button>
            <button onClick={reload}>
              <i className='fa fa-redo hidden' style={{"color":"white "}}></i>
            </button>

            <div className='volume-controls hidden'>
              <button ref={muteBtn} onClick={handleMute}>
                <i className='fa fa-volume-up' style={{"color":"white "}}></i>
              </button>

              <input
                className='volume'
                type='range'
                ref={inputVolume}
                defaultValue='0.0'
                onChange={handleVolume}
                min='0.0'
                max='1.0'
                step='.01'
              />
            </div>

            <div className='time'>
              <time ref={elapsed}>00:00</time>
              <span> / </span>
              <time ref={duration}></time>
            </div>
          </div>

          <div className='right-controls hidden'>
            <button onClick={tooglePiP}>
              <i className='fas fa-sign-out-alt text-light'></i>
            </button> 
            <button onClick={toggleFullscreen} style={{'display':'none'}}>{fullscreenButton}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
