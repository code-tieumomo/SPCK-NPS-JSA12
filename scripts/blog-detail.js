const postId = params.id;
const post = posts[postId];

if (post) {
    document.querySelector("#cate").innerHTML = post.cat_id.name;
    document.querySelector("#title").innerHTML = post.title;
    document.querySelector("#author-name").innerHTML =
        post.creator_id.display_name;
    document.querySelector(
        ".author-avatar",
    ).src = `https://images.spiderum.com/sp-xs-avatar/${post.creator_id.avatar}`;
    document.querySelector("#description").innerHTML = post.description;
    document.querySelector(
        "#thumbnail",
    ).src = `https://images.spiderum.com/sp-thumbnails/${post.thumbnail}`;
} else {
    window.location.href = "/";
}
