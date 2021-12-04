const btn = document.querySelector(".getData");

btn.addEventListener("click", () => {
    // fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
    //     console.log(res);
    // });
    fetch("./data/movies.json")
        .then((res) => res.text())
        .then((text) => text);
});
