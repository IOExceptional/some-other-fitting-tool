import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ShipListItem} from "../list/ShipListItem";
import * as ShipSelectors from "../../../data/selectors/ShipSelectors";
import {requestShips} from "../../../data/actions/ships";
import {ShipListCategoryContainer} from "../containers/ShipListCategoryContainer";
import {CategoryTitle} from "./CategoryTitle";

class _ShipListCategory extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        types: PropTypes.arrayOf(PropTypes.number).isRequired,
        ships: PropTypes.arrayOf(PropTypes.object).isRequired
    };

    state = {
        expanded: false
    };

    clicked = () => {
        if(!this.state.expanded && this.props.ships.length === 0) {
            this.props.requestShips();
        }

        this.setState({
            expanded: !this.state.expanded
        });
    };

    render () {
        const { name, ships } = this.props;
        const { expanded } = this.state;

        return (
            <ShipListCategoryContainer>
                <CategoryTitle onClick={this.clicked}>{name}</CategoryTitle>
                {expanded &&
                    <ul>
                        {ships.map(ship => (
                            <ShipListItem key={ship.type_id} id={ship.type_id} name={ship.name}/>
                        ))}
                    </ul>
                }
            </ShipListCategoryContainer>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    ships: ShipSelectors.shipsByCategoryId(state, ownProps.id)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    requestShips: () => dispatch(requestShips(ownProps.types))
});

const ShipListCategory = connect(mapStateToProps, mapDispatchToProps)(_ShipListCategory);

export {
    ShipListCategory
};