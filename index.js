// References
const postAction = document.getElementById("postAction");
const container = document.getElementById("posts");
let postArray = [];

function renderPosts(post) {
    const postContainer = document.createElement("div");
    postContainer.id = "postContainer";
    const title = document.createElement("h1");
    title.id = "title";
    title.textContent =  `Title: ${post.title}`;
    const body = document.createElement("p");
    body.id = "blogBody";
    body.textContent = `Text: ${post.body}`;
    postContainer.append(title, body);
    postContainer.append(document.createElement("hr"));
    const recentPost = container.firstChild;
    container.insertBefore(postContainer, recentPost);
}


// Fetching data from the API to display the first 5 posts
fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then((response) => response.json())
    .then((data) => {
        const dataArr = data.slice(0, 5);
        console.log(dataArr);
        dataArr.forEach((post) => {
            renderPosts(post);
        });
    });

// Adding a new post and calling the API to post the new data
postAction.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("postTitle");
    const content = document.getElementById("postContent");
    const post = {
        title: title.value,
        body: content.value
    };
    const options = {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
            "Content-Type": "application/json"
        }
    };
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then((response) => response.json())
        .then((data) => {
            renderPosts(post);
        });
    postAction.reset();
});