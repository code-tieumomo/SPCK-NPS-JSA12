function element (){
    function insert(pos, html) {
        console.log(pos, html);
    }
}

(new element()).insert("beforeend", "Hello World");

const pop = posts.sort((a, b) => b - a);