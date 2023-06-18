import axios from "axios";
export const bringAllCharacters = async () => {
    return await (
        axios.get(`https://hp-api.onrender.com/api/characters`)
    );
}