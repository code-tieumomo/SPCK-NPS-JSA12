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
const blogRef = ref(database, "/blogs");

document.addEventListener("DOMContentLoaded", async function () {
    const posts = await handleData();
    let popularPosts = posts
        .sort((a, b) => b.hot_point - a.hot_point)
        .slice(0, 4);
    popularPosts.forEach((post, index) => {
        document.querySelector("#popularPosts").insertAdjacentHTML(
            "beforeend",
            `<div class="col-lg-6 post">
          <img
              src="https://images.spiderum.com/sp-thumbnails/${post.thumbnail}"
              alt=""
              class="post-thumb"
          />
          <div class="post-content">
              <div class="post-info">
                  <div class="post-cate">
                      <a href="" class="post-type">${post.cat_id.name.toUpperCase()}</a> -
                      <span class="post-readtime"
                          >22 phút đọc</span
                      >
                  </div>
                  <button class="post-bookmark">
                      <svg
                          viewBox="0 0 500 500"
                          height="18"
                          width="18"
                      >
                          <path
                              d="M171.88,52.08a68,68,0,0,0-67.71,67.71v312.5A15.63,15.63,0,0,0,128.93,445L250,357.79,371.07,445a15.62,15.62,0,0,0,24.76-12.68V119.79a68,68,0,0,0-67.7-67.71Zm0,31.25H328.13a36.23,36.23,0,0,1,36.45,36.46v282L259.13,325.87a15.61,15.61,0,0,0-18.26,0L135.42,401.79v-282A36.23,36.23,0,0,1,171.88,83.33Z"
                              class="cls-1"
                          ></path>
                      </svg>
                  </button>
              </div>
              <a href="/pages/blog-detail.html?id=${index}" class="post-name">
                  [SPOILER] Đánh giá về tập 10 season 1 của House
                  of the Dragon
              </a>
              <p class="post-desc">
                  Review và một vài cảm nhận (có spoiler) về tập
                  thứ 10 của House of the Dragon
              </p>
              <div class="post-author">
                  <img
                      src="https://images.spiderum.com/sp-xs-avatar/0a73bd5043f111edbf64b7ea2877ad2e.jpeg"
                      alt=""
                  />
                  <a class="author-name">Hải Stark</a>
              </div>
          </div>
      </div>`,
        );
    });

    onValue(blogRef, function (snapshot) {
        document.getElementById("trending-posts").innerHTML = "";
        snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const post = childSnapshot.val();

            document.getElementById("trending-posts").insertAdjacentHTML(
                "beforeend",
                `
                    <div class="post">
                        <img
                            src="https://picsum.photos/seed/${childKey}/1920/1080"
                            alt=""
                            class="post-thumb w-100"
                        />
                        <div class="post-content flex-grow-1">
                            <div class="post-info">
                                <span class="post-readtime ms-0 fs-8"
                                    >22 phút đọc</span
                                >
                                <button class="post-bookmark">
                                    <svg
                                        viewBox="0 0 500 500"
                                        height="18"
                                        width="18"
                                    >
                                        <path
                                            d="M171.88,52.08a68,68,0,0,0-67.71,67.71v312.5A15.63,15.63,0,0,0,128.93,445L250,357.79,371.07,445a15.62,15.62,0,0,0,24.76-12.68V119.79a68,68,0,0,0-67.7-67.71Zm0,31.25H328.13a36.23,36.23,0,0,1,36.45,36.46v282L259.13,325.87a15.61,15.61,0,0,0-18.26,0L135.42,401.79v-282A36.23,36.23,0,0,1,171.88,83.33Z"
                                            class="cls-1"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                            <a
                                href="/pages/blog-detail.html?id=${childKey}&type=firebase"
                                class="post-name"
                            >
                                ${post.title}
                            </a>
                            <p class="post-desc">
                                ${post.summary}
                            </p>
                            <div
                                class="post-author align-items-center d-flex"
                            >
                                <img
                                    src="https://images.spiderum.com/sp-xs-avatar/0a73bd5043f111edbf64b7ea2877ad2e.jpeg"
                                    alt=""
                                />
                                <a class="author-name fs-8"
                                    >${post.author}</a
                                >
                                <div class="dot mx-1 fs-8 text-muted">
                                    ●
                                </div>
                                <span class="text-muted fs-8"
                                    >3 Th11</span
                                >
                            </div> 
                        </div>
                    </div>
                `,
            );
        });

        document.querySelector("#overlay").remove();
    });
});
