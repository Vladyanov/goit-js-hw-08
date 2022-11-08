import Player from '@vimeo/player';
import _ from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  _.throttle(function ({ seconds }) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
  }, 1000)
);

const videoplayerStorageTime = () => {
  return JSON.parse(localStorage.getItem('videoplayer-current-time'));
};

player.setCurrentTime(videoplayerStorageTime());
