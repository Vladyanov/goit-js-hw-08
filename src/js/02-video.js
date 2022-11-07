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

player.on('timeupdate', function ({ seconds }) {
  try {
    localStorage.setItem = JSON.stringify(seconds);
  } catch (error) {}
  console.log(seconds);
});

try {
  const data = JSON.parse('Well, this is awkward');
} catch (error) {}
