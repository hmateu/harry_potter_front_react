import React from "react";
import "./Card.css";
export const Card = ({id,picture,name,specie,gender,wizard,house}) => {
    return(
        <div className="cardStyle">
            <div className="commonCard cardId">{id}</div>
            <div className="commonCard cardImg">{picture}</div>
            <div className="commonCard cardName">{name}</div>
            <div className="commonCard cardSpecie">Especie: {specie}</div>
            <div className="commonCard cardGender">Gender: {gender}</div>
            {/* <div className="commonCard cardWizard">Wizard: {wizard}</div> */}
            <div className="commonCard cardHouse">House: {house}</div>
        </div>
    )
}