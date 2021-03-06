import styled from "@emotion/styled";

export const BodyCard = styled.div`
    display: inline-block;
    background: white;
    width: 150px;
    height: 220px;
    border-radius: 10px;
    padding: 10px; //padding me hace un margen interior
    margin: 10px; // margen de la carta
`;

// ojo al valor de color. Si recibe corazones o rombos, los pondrá rojos, sino, negros
export const Value = styled.div`
    color: ${props => (props.color === '♥' || props.color === '♦')? 'red' : 'black'};
    font-size: 2rem;
`;
