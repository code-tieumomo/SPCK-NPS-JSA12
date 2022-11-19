document.addEventListener("DOMContentLoaded", async function () {
    if (localStorage.getItem("user")) {
        document.querySelector("#login").remove();
        document.querySelector("#signup").remove();
        document.querySelector("#logout").classList.remove("invisible");
    }

    // Tạo ra editor
    const editor = new EditorJS({
        placeholder: `Vào một ngày em đang làm bài tập trên LeetCode với hy vọng lương tăng gấp rưỡi thì sếp em ra vỗ vai bảo: “Trâu, anh cần chú kiếm cho anh list sách đang best seller trên mấy con e-commerce cho anh.” Thế là em phải đi đào...`,
    });

    const form = document.querySelector("#create-blog");
    form.onsubmit = (e) => {
        e.preventDefault();
        const title = document.querySelector("#title").value;
        const category = document.querySelector("#category").value;
        const summary = document.querySelector("#summary").value;
        
    };
});
