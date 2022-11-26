// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
    getDatabase,
    ref,
    push,
    set,
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
    // Tạo ra editor
    const editor = new EditorJS({
        placeholder: `Vào một ngày em đang làm bài tập trên LeetCode với hy vọng lương tăng gấp rưỡi thì sếp em ra vỗ vai bảo: “Trâu, anh cần chú kiếm cho anh list sách đang best seller trên mấy con e-commerce cho anh.” Thế là em phải đi đào...`,
    });

    const form = document.querySelector("#create-blog");
    form.onsubmit = (e) => {
        e.preventDefault();
        const title = document.querySelector("#title").value;
        const category = document.querySelector("#category").value;
        let summary = document.querySelector("#summary").value;

        editor
            .save()
            .then((outputData) => {
                // Bắt buộc phải xử lý ở đây vì editor.save() trả về Promise (bất đồng bộ)
                // Lưu dữ liệu vào database bằng hàm set
                set(push(ref(database, "blogs/")), {
                    title,
                    category,
                    summary,
                    content: outputData,
                    thumb: "https://picsum.photos/1920/1080",
                    author: JSON.parse(
                        localStorage.getItem("user"),
                    ).email.split("@")[0],
                }).then(function (isSaved) {
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "Lưu bài thành công!",
                    });
                });
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Fail",
                    text: "Lỗi!",
                });
            });
    };
});
