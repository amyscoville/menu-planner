import React, { Component } from 'react';
import { getRecipes } from '../../redux/recipes';
import { addMenuItem } from '../../redux/menu';
import { connect } from 'react-redux';
import Recipe from '../Recipe';
import MenuTemplate from './MenuTemplate';
import '../../Styles/MenuMaker.css'

class MenuMaker extends Component {
    componentDidMount() {
        this.props.getRecipes();
    }

    addToMenu = (day, id) => {
        this.props.addMenuItem(day, id);
    }

    render() {
        let { recipes } = this.props;
        return (
            <div className="menu-maker-wrapper">
                <div className="grid-wrapper">
                    <div className="menu-recipe-display-wrapper">
                        {recipes.map((recipe, index) => {
                            return <Recipe key={index} addToMenu={this.addToMenu} recipe={recipe} />
                        })}
                    </div>
                    <MenuTemplate />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes,
        menu: state.menu
    }
}

export default connect(mapStateToProps, { getRecipes, addMenuItem })(MenuMaker);
