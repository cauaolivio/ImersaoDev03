let moviesImages = ["https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/thumb/d/df/I_am_legend_teaser.jpg/230px-I_am_legend_teaser.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_UX182_CR0,0,182,268_AL_.jpg"]


for (let i = 0; i < moviesImages.length; i++) {
    document.write(`<img src="${moviesImages[i]}" >`)
}