console.log("page loading...");

// index     0  1   2
var likes = [9];
var spans = [document.querySelector("#number1")];

function like(id) {
    likes[id]++;
    spans[id].innerHTML= likes[id] +"like(s)"

}