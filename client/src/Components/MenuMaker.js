import React, { Component } from 'react';
import { getRecipes } from '../redux/recipes';
import { connect } from 'react-redux';
import Recipe from './Recipe';
import '../Styles/MenuMaker.css'

class MenuMaker extends Component {
    componentDidMount() {
        this.props.getRecipes();
    }
    render() {
        let { recipes } = this.props;
        return (
            <div className="menu-maker-wrapper">
                <div className="HOLLA">
                    {recipes.map((recipe, index) => {
                        return <Recipe key={index} recipe={recipe} />
                    })}
                </div>
                <div className="menu-template-wrapper">
                    <div className="menu-template">
                        <div className="dayofweek">Sunday</div>
                        <div className="dayofweek">Monday</div>
                        <div className="dayofweek">Tuesday</div>
                        <div className="dayofweek">Wednesday</div>
                        <div className="dayofweek">Thursday</div>
                        <div className="dayofweek">Friday</div>
                        <div className="dayofweek">Saturday</div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes
    }
}

export default connect(mapStateToProps, { getRecipes })(MenuMaker);
