const body = document.body;
const postAction = document.getElementById("postAction");
const container = document.createElement("div");
container.id = "container";
body.appendChild(container);

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then((response) => response.json())
    .then((data) => {
        const dataArr = data.slice(0, 5);
        console.log(dataArr);
        dataArr.forEach((post) => {
            const postContainer = document.createElement("div");
            const title = document.createElement("h1");
            const body = document.createElement("p");
            title.textContent =  `Title: ${post.title}`;
            body.textContent = `Text: ${post.body}`;
            postContainer.id = "postContainer";
            title.id = "title";
            body.id = "blogBody";
            postContainer.append(title, body);
            postContainer.append(document.createElement("hr"));
            container.append(postContainer);
        });
    });

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
            const postContainer = document.createElement("div");
            postContainer.id = "postContainer";
            const title = document.createElement("h1");
            const body = document.createElement("p");
            const bigContainer = document.getElementById("container");
            title.textContent =  `Title: ${post.title}`;
            body.textContent = `Text: ${post.body}`;
            title.id = "title";
            body.id = "blogBody";
            postContainer.append(title, body);
            postContainer.append(document.createElement("hr"));
            const recentPost = bigContainer.firstChild;
            bigContainer.insertBefore(postContainer, recentPost);
        });
    title.value = "";
    content.value = "";
});