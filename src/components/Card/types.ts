type SuitCard = '♥' | '♠' | '♦' | '♣';

// "suit" = "suit"

export interface CardProps {
    // "SuitCard" y el "2" son los valores por defecto en caso de que no reciba nada
    suit: SuitCard | string;
    rank: 2 | number;
}
