function addMovie() {
    let favoriteMovie = document.getElementById("movie").value;;
    let urlMovie = `http://www.omdbapi.com/?t=${favoriteMovie}&apikey=763bfc46`;
    let moviePostElement = document.getElementById("moviePoster");

    getMovie(urlMovie, moviePostElement);
}

function getMovie(url, moviePost) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (!checkMovie(data)) {
                moviePost.innerHTML = `<img src="${data.Poster}" >`;
            }
        });

    document.getElementById("movie").value = "";
}

function checkMovie(check) {
    if (check.Poster == undefined || check.Poster == "N/A") {
        alert("Erro: filme inváldio! Digite novamente...")
    }
}