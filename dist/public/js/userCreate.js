var _a;
import { gid } from "./common.js";
(_a = gid('user-create-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', _ => {
    const id = gid('id').value;
    const name = gid('user-name').value;
    const password = gid('password').value;
    const newUser = ({
        id: id,
        name: name,
        password: password
    });
    fetch('api/createUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // 必要なヘッダー
        },
        body: JSON.stringify(newUser)
    });
});
