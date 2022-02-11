import { Character } from "../interfaces/ApiInterface";
import { ActionsEnum, InitialState } from "./InitialState";

interface Action {
    type: ActionsEnum;
    payload: Character;
}

const stateReducer = (state: InitialState, action: Action) => {
    switch (action.type) {
        case ActionsEnum.ADD:
            return { ...state, favs: [...state.favs, action.payload] };
        case ActionsEnum.DELETE:
            return { ...state, favs: state.favs.filter(fav => fav.id !== action.payload.id) };
        default:
            return state;
    }
}

export default stateReducer;