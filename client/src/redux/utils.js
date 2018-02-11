export const parseMenu = (reduxMenu, dataMenu) => {
    for(let i = 0; i < dataMenu.length; i++) {
        switch(dataMenu[i].day) {
            case "monday":
                reduxMenu[0] = {
                    day: "monday",
                    recipe: dataMenu[i].recipeId
                }
                break;
            case "tuesday":
                reduxMenu[1] = {
                    day: "tuesday",
                    recipe: dataMenu[i].recipeId
                }
                break;
            case "wednesday":
                reduxMenu[2] = {
                    day: "wednesday",
                    recipe: dataMenu[i].recipeId
                }
                break;
            case "thursday":
                reduxMenu[3] = {
                    day: "thursday",
                    recipe: dataMenu[i].recipeId
                }
                break;
            case "friday":
                reduxMenu[4] = {
                    day: "friday",
                    recipe: dataMenu[i].recipeId
                }
                break;
            case "saturday":
                reduxMenu[5] = {
                    day: "saturday",
                    recipe: dataMenu[i].recipeId
                }
                break;
            case "sunday":
                reduxMenu[6] = {
                    day: "sunday",
                    recipe: dataMenu[i].recipeId
                }
                break;
            default:
                console.log('no changes here'); 
        }
    }
    return reduxMenu;
};

export const updateMenu = (reduxMenu, weekdayObject) => {
    switch(weekdayObject.day) {
        case "monday":
            reduxMenu[0] = {
                day: "monday",
                recipe: weekdayObject.recipeId
            }
            break;
        case "tuesday":
            reduxMenu[1] = {
                day: "tuesday",
                recipe: weekdayObject.recipeId
            }
            break;
        case "wednesday":
            reduxMenu[2] = {
                day: "wednesday",
                recipe: weekdayObject.recipeId
            }
            break;
        case "thursday":
            reduxMenu[3] = {
                day: "thursday",
                recipe: weekdayObject.recipeId
            }
            break;
        case "friday":
            reduxMenu[4] = {
                day: "friday",
                recipe: weekdayObject.recipeId
            }
            break;
        case "saturday":
            reduxMenu[5] = {
                day: "saturday",
                recipe: weekdayObject.recipeId
            }
            break;
        case "sunday":
            reduxMenu[6] = {
                day: "sunday",
                recipe: weekdayObject.recipeId
            }
            break;
        default:
            console.log('no changes here'); 
    }
    return reduxMenu;
}