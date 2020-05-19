import React, {FC} from 'react';
import {BodyCard, Value} from "./styles";
import {CardProps} from "./types";

// aria-label te da más información sobre lo que se está pasando,
// luego se ve en el inspector de la web
export const ARIA_LABEL = 'card';

const Card:FC<CardProps> = ({stick, rank}) => {
    return(
        <BodyCard>
            <Value aria-label={ARIA_LABEL} color={stick}>{rank}{stick}</Value>
        </BodyCard>
    );
};

export default Card;
