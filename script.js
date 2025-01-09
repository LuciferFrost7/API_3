
const task = 1;
// 0 = пункт 1
// 1 = пункт 3

if(!task) {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => console.log(json))
}else {
    for (let i = 1; i < 16; i++) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${i}`)
            .then(response => response.json())
            .then(json => console.log(json))
    }
}