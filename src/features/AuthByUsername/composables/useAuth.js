import { ref } from 'vue';
import db from '../../../../db/db.json'

export const useAuth = ()=> {
    const users = ref([]);
    const currentUser = ref({})
    users.value = db.users
    function authenticate(username, password) {
        return new Promise((resolve, reject) => {
            const user = users.value.find(u => u.username === username && u.password === password);
            currentUser.value = user
            if (user) {
                resolve(true)

            } else {
                resolve(false);
            }
        })
    }

    return {
        authenticate,
        currentUser
    }

}
