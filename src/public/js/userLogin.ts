import { gid } from "./common.js";

gid('user-login-form')?.addEventListener('submit', _ => {
    const id = (gid('id') as HTMLInputElement).value;
    const password = (gid('password') as HTMLInputElement).value;

    const matchUser = ({
        id: id,
        password: password
    });
    fetch('api/login', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',  // 必要なヘッダー
        },
        body: JSON.stringify(matchUser)
    })
    .then(res => res.json())
    .then(data => console.log(data));
});