import { Paginated, Character } from "../interfaces/ApiInterface";
import { CustomAxios } from "../utils/CustomAxios";

export const getCharactersPaginated = (page = 1) => {
    return CustomAxios.get<Paginated<Character>>(`character/?page=${page}`);
}
export const getCharacter = (id: number) => {
    return CustomAxios.get<Character>(`character/${id}`);
}