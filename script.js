const videoElement = document.getElementById('video');
const startButton = document.getElementById('start-button');
const resumeButton = document.getElementById('resume-button')



const selectMediaStream = async () => {
   try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
    }
    
   } 
   catch (error) {
    console.log(error);
   }
}

startButton.addEventListener('click', async () => {
    startButton.disabled = true;
    await videoElement.requestPictureInPicture();
    startButton.disabled = false;
});


selectMediaStream();









// PROCESSES
//select media stream
//pass media stream to video element
//play video when metadata is loaded


//button 
//disable button
//request picture in picture

//enable button
