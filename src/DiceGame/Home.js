import React, { Component } from "react";
import { connect } from "react-redux";

import data from "./data.json";

import Dice from "./Dice";
import Result from "./Result";

class Home extends Component {
    handelPlay = () => {
        const { selectType } = this.props;

        if (!selectType) {
            return alert("Vui lòng chọn TÀI / XỈU");
        }

        let dices = [];
        for (let i = 0; i < 3; i++) {
            const index = Math.floor(Math.random() * 5);
            dices.push(data[index]);
        }
        this.props.playGame(dices);
    };

    handleSelect = (selectType) => {
        this.props.onSelectType(selectType);
    };

    render() {
        return (
            <div style={{ backgroundImage: `url("./img/bgGame.png")`, height: "100vh" }}>
                <div className="container">
                    <h1 className="text-center mb-5">Bài Tập Xúc Sắc</h1>
                    <div className="row text-center">
                        <div className="col-sm-4">
                            <button className="btn btn-danger p-5" onClick={() => this.handleSelect("TÀI")}>
                                Tài
                            </button>
                        </div>
                        <div className="col-sm-4">
                            <Dice />
                        </div>
                        <div className="col-sm-4">
                            <button className="btn btn-primary p-5" onClick={() => this.handleSelect("XỈU")}>
                                Xỉu
                            </button>
                        </div>
                        <div className="col">
                            <Result />
                            <button className="btn btn-success mt-2" onClick={this.handelPlay}>
                                PlayGame
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectType: state.dice.selectType,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: (dices) => {
            const action = { type: "PLAY_GAME", dices };
            dispatch(action);
        },
        onSelectType: (selectType) => {
            const action = { type: "SELECT_TYPE", selectType };
            dispatch(action);
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
