'use strict';
let start = document.querySelector("#startButton")
let stop = document.querySelector("#stopButton")


navigator.mediaDevices.getUserMedia({audio: true, video: true}).then(function(mediaStreamObj) {
  let video = document.querySelector('video');
  video.srcObject = mediaStreamObj


  

  start.addEventListener('click', (ev) => {
    video.play()
  })

  stop.addEventListener('click', (ev) => {
    video.pause()
  })



}).catch(function(err) {
  console.log(err.name, err.message)
})
