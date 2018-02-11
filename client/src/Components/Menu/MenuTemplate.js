import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMenuItems } from '../../redux/menu';
import Weekday from './Weekday';

class MenuTemplate extends Component {
    componentDidMount() {
        this.props.getMenuItems()
    }
    render() {
        let { loading, data } = this.props.menu;
        return (
            loading ?
                <div>
                    Loading...
                </div>
                :
                <div>
                    {data.map((menuItem, index) => {
                        return <Weekday key={index} {...menuItem}/>
                    })}
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menu: state.menu
    }
}

export default connect(mapStateToProps, { getMenuItems })(MenuTemplate);