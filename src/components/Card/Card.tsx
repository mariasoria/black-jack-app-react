import React, {FC} from 'react';
import {BodyCard, Value} from "./styles";
import {CardProps} from "./types";

// aria-label te da más información sobre lo que se está pasando,
// luego se ve en el inspector de la web
export const ARIA_LABEL = 'card';

// los parámetros que le estoy pasando los pongo entre {} para hacer el destructuring directamente
const Card:FC<CardProps> = ({suit, rank}) => {
    return(
        <BodyCard>
            <Value aria-label={ARIA_LABEL} color={suit}>{rank}{suit}</Value>
        </BodyCard>
    );
};

export default Card;
