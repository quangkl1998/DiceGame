import React, { Component } from "react";
import { connect } from "react-redux";

class Result extends Component {
    render() {
        return (
            <div>
                <p>
                    Bạn chọn: <span className="text-danger">{this.props.selectType}</span>
                </p>
                <p>
                    Số bàn thắng: <span className="text-success">{this.props.countWin}</span>
                </p>
                <p>
                    Tổng số bàn chơi: <span className="text-primary">{this.props.countPlay}</span>
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectType: state.dice.selectType,
        countWin: state.dice.countWin,
        countPlay: state.dice.countPlay,
    };
};

export default connect(mapStateToProps)(Result);
