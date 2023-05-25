import axios from "axios";

//pode usar outra api basta abrir a porta e mudar a URL aqui
export const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
});
