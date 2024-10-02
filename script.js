// Movie Data
const movies = [
    {
        title: "Moonlight",
        image: "https://facts.net/wp-content/uploads/2023/06/39-facts-about-the-movie-moonlight-1687575945.jpeg",
        link: "https://www.imdb.com/title/tt3874544/",
        trailer: "https://www.youtube.com/embed?listType=search&list=Moonlight",
        description: "A young African-American man grapples with his identity and sexuality while experiencing the trials of childhood, adolescence, and adulthood."
    },
    {
        title: "Call Me by Your Name",
        image: "https://facts.net/wp-content/uploads/2023/06/38-facts-about-the-movie-call-me-by-your-name-1687261526.jpg",
        link: "https://www.imdb.com/title/tt5726616/",
        trailer: "https://www.youtube.com/embed?listType=search&list=Call+Me+by+Your+Name",
        description: "In 1980s Italy, a summer romance blossoms between a 17-year-old student and his father's research assistant."
    },
    {
        title: "Pride",
        image: "https://thesoundcheck.it/wp-content/uploads/2022/06/140926-stern-pride-tease_ftpwhc.jpg",
        link: "https://www.imdb.com/title/tt3147312/",
        trailer: "https://youtu.be/khbz4ncVY9o?si=0iIiaartlHT-7XLu",
        description: "In 1984, a group of LGBT activists supports striking miners in Wales, forming an unlikely alliance."
    },
    {
        title: "Carol",
        image: "https://facts.net/wp-content/uploads/2023/06/32-facts-about-the-movie-carol-1687619282.jpg",
        link: "https://www.imdb.com/title/tt3182622/",
        trailer: "https://youtu.be/EH3zcuRQXNo?si=MAW88MKuwVCg8ieI",
        description: "In 1950s New York, a young aspiring photographer develops a relationship with an older woman going through a difficult divorce."
    },
    {
        title: "The Adventures of Priscilla, Queen of the Desert",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OH94vjO9mAahF7eLGpiSxtQleGyUWXAn1YhavotwegoZ1cmiA7yW1ytjdEQDRdh6N3c&usqp=CAU",
        link: "https://www.imdb.com/title/tt0109045/",
        trailer: "https://www.youtube.com/embed?listType=search&list=The+Adventures+of+Priscilla%2C+Queen+of+the+Desert",
        description: "Two drag queens and a transgender woman journey across Australia in a bus named Priscilla to perform their unique style of cabaret."
    }
];

// Function to display movies
function displayMovies(movies) {
    const movieGrid = document.getElementById('movieGrid');
    movieGrid.innerHTML = ''; // Clear previous cards

    movies.forEach(movie => {
        const card = `
            <div class="col-md-4 mb-4"> <!-- Add margin-bottom here -->
                <div class="card" onclick="showTrailer('${movie.trailer}', '${movie.title}', '${movie.description}', '${movie.link}')">
                    <img src="${movie.image}" class="card-img-top" alt="${movie.title}">
                    <div class="card-body">
                        <h5 class="card-title">${movie.title}</h5>
                        <p class="card-text">${movie.description.substring(0, 60)}...</p>
                    </div>
                </div>
            </div>
        `;
        movieGrid.innerHTML += card; // Append card to movie grid
    });
}

// Function to show trailer and info in the banner
function showTrailer(trailerUrl, title, description, link) {
    const trailer = document.getElementById('trailer');
    const movieTitle = document.getElementById('movieTitle');
    const movieDescription = document.getElementById('movieDescription');
    const movieLink = document.getElementById('movieLink');

    // Update the iframe source to show the trailer
    trailer.src = trailerUrl; // Set the trailer video
    trailer.style.display = "block"; // Show the trailer iframe
    movieTitle.innerText = title; // Set the movie title
    movieDescription.innerText = description; // Set the movie description
    movieLink.href = link; // Set the href attribute of the link
    movieLink.innerText = `View ${title} on IMDb`; // Update link text
    movieLink.style.display = "inline"; // Show the link
}
// Search function
document.getElementById('searchBar').addEventListener('keyup', function() {
    const searchValue = this.value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchValue));
    displayMovies(filteredMovies);
});

// Initially display all movies
displayMovies(movies);