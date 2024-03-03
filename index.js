const body = document.body;
const container = document.createElement("div");
body.appendChild(container);

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then((response) => response.json())
    .then((data) => {
        const dataArr = data.slice(0, 5);
        console.log(dataArr);
        dataArr.forEach((post) => {
            const postContainer = document.createElement("div");
            const id = document.createElement("h3");
            const userId = document.createElement("h3");
            const title = document.createElement("h1");
            const body = document.createElement("p");
            id.textContent = `Post ID: ${post.id}`;
            userId.textContent = `User ID: ${post.userId}`;
            title.textContent =  `Title: ${post.title}`;
            body.textContent = `Text: ${post.body}`;
            postContainer.append(id, userId, title, body);
            postContainer.append(document.createElement("hr"));
            container.append(postContainer);
        });
    });