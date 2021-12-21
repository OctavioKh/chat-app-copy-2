import React from 'react';

export const movies = [
  {
    sources:
      'http://macarenapuelles.life/static/media/hell.mp4',
    subtitle: 'Hell Videocall',
    thumb:
      'http://macarenapuelles.life/static/media/hell.png',
    title: 'Hell Videocall'
  },
  {
    sources:
      'http://macarenapuelles.life/static/media/spiders.mp4',
    subtitle: 'I was raised by hungry dogs and spiders',
    thumb:
      'http://macarenapuelles.life/static/media/spiders.png',
    title: 'I was raised by hungry dogs and spiders'
  },
  { 
    sources:
      'http://macarenapuelles.life/static/media/lalita.mp4',
    subtitle: 'Lalita',
    thumb:
      'http://macarenapuelles.life/static/media/lalita.png',
    title: 'Lalita'
  },
  {
    sources:
      'http://macarenapuelles.life/static/media/orgasm.mp4',
    subtitle: 'Orgasm Addict',
    thumb:
      'http://macarenapuelles.life/static/media/orgasm.png',
    title: 'Orgasm Addict'
  },
  {
    sources:
      'http://macarenapuelles.life/static/media/pepino.mp4',
    subtitle: 'Pepino',
    thumb:
      'http://macarenapuelles.life/static/media/pepino.png',
    title: 'Pepino'
  },
  
  {
    sources:
      'http://macarenapuelles.life/static/media/sangre.mp4',
    subtitle: 'Sangre',
    thumb:
      'http://macarenapuelles.life/static/media/sangre.png',
    title: 'Sangre'
  },
  {
    sources:
      'http://macarenapuelles.life/static/media/Lucero11.mp4',
    subtitle: 'Lucero',
    thumb:
      'http://macarenapuelles.life/static/media/lucero.png',
    title: 'Lucero'
  }

];

const Sidebar = ({ setCurrentVideo }) => {
  const handleClick = e => {
    setCurrentVideo(e.currentTarget.getAttribute('data-url'));
  };
  return movies.map(movie => {
    return (
      <img
        className='pointer'
        key={movie.title}
        width='70px'
        src={movie.thumb}
        alt={movie.title}
        data-url={movie.sources}
        onClick={e => handleClick(e)}
      />
    );
  });
};

export default Sidebar;
