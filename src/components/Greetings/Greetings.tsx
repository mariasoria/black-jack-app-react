import React, {FC} from 'react';
import {Title} from './styles';

interface GreetingsProps{
    name: string;
    lastname?: string;
}

const Greetings:FC<GreetingsProps> = ({name, lastname}) => {
    return (
        <div>
            <Title aria-label={'greetings'}> Hello {name} {lastname}</Title>
        </div>
    );
};

export default Greetings;
