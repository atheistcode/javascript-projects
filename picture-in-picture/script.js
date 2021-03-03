const videoElem = document.getElementById("video");
const pipButton = document.getElementById("pipButton");

let isPlaying = false;

const startCapture = async () => {
  let captureStream = null;

  try {
    captureStream = await navigator.mediaDevices.getDisplayMedia();
    videoElem.srcObject = captureStream;

    videoElem.onloadedmetadata = () => {
      isPlaying = true;
      videoElem.requestPictureInPicture();
    };

    pipButton.classList.add("button-right");
    pipButton.textContent = "STOP";
  } catch (err) {
    console.error("Error: " + err);
  }
  return captureStream;
};

const stopCapture = () => {
  const tracks = videoElem.srcObject.getTracks();

  tracks.forEach((track) => track.stop());
  videoElem.srcObject = null;

  isPlaying = false;

  pipButton.classList.remove("button-right");
  pipButton.textContent = "START";
};

const pipMode = async () => {
  if (!isPlaying) {
    startCapture();
  } else {
    stopCapture();
  }
};

pipButton.addEventListener("click", pipMode);
