const movies = [
    { title: "Conjuring", img: "img/movie1.webp", video: "https://www.youtube.com/embed/VFsmuRPClr4" },
    { title: "Interstellar", img: "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg", video: "https://www.youtube.com/embed/zSWdZVtXT7E" },
    { title: "The Dark Knight", img: "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg", video: "https://www.youtube.com/embed/EXeTwQWrcwY" },
    { title: "Tenet", img: "https://image.tmdb.org/t/p/original/k68nPLbIST6NP96JmTxmZijEvCA.jpg", video: "https://www.youtube.com/embed/L3pk_TBkihU" },
    { title: "Dunkirk", img: "https://image.tmdb.org/t/p/original/ebSnODDg9lbsMIaWg2uAbjn7TO5.jpg", video: "https://www.youtube.com/embed/F-eMt3SrfFU" },
    { title: "Monster", img: "img/movie2.webp" },
    { title: "chinderalla", img: "img/movie3.webp" },
    { title: "Wednesday", img: "img/netfliximg.webp" },
    { title: "Law and Order", img: "img/movie20.webp" },
    { title: "Foundation", img: "img/movie13.webp" },
    { title: "Interstellar", img: "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg" },
    { title: "The Dark Knight", img: "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
    { title: "Tenet", img: "https://image.tmdb.org/t/p/original/k68nPLbIST6NP96JmTxmZijEvCA.jpg" },
    { title: "Dunkirk", img: "https://image.tmdb.org/t/p/original/ebSnODDg9lbsMIaWg2uAbjn7TO5.jpg" }
];

const movieRow = document.getElementById("movieRow");
const banner = document.getElementById("banner");
const movieTitle = document.getElementById("movie-title");
const playBtn = document.getElementById("playBtn");
const videoModal = document.getElementById("videoModal");
const videoFrame = document.getElementById("videoFrame");
const closeModal = document.getElementById("closeModal");

let currentMovie = movies[1];

// Load movie thumbnails //suggestion movie list
movies.forEach(movie => {
    const div = document.createElement("div");
    div.classList.add("movie");
    div.style.backgroundImage = `url(${movie.img})`;
    div.title = movie.title;

    div.addEventListener("click", () => {
        banner.style.backgroundImage = `url(${movie.img})`;
        movieTitle.textContent = movie.title;
        currentMovie = movie; // store selected movie
    });

    movieRow.appendChild(div);
});


const scrollLeft = document.getElementById("scrollLeft");
const scrollRight = document.getElementById("scrollRight");

scrollLeft.addEventListener("click", () => {
    movieRow.scrollBy({ left: -300, behavior: "smooth" });
});
scrollRight.addEventListener("click", () => {
    movieRow.scrollBy({ left: 300, behavior: "smooth" });
});


// Play button opens video
playBtn.addEventListener("click", () => {
    if (currentMovie.video) {
        videoModal.style.display = "flex";
        videoFrame.src = currentMovie.video + "?autoplay=1";
    } else {
        alert("Trailer not available for this movie");
    }
});

// Close modal
closeModal.addEventListener("click", () => {
    videoModal.style.display = "none";
    videoFrame.src = "";
});