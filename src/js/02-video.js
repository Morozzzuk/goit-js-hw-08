//^ Add imports

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// ^Add consts

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const TIME_STORAGE = 'videoplayer-current-time';
const savedTime = localStorage.getItem(TIME_STORAGE);

const getCurrentTime = function (currentTime) {
  const seconds = currentTime.seconds;
  localStorage.setItem(TIME_STORAGE, JSON.stringify(seconds));
};


player.on('timeupdate', throttle(getCurrentTime, 1000));

player.setCurrentTime(JSON.parse(savedTime) || 0);
