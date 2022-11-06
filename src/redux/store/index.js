import { configureStore } from "@reduxjs/toolkit"
import GameStateSlice from "./slices/GameStateSlice"
export const store = configureStore({
    reducer: {
        game: GameStateSlice
    }

})

