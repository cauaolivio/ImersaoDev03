function addMovie() {
    let favoriteMovie = document.getElementById("movie").value;;
    let url = `http://www.omdbapi.com/?t=${favoriteMovie}&apikey=763bfc46`;
    console.log("a")

    let movieList = document.getElementById("movieList");

    fetch(url)
        .then(res => res.json())
        .then(data => {
            movieList.innerHTML = `<img src="${data.Poster}" >`;
        });

    document.getElementById("movie").value = "";
}