import {myAxios} from './helper';

export const LoginUser = (logindetails) => {
    return myAxios.post('/authenticate', logindetails)
    .then((response) => response.data);
}