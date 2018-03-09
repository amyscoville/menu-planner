import axios from "axios";
const userAxios = axios.create();
userAxios
    .interceptors
    .request
    .use((config) => {
        const token = localStorage.getItem("token");
        config.headers.Authorization = `Bearer ${token}`;
        return config
    });

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
                isAuthenticated: action.success
            }
        case "LOGOUT":
            return initialState;
        default:
            return state;
    }
}

export function verifyUser() {
    return (dispatch) => {
        userAxios.get("/user/verify")
            .then((response) => {
                let { user, success } = response.data
                dispatch(authenticate(user, success));
            })
            .catch((err) => {
                console.error(err)
                dispatch(authenticate({}, false));
            })
    }
}

export function signup(userInfo) {
    return dispatch => {
        axios.post("/auth/signup", userInfo)
            .then(response => {
                const { token, user, success } = response.data;
                localStorage.token = token
                localStorage.user = JSON.stringify(user);
                dispatch(authenticate(user, success));
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
                console.log("login response data:", response.data)
                const { token, user, success } = response.data;
                localStorage.token = token
                localStorage.user = JSON.stringify(user);
                dispatch(authenticate(user, success));
                history.push('/recipes')
            })
            .catch((err) => {
                console.error(err);
            });
    }
}

export function authenticate(user, success) {
    return {
        type: "AUTHENTICATE",
        user,
        success
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

