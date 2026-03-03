const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const videoFrame = document.getElementById("videoFrame");
const closeBtn = document.getElementById("closeModal");
const buttonPop = document.getElementById("button-popup");

// Select all images
const images = document.querySelectorAll(".popup-img");

// When image is clicked
images.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
    videoFrame.style.display = "none";
    modalImg.style.display = "block";
    buttonPop.style.display = "block";
    buttonPop.dataset.video = img.dataset.video; // store video link
  });
});

// Play video on button click
buttonPop.addEventListener("click", () => {
  const videoUrl = buttonPop.dataset.video;
  videoFrame.src = videoUrl + "?autoplay=1";
  modalImg.style.display = "none";
  videoFrame.style.display = "block";
  buttonPop.style.display = "none";
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  videoFrame.src = ""; // stop video
});