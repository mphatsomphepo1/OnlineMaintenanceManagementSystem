//isLogin
export const isLogin = () => {
    let data = localStorage.getItem("data")
    if (data != null) return true;
    else return false;
}

//doLogin => data=> set to localStorage
export const doLogin = (data, next) => {
    localStorage.setItem("data", JSON.stringify(data));
    next();
}

// doLogout => remove from localStorage
export const doLogout = (next) => {
    localStorage.removeItem("data");
    next();
}

// get current user
export const getCurrentUser = () => {
    if(isLogin){
        return JSON.parse(localStorage.getItem("data"));
    } else{
        return false;
    }
}