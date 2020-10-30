let totalLiked = 0;
// set a new the limit value as you wish
const limit = 3;

const Copyright = () => console.warn('%c2020-November-Kemal-Akçıl\nhttps://github.com/Kakcil/instagram-feed-auto-like-bot-unlimited', 'background: orange; color: black; font-size:larger; font-weight: 500');

console.log('%cPost Liking Has Started! Wait for first like...', 'background: yellow; color: black');
Copyright();

function LikePost(randomTime) {
  // location of the like button according to the last layout on website
  const like = document.querySelector('#react-root section main section div span svg');
  if (like) {
    like.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    // if first like
    if (like.attributes.fill.value === '#262626') {
      const closestElement = like.closest('button');
      closestElement.style.backgroundColor = 'yellow';
      closestElement.click();
      totalLiked++;
      console.log(`%c${totalLiked} POST LIKED!`, 'background: green; color: white');
      console.log(`${limit - totalLiked} post left!`);
      Copyright();
      console.log(`The next attempt will take place ${parseInt(randomTime / 1000)} seconds later.\n`);
    }
    // if liked before
    else {
      window.scrollTo(0, document.body.scrollHeight);
      console.log(`Already Liked! The next attempt will take place ${parseInt(randomTime / 1000)} seconds later.\n`);
    }
  }
}

(function Main() {
  const min = 12345; // min about 12 seconds
  const max = 23456; // max about 23 seconds
  const randomInt = () => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + min);
  const today = new Date();
  const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  console.log(`${date} ${time}`);
  if (totalLiked < limit) {
    setTimeout(() => {
      LikePost(randomInt());
      Main();
    }, randomInt());
  } else {
    console.warn('%cReached To Your Limit!', 'background: red; color: white');
    console.warn('%cTo Try Again Refresh The Page!', 'background: yellow; color: black');
    Copyright();
  }
}());
