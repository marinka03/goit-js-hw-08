import Vimeo from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on("timeupdate", 
throttle(function(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds))}, 1000));

const currentTime = localStorage.getItem("videoplayer-current-time")
const parsedCurrentTime = JSON.parse(currentTime);

player.setCurrentTime(parsedCurrentTime).then(function(seconds) {
}).catch(function(error) {
    console.log(Error);
});