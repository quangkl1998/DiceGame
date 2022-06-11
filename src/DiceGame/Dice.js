import React, { Component } from "react";
import { connect } from "react-redux";
class Dice extends Component {
    render() {
        const { dices } = this.props;
        return (
            <div>
                {dices.map((dice, i) => {
                    return <img key={i} src={dice.img} alt="" width="100px" height="100px" />;
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dices: state.dice.dices,
    };
};

export default connect(mapStateToProps)(Dice);
