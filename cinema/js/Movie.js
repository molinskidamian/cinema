class Movie {
    constructor(title, year, genre) {
        this.title = title;
        this.year = year;
        this.genre = genre;
    }

    showMovie() {
        console.log(
            `Film ${this.title} z ${this.year} roku o kategoriach: ${this.genre}`
        );
    }
}
