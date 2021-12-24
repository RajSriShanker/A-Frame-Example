const constraints = {
  video: {
    facingMode: "environment",
  }
};

const video = document.querySelector('video');

navigator.mediaDevices.getUserMedia(constraints).
  then((stream) => {video.srcObject = stream});
