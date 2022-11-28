// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
    getDatabase,
    ref,
    onValue,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDeX1BVGvu6ys7teuPYT6qn4edv0vQ9lcQ",
    authDomain: "hieu-s-lair.firebaseapp.com",
    projectId: "hieu-s-lair",
    storageBucket: "hieu-s-lair.appspot.com",
    messagingSenderId: "70240476202",
    appId: "1:70240476202:web:8e6e2dac47e0cba3e33753",
    databaseURL: "https://hieu-s-lair-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

document.addEventListener("DOMContentLoaded", async function () {
    const type = params.type;
    if (type == "firebase") {
        const postId = params.id;
        const blogRef = ref(database, `/blogs/${postId}`);

        onValue(blogRef, function (snapshot) {
            const post = snapshot.val();
            if (post) {
                document.querySelector("#cate").innerHTML = post.category;
                document.querySelector("#title").innerHTML = post.title;
                document.querySelector("#author-name").innerHTML = post.author;
                document.querySelector(
                    ".author-avatar",
                ).src = `https://picsum.photos/seed/${postId}/60/60`;
                document.querySelector("#description").innerHTML = post.summary;
                document.querySelector(
                    "#thumbnail",
                ).src = `https://picsum.photos/seed/${postId}/1920/1080`;

                document.querySelector("#content").remove();
                const editor = new EditorJS({
                    data: post.content,
                    readOnly: true,
                });

                document.querySelector("#overlay").remove();
            } else {
                window.location.href = "/";
            }
        });
    } else {
        const posts = await handleData();

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

            document.querySelector("#overlay").remove();
        } else {
            window.location.href = "/";
        }
    }
});
