import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userPicked: "0",
    Score: 0,
    gamePicked: "0",
    youWin: false

}

const GameStateSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        userPicked: (state, action) => {
            state.userPicked = action.payload
        },
        GamePicked: (state, action) => {
            state.gamePicked = action.payload
        },
        YouWin: (state, action) => {
            state.youWin = action.payload
        }, ScoreCount: (state) => {
            state.Score = state.Score + 1
        }
    }
})

export default GameStateSlice.reducer
export const { userPicked, GamePicked, YouWin, ScoreCount } = GameStateSlice.actions