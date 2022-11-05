async function handleData() {
    if (!localStorage.getItem("posts")) {
        const r = await fetch(
            "https://spiderum.com/api/v1/feed/getAllPosts?type=hot&page=1",
        );
        const data = await r.json();
        const posts = data.posts.items;

        localStorage.setItem("posts", JSON.stringify(posts));
        return posts;
    } else {
        return JSON.parse(localStorage.getItem("posts"));
    }
}
