type StickCard = '♥' | '♠' | '♦' | '♣';

// "stick" = "suit"

export interface CardProps {
    // "StickCard" y el "2" son los valores por defecto en caso de que no reciba nada
    stick: StickCard | string;
    rank: 2 | number;
}
