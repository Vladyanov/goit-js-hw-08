import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
console.log(player);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

localStorage.setItem =
  ('vimeo-pause',
  player.on('timeupdate', function ({ seconds }) {
    console.log(seconds);
  }));
