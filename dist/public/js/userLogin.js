var _a;
import { gid } from "./common.js";
(_a = gid('user-login-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', _ => {
    const id = gid('id').value;
    const password = gid('password').value;
    const matchUser = ({
        id: id,
        password: password
    });
    fetch('api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // 必要なヘッダー
        },
        body: JSON.stringify(matchUser)
    })
        .then(res => res.json())
        .then(data => console.log(data));
});
