import React from 'react';
import recipeDefault from '../../images/recipe-default.png';
import { Link } from 'react-router-dom';

import '../../Styles/Weekday.css';

function Weekday(props) {
    let { day } = props;
    if (props.recipe) {
        let { imgUrl, name,_id } = props.recipe;
        return (
            <div className='weekday'>
                <Link to={`/recipes/${_id}`}>
                    <h3 className='day-name'>{day}</h3>
                    <div className='weekday-recipe'>
                        <div style={{ backgroundImage: `url(${imgUrl ? imgUrl : recipeDefault})`, backgroundPosition: `center`, backgroundSize: `cover`, height: '40px', width: '40px', marginRight: '5px' }}></div>
                        <p>{name}</p>
                    </div>
                </Link>
            </div>
        )
    } else {
        return (
            <div className='weekday'>
                <h3 className='day-name'>{day}</h3>
                <div className='weekday-recipe'>
                    <div style={{ backgroundImage: `url(${recipeDefault})`, backgroundPosition: `center`, backgroundSize: `cover`, height: '40px', width: '40px', marginRight: '5px' }}></div>
                    <p>Select a recipe</p>
                </div>
            </div>
        )
    }

}

export default Weekday;
