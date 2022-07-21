let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"https://cdn.jouer-style.jp/images/production/posts/eyecatches/000/011/051/original.jpg",
"https://image.co-trip.jp/content/14renewal_images_l/573816/sectionImage_5_1_20220506124545497.JPG",
"https://p1-e6eeae93.imageflux.jp/c!/a=2,w=648,h=456/princesscheese/41431249627b636bb4e2.jpg",
"https://i.pinimg.com/originals/51/7b/2f/517b2f046065cb3f412db30b9ade7353.png",
"https://media-assets.aumo.jp/uploads/photo/upload_photo/data/23067441/large_85ff5c4f-2f31-4e2a-805f-770c11adc58d.png",
"https://cdn.r-corona.jp/prd.rb.r-corona.jp/assets/site_files/kg8k2po2/17477556/cweh_.jpg",
"https://i.pinimg.com/originals/ee/ec/8c/eeec8c59e6f7bac37eb93d3a68fceede.jpg",
"https://img.rurubu.jp/img_srw/andmore/images/0000322168/oh6ikSnQTO3566Naa0hJrqs4XiEAetCiRWr5HpVr.jpeg",

];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src', url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src', url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();
  timer = setTimeout(function() {
    autoPlay();
  }, 200);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
