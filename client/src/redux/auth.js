import axios from "axios";

const initialState = {  
    username: "",
    isAdmin: false,
    isAuthenticated: false
}

export default function reducer(state = initialState, action) {  
    switch (action.type) {
        case "AUTHENTICATE":
            return {
                ...state,
                ...action.user,
                isAuthenticated: true
            }
        case "LOGOUT":  
            return initialState;
        default:
            return state;
    }
}

export function signup(userInfo) {
    console.log('redux signup is being called')  
    return dispatch => {
        axios.post("/auth/signup", userInfo)
            .then(response => {
                const {token, user} = response.data;
                localStorage.token = token
                localStorage.user = JSON.stringify(user);
                dispatch(authenticate(user));
            })
            .catch(err => {
                console.error(err);
            })
    }
}

export function login(credentials, history) {  
    return dispatch => {
        axios.post("/auth/login", credentials)
            .then(response => {
                const {token, user} = response.data;
                localStorage.token = token
                localStorage.user = JSON.stringify(user);
                dispatch(authenticate(user));
                history.push('/recipes')
            })
            .catch((err) => {
                console.error(err);
            });
    }
}

export function authenticate(user) {  
    return {
        type: "AUTHENTICATE",
        user  // pass the user for storage in Redux store
    }
}

export function logout(history) {  
    delete localStorage.token;
    delete localStorage.user;
    history.push('/login')
    return {
        type: "LOGOUT"
    }
}

