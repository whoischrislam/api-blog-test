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