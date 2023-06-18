import React, { useState } from "react";
import "./Characters.css"
import { bringAllCharacters } from "../../common/services/ApiCalls/allCharacters";
import { Card } from "../../common/Card/Card";
export const Characters = () => {
    const [characters, setCharacters] = useState([]);
    if (characters.length === 0) {
        bringAllCharacters()
            .then(data => {
                setCharacters(data.data);
            })
            .catch(error => console.log(error));
    }
    return (
        <div className="charactersStyle">
            {
                characters.length > 0
                    ? (
                        <div className="allCards">
                            {
                                characters.map(element => {
                                    return (
                                        <div key={element.id} className="characterCard">
                                            <Card
                                            picture={<img src={element.image} alt="Character Picture" width="150px"/>}
                                            name={element.name}
                                            specie={element.species}
                                            gender={element.gender}
                                            // wizard={element.wizard}
                                            house={element.house}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                    : (<div>CARGANDO...</div>)
            }
        </div>
    )
}