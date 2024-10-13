var id = 'ice28041';
var userName = 'ア▶イス';
var password = 'iiiic';

fetch('http://localhost:3000/api/createUser', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',  // 必要なヘッダー
    },
    body: JSON.stringify({id: id, name: userName, password: password})
})
.then(res => res.json())
.then(data => console.log(data))
.then(_ => {
    fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',  // 必要なヘッダー
        },
        body: JSON.stringify({id: id, password: password})
    })
    .then(res => res.json())
    .then(data => console.log(data))
});

// fetch('http://localhost:3000/api/login', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',  // 必要なヘッダー
//     },
//     body: JSON.stringify({id: id, password: password})
// })
// .then(res => res.json())
// .then(data => console.log(data))
