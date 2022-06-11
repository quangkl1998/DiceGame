const initialState = {
    dices: [
        {
            id: 1,
            img: "./img/1.png",
        },
        {
            id: 2,
            img: "./img/2.png",
        },
        {
            id: 3,
            img: "./img/3.png",
        },
    ],
    countWin: 0,
    countPlay: 0,
    selectType: null,
    isCorrect: false,
};

const diceReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SELECT_TYPE": {
            return { ...state, selectType: action.selectType };
        }
        case "PLAY_GAME": {
            const dices = [...action.dices];
            let isCorrect = false;
            let countWin = state.countWin;

            const total = dices.reduce((total, dice) => {
                return total + dice.id;
            }, 0);

            if ((total > 10 && state.selectType === "TÀI") || (total <= 10 && state.selectType === "XỈU")) {
                isCorrect = true;
                countWin++;
                alert("Bạn đã chọn đúng");
            } else {
                alert("Bạn đã chọn sai");
            }
            return { ...state, dices, isCorrect, countWin, countPlay: state.countPlay + 1 };
        }
        default:
            return state;
    }
};

export default diceReducer;
