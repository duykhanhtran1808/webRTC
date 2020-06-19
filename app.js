'use strict';
let start = document.querySelector("#startButton")
let stop = document.querySelector("#stopButton")


navigator.mediaDevices.getUserMedia({audio: true, video: false}).then(function(mediaStreamObj) {
  let video = document.querySelector('video');

  

  start.addEventListener('click', (ev) => {
    video.srcObject = mediaStreamObj
    video.play()
  })

  stop.addEventListener('click', (ev) => {
    // video.pause()  // Sẽ để lại hình tạm dừng trên video
    video.srcObject = null
  })



}).catch(function(err) {
  console.log(err.name, err.message)
})
