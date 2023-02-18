const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
// const onPlay = function (data) {
//   duration: 61.857;
//   percent: 0.049;
//   seconds: 3.034;

//   // data is an object containing properties specific to that event
// };

// player.on('play', onPlay);
