import { gid } from "./common.js";

gid('user-create-form')?.addEventListener('submit', _ => {
    const id = (gid('id') as HTMLInputElement).value;
    const name = (gid('user-name') as HTMLInputElement).value;
    const password = (gid('password') as HTMLInputElement).value;

    const newUser = ({
        id: id,
        name: name,
        password: password
    });
    fetch('api/createUser', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',  // 必要なヘッダー
        },
        body: JSON.stringify(newUser)
    });
})