import { Character } from '../interfaces/ApiInterface';

export interface InitialState {
    favs: Array<Character>;
}

const initialState: InitialState = {
    favs: []
};

export enum ActionsEnum {
    ADD,
    DELETE,
    CLEAR
}

export default initialState;