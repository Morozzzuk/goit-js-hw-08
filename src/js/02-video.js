import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const TIME_STORAGE = 'videoplayer-current-time';
const savedTime = localStorage.getItem(TIME_STORAGE);

function onPlay(data) {
  //^ data is an object containing properties specific to that event
  localStorage.setItem(TIME_STORAGE, data.seconds);
}

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(savedTime);
