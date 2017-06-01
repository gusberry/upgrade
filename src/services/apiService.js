import fetch from 'whatwg-fetch';

export const getData = url =>
  fetch(url)
    .then(res => res.json());