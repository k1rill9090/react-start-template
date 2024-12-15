import fixUsers from 'src/store/users.json';
import { Iform } from './MyAuthForm';

const {users: [user]} = fixUsers

export type UserType = typeof user;

export const validateUser = (creds: Iform) => {
    if (fixUsers.users.find(user =>
         user.email.toLowerCase() === creds.email.toLowerCase() && user.password === creds.password
        )) return true
    else return false;
}