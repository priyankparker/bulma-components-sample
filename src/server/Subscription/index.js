import { getToken } from '..';
// import fetch from 'node-fetch'

/**
 * checks if the user has a subscription
 * @param {*} param0
 */

async function getStory({ token, username, storyId, url }) {
  return getToken(username) === token
    ? await fetchStory({
        storyId,
      })
    : {
        error: true,
        msg: 'user not logged in',
      };

  function isLoggedIn({ username, token }) {
    return;
  }
  function fetch() {
    if (isLoggedIn()) {
    } else {
    }
  }
  function fetchStory({ storyId }) {
    const getAddress = id => id;

    return fetch(getAddress(storyId))
      // .then(res => res.json()) //todo: use for fetch
      .catch(err => console.log('err: ', err));
  }
}
