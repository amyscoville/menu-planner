import axios from "axios";

import { parseMenu, updateMenu } from "./utils";

axios.interceptors.request.use(config => {
    let token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

let defaultMenu = [
    {
        day: "monday",
        recipe: null
    }, {
        day: "tuesday",
        recipe: null
    }, {
        day: "wednesday",
        recipe: null
    }, {
        day: "thursday",
        recipe: null
    }, {
        day: "friday",
        recipe: null
    }, {
        day: "saturday",
        recipe: null
    }, {
        day: "sunday",
        recipe: null
    }
]

let menuReducer = (menu = { data: defaultMenu, loading: true }, action) => {
    switch (action.type) {
        case 'GET_MENU_ITEMS':
            let newMenu = parseMenu(menu.data, action.data);
            return {
                data: newMenu,
                loading: false
            }
        case 'ADD_MENU_ITEM':
            return {
                data: updateMenu(menu.data, action.data),
                loading: false
            }
        default:
            return menu;
    }
}

export const getMenuItems = () => {
    return dispatch => {
        axios.get(`/api/menu`)
            .then(response => {
                dispatch({
                    type: 'GET_MENU_ITEMS',
                    data: response.data
                });
            })
            .catch(err => {
                console.error(err);
            })
    }
}

export const addMenuItem = (day, id) => {
    return dispatch => {
        axios.put(`/menu/${day}`, { day: day, recipeId: id })
            .then(response => {
                dispatch({
                    type: 'ADD_MENU_ITEM',
                    data: response.data
                });
            })
            .catch(err => {
                console.error(err);
            })
    }
}

export default menuReducer;